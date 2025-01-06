
import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ResponsiveNavbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default App;
