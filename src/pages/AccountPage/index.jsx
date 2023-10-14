import { useLocation } from "react-router";

import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import AccountInfo from "./component/AccountInfo";
import { useEffect, useState } from "react";

import BusinessInfo from "./component/BusinessInfo";
import AddressBook from "./component/AddressBook";
import OrderManagement from "./component/OrderManagement";
import LayoutAccountPage from "../../components/AccountLayout";
import Favourite from "./component/Favourite";
import Voucher from "./component/Voucher";
import Ranking from "./component/Ranking";
import Wallet from "./component/Wallet";
const AccountPage = () => {
  const [title, setTitle] = useState("");
  useDocumentTitle(title);

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/account/business-information":
        setTitle("Thông tin doanh nghiệp");
        break;

      case "/account/address":
        setTitle("Sổ địa chỉ");
        break;

      case "/account/order-management":
        setTitle("Quản lý đơn hàng");
        break;
      case "/account/ranking":
        setTitle("Thứ hạng & tích luỹ điểm");
        break;
      case "/account/wallet":
        setTitle("Ví và tài khoản thanh toán");
        break;

      default:
        setTitle("Thông tin tài khoản");
        break;
    }
  }, [location.pathname]);

  return (
    <LayoutAccountPage title={`Trang chủ / Tài khoản / ${title}`}>
      {(location.pathname === "/account/account-infomation" ||
        location.pathname === "/account/business-information" ||
        location.pathname === "/account/address") && (
        <div className="flex-1 h-fit bg-[--white-color] rounded-[10px] py-[20px] px-[30px]">
          {location.pathname === "/account/account-infomation" && (
            <AccountInfo />
          )}
          {location.pathname === "/account/business-information" && (
            <BusinessInfo />
          )}
          {location.pathname === "/account/address" && <AddressBook />}
        </div>
      )}

      {location.pathname === "/account/order-management" && (
        <div className="flex-1">
          <OrderManagement />
        </div>
      )}
      {location.pathname === "/account/favourite" && (
        <div className="flex-1">
          <Favourite />
        </div>
      )}
      {location.pathname === "/account/voucher" && (
        <div className="flex-1">
          <Voucher />
        </div>
      )}
      {location.pathname === "/account/ranking" && (
        <div className="flex-1">
          <Ranking />
        </div>
      )}
      {location.pathname === "/account/wallet" && (
        <div className="flex-1">
          <Wallet />
        </div>
      )}
    </LayoutAccountPage>
  );
};

export default AccountPage;
