import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Logo from "../../../assets/images/logo/logo.svg";

import Container from "../../../components/Container";
// import SignIn from "../../../components/ButtonSign";

const SubHeader = () => {
  return (
    <div className="bg-[--white-color] box-shadow">
      <Container>
        <div className="flex-between py-[13px]">
          <Link to={"/"}>
            <div className="w-[144px] h-[34px]">
              <LazyLoadImage
                effect="blur"
                className="w-full h-full object-contain"
                src={Logo}
                alt="logo"
              />
            </div>
            <div className="text-[12px] text-[#000]">
              High Tech Generation Solutions
            </div>
          </Link>
          {/* <div className="flex-center gap-x-[15px]">
            <Link
              to={"/"}
              className="text-[--sub-color] text-[14px] hidden lg:block"
            >
              Bạn cần giúp đỡ ?
            </Link>
            <SignIn />
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default SubHeader;
