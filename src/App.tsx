import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesContext from "./context/CountriesContext";
import Body from "./components/Body";
import OpenedCountry from "./pages/OpenedCountry";


const App = () =>  { 
  
  const loc = useLocation();
  return (
    <CountriesContext>
        <Navbar />
        <Routes location={loc} >
              <Route path="/" element={<Body />} />
              <Route path="/OpenedCountry" element={<OpenedCountry />} />
        </Routes>
    </CountriesContext>
  )

}


export default App;