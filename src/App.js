
import './App.css';

import Register from './Components/home/Register';
import Home from './Components/home/Home';
import Login from './Components/home/Login';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
       <Routes>
        <Route path ="/" element={<Home/>}/>
        {/* <Route path ="/NR" element = {<Home/>}/>
        <Route path ="/LL" element = {<Home/>}/> */}
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/register" element ={<Register/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
