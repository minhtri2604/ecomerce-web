import { useLocation } from "react-router";

import LayoutAccountPage from "../../components/AccountLayout";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import StatusOrder from "./component/statusOrder";
import AddressOrder from "./component/addressOrder";
import ProductOrder from "./component/productOrder";
import NotiOrder from "./component/notiOrder";
import BackCode from "./component/backCode";

const DetailOrderpage = () => {
  const location = useLocation();
  const data = location.state?.data || null;
  useDocumentTitle(`Đơn hàng ${data?.code}`);

  return (
    <LayoutAccountPage
      title={`Trang chủ / Tài khoản / Đơn hàng ${data?.code} `}
    >
      <div className="flex-1 bg-[--white-color] rounded-[10px]">
        <BackCode data={data} location={location?.pathname} />
        <StatusOrder data={data} location={location?.pathname} />
        <AddressOrder location={location?.pathname} />
        <ProductOrder />
        {(location?.pathname ===
          "/account/order-management/detail/wait-goods" ||
          location?.pathname ===
            "/account/order-management/detail/being-transport") && (
          <NotiOrder price={"600.000đ"} />
        )}
      </div>
    </LayoutAccountPage>
  );
};

export default DetailOrderpage;
