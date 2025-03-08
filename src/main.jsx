import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import "./index.css";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import "./utils/i18.js";
import Root from "./ReusedComponents/Root.jsx";
import PageNotFound from "./ReusedComponents/PageNotFound.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Home from "./components/Home.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/aboutus",
            element: <AboutUs />,
          },
          {
            path: "/contactus",
            element: <ContactUs />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer toastClassName="custom-toast" autoClose={2000} />
    <RouterProvider router={router} />
  </Provider>
);
