import { Outlet } from "react-router-dom";
import "./App.css";
import Loader from "./ReusedComponents/Loader";
// import CollapsibleNavbar from "./ReusedComponents/Navbar";

function App() {
  return (
    <>
      {/* <CollapsibleNavbar /> */}
      <Loader />
      <Outlet />
    </>
  );
}

export default App;
