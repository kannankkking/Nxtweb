import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Website_development from "./Components/Website_development";
import Software_development from "./Components/Software_development";
import Mobileapp_development from "./Components/Mobileapp_development";
import Ecommerce from "./Components/Ecommerce";
import Marketing from "./Components/Marketing";
import Contact from "./Components/Contact";




function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/Website_development" element={<Website_development/>}/>
  <Route path="/Software_development" element={<Software_development/>}/>
  <Route path="/Mobileapp_development" element={<Mobileapp_development/>}/>
  <Route path="/Ecommerce" element={<Ecommerce/>}/>
  <Route path="/Marketing" element={<Marketing/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>
   
    </div>
  );
}

export default App;
