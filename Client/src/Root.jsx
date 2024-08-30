import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Plans from "./Pages/Plans";
import Navbar from "./Plugins/Navbar";
import Footer from "./Plugins/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Service /> },
      { path: "plans", element: <Plans /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function Root() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Root;
