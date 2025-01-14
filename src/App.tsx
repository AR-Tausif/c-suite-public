import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/bse.css";
import "./css/embla.css";

const App = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
