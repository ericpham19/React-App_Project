import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/coin/:id" element={<Details/>}/>


      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;