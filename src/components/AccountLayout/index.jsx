/* eslint-disable react/prop-types */
import { useLocation } from "react-router";
import { TitlePage } from "../TitlePage";
import ItemLeft from "../../pages/AccountPage/component/ItemLeft";
import { dataAccount } from "../../data/dataModalAccount";
import Container from "../Container";

const LayoutAccountPage = ({ children, ...props }) => {
  const location = useLocation();

  return (
    <>
      <TitlePage className="mt-[5px] mb-[20px]">{props.title}</TitlePage>
      <Container>
        <div className="flex gap-x-[20px]">
          <ItemLeft
            location={location.pathname}
            data={dataAccount.slice(0, 10)}
          />
          {children}
        </div>
      </Container>
    </>
  );
};

export default LayoutAccountPage;
