import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AddTrailer from "./pages/AddTrailer";
import TrailerDetails from "./pages/TrailerDetails";

function App() {
  return (
    <>
    <ToastContainer theme="dark"></ToastContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/agregar" element={<AddTrailer />}></Route>
          <Route path="/agregar/:id" element={<AddTrailer />}></Route>
          <Route path="/trailer/:id" element={<TrailerDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
