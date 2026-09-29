// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";



// export const PostContactSheet = createAsyncThunk("PostContactSheet", async ( UserContactData , { rejectWithValue }) => {
//   console.log(UserContactData);
//     try {
//       const res = await axios.post("");
//       return res.data; // array of categories
//     } catch (err) {
//       return rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );

// const tester = createSlice({
//   name: "testerSlice",
//   initialState: {
//     isLoading: false,
//     PatientData: [],
//     BPM_Data:[]
//   },
//   reducers: {},
//   extraReducers: (builder) => {
   
//     // builder.addCase(getContactSheet.fulfilled, (state, action) => {
//     //   state.isLoading = false;
//     //   state.BPM_Data = action.payload;
//     // });
//   },
// });

// export default tester.reducer;






import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx2yVwF7Wp7MiVbLnhF1srDZ0nlniLEy3l4OZjSTYp5bZhazHBWKVCgyVMAfMqhUQ5SWA/exec";


// =====================================================
// POST CONTACT FORM DATA TO GOOGLE SHEET
// =====================================================

export const PostContactSheet = createAsyncThunk(
  "PostContactSheet",

  async (UserContactData, { rejectWithValue }) => {

    try {

      console.log("Contact Data:", UserContactData);

      const res = await axios.post(
        GOOGLE_SCRIPT_URL,
        UserContactData.formData,
        {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );

      console.log("Google Sheet Response:", res.data);

      return res.data;

    } catch (err) {

      console.error("Google Sheet Error:", err);

      return rejectWithValue(
        err.response?.data || err.message
      );
    }
  }
);


// =====================================================
// SLICE
// =====================================================

const tester = createSlice({

  name: "testerSlice",

  initialState: {
    isLoading: false,
    useContactData: [],
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(PostContactSheet.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(PostContactSheet.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addCase(PostContactSheet.rejected, (state) => {
        state.isLoading = false;
      });

  },
});


export default tester.reducer;