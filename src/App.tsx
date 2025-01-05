
import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <ResponsiveNavbar/>
      <Outlet/>
    </div>
  );
};

export default App;
