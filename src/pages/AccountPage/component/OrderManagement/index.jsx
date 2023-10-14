/* eslint-disable no-unused-vars */
import { useState } from "react";
import OrderTop from "./component/OrderTop";
import FilterOrder from "./component/filterOrder";
import ItemOrder from "./component/itemOrder";

const OrderManagement = () => {
  return (
    <div>
      <OrderTop />
      <FilterOrder />
      <ItemOrder />
    </div>
  );
};

export default OrderManagement;
