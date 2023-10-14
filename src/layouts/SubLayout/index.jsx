import { Outlet } from "react-router";

import SubHeader from "./component/SubHeader";

const index = () => {
  return (
    <>
      <SubHeader />
      <Outlet />
    </>
  );
};

export default index;
