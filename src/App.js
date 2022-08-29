import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Navbar from "./components/Navbar"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/coin/:id" element={<Details/>}/>
      


      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
