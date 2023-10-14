import { Outlet } from "react-router";
import MainFooter from "./Footer";
import MainHeader from "./Header";
import Navbar from "./Navbar";
// import Banner from "./Banner";
import GoToTop from "../../components/goToTop";

const MainLayout = () => {
  return (
    <>
      {/* <Banner /> */}
      <Navbar />
      <MainHeader />
      <Outlet />
      <GoToTop />
      <MainFooter />
    </>
  );
};

export default MainLayout;
