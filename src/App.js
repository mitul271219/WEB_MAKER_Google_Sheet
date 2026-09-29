import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home_web } from './Components/Home/Home_web';


function App() {
  return (
   <>
         <Routes>
           <Route path="/" element={<Home_web/>} />
         </Routes>
   </>
  );
}

export default App;
