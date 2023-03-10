import MainPage from "./pages/mainpage/MainPage";
import SideBar from "./components/sidebar/SideBar";
import ArrivalPage from "./pages/arrivalPage/ArrivalPage";
import { Route, Routes } from "react-router-dom"
import DepaturePage from "./pages/departurePage/DepaturePage";
import BusRoute from "./pages/busRoute/BusRoute";
import DeposPage from "./pages/deposPage/DeposPage";


function App() {
  return (
    <div className="App">
      <div id="wrapper">
      <SideBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/arrival" element={<ArrivalPage/>} />
        <Route path="/depature" element={<DepaturePage/>} />
        <Route path="/route" element={<BusRoute name="Colombo-Kandy"/>} />
        <Route path="/route_1" element={<BusRoute name="Colombo-Kalutara"/>} />
        <Route path="/depo" element={<DeposPage/>} />
      </Routes>
        
         
      </div>
    </div>
    
  );
}

export default App;
