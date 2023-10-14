import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import Container from "../../../components/Container";

const Navbar = () => {
  return (
    <div className="bg-[--primary-color] hidden lg:block">
      <Container>
        <div className="flex-between text-[14px] font-[500] text-[--white-color] py-[6px]">
          <div className="flex-center">
            <Link
              className="border-l-[1px] border-[#F6F7F7] border-solid px-[20px]"
              to={"/"}
            >
              Kênh người bán
            </Link>
            <Link
              className="border-l-[1px] border-[#F6F7F7] border-solid px-[20px]"
              to={"/"}
            >
              Tải ứng dụng
            </Link>
            <div className="flex-center gap-x-[5px]">
              <Link
                className="border-l-[1px] border-[#F6F7F7] border-solid pl-[20px]"
                to={"/"}
              >
                Kết nối
              </Link>
              <BsFacebook className="text-[16px]" />
              <BsInstagram className="text-[16px]" />
            </div>
            <div></div>
          </div>
          <div>
            <Link
              className="border-l-[1px] border-[#F6F7F7] border-solid px-[20px]"
              to={"/"}
            >
              Giới thiệu
            </Link>
            <Link
              className="border-x-[1px] border-[#F6F7F7] border-solid px-[20px]"
              to={"/"}
            >
              Kiến thức ITo
            </Link>
            <Link
              className="border-r-[1px] border-[#F6F7F7] border-solid px-[20px]"
              to={"/"}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
