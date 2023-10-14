import Container from "../../components/Container";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import Banner from "./component/beforeSignin/banner";
import CommitmentCenter from "./component/beforeSignin/commitmentCenter";
import Customer from "./component/beforeSignin/customer";
import Partner from "./component/partner";
import PharmacyCenter from "./component/beforeSignin/pharmacyCenter";
import Promotion from "./component/beforeSignin/promotion";
import SignupPromotion from "./component/beforeSignin/signupPromotion";
import { NotiPage, TitlePage } from "../../components/TitlePage";
import SearchForYou from "./component/afterSignin/SearchForYou";
import SearchBy from "./component/afterSignin/searchBy";
import BannerAfterSignin from "./component/afterSignin/banner";
import News from "./component/afterSignin/news";
import Service from "./component/afterSignin/service";
import { useSelector } from "react-redux";

const HomePage = () => {
  useDocumentTitle("Trang chủ");
  const accessToken = useSelector((state) => state.auth.accessToken);

  return (
    <>
      {accessToken ? (
        <>
          <TitlePage className="mt-[5px] mb-[50px]">Trang chủ</TitlePage>
          <Container>
            <SearchForYou />
            <SearchBy />
            <BannerAfterSignin />
            <News />
            <Service />
            <Partner />
          </Container>
        </>
      ) : (
        <>
          <NotiPage className="mt-[10px]">
            Tài khoản của quý khách sẽ không được kích hoạt nếu không cung cấp
            đủ thông tin yêu cầu
          </NotiPage>
          <Container>
            <Banner />
            <PharmacyCenter />
            <CommitmentCenter />
            <Promotion />
            <SignupPromotion />
            <Customer />
            <Partner />
          </Container>
        </>
      )}
    </>
  );
};

export default HomePage;
