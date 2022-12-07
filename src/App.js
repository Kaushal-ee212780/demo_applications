import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Error from './Components/Error';
import Employee from "./Components/Employee"
import Header from './Components/Header';
import EmployeeTable from './Components/EmployeeTable';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} >
         {/* <Route path="/about" element={<Home />} /> */}
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/employee" element={<Employee />} />
         <Route path="/employeetable" element={<EmployeeTable />} />
         <Route path="*" element={<Error />} />        
      </Route>  
     </Routes>
    </BrowserRouter>
  );
}

export default App;
