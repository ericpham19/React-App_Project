
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Navbar from "./components/Navbar"
import Trade from "./Pages/Trade";
import Contact from "./Pages/Contact"
const App =() => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/coin/:id" element={<Details/>}/>
      <Route path= "/trade" element={<Trade/>}/>
      <Route path= "/contact" element={<Contact/>}/>
      


      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
