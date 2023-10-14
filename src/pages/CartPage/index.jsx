import { useState } from "react";
import Container from "../../components/Container";
import Step from "../../components/Step";
import { TitleCart } from "../../components/Title";
import { TitlePage } from "../../components/TitlePage";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import Order from "./component/step1/order";
import Step1 from "./component/step1";
import Step2 from "./component/step2";
import DetailOrder from "./component/detailOrder";

const CartPage = () => {
  useDocumentTitle("Giỏ hàng");
  const [active, setActive] = useState("cart");

  const [dataBuy, setDataBuy] = useState(null);

  const handleDataBuy = (data) => {
    setDataBuy(data);
  };

  const handleSetActive = (data) => {
    setActive(data);
  };
  return (
    <>
      <TitlePage className="mt-[5px] mb-[40px]">Trang chủ / Giỏ hàng</TitlePage>
      <Container>
        <div className="flex items-center gap-[25px]">
          <TitleCart>Giỏ hàng của tôi</TitleCart>
          <Step step1="Giỏ hàng" step2="Chi tiết thanh toán" step3="Hoàn tất" />
        </div>
        <div className="flex items-start gap-[20px] mt-[20px]">
          {active === "cart" && (
            <Step1
              handleSetActive={handleSetActive}
              handleDataBuy={handleDataBuy}
              dataBuy={dataBuy}
            />
          )}
          {active === "pay" && (
            <Step2 handleSetActive={handleSetActive} dataBuy={dataBuy} />
          )}
          {active === "detailOder" && <DetailOrder dataBuy={dataBuy} />}
        </div>
        <Order />
      </Container>
    </>
  );
};

export default CartPage;
