import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Container from "../../components/Container";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

import img from "../../assets/images/404-page/404.jpg";

const NotFound = () => {
  useDocumentTitle("Trang 404");
  return (
    <div className="h-screen flex-center bg-[#ffffff]">
      <Container>
        <div className="flex flex-col justify-center items-center pt-[20px] pb-[60px] rounded-[10px]">
          <div className="w-[500px] h-[500px] mb-[25px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={img}
              alt="img 404"
            />
          </div>
          <div className="text-[--sub-color] text-[40px] font-[700] mb-[15px]">
            <span className="text-[48px] font-[900] text-[--primary-color] text-shadow">
              404
            </span>{" "}
            Trang không tìm thấy
          </div>
          <div className="text-[--sub-color] text-[20px] font-[500] mb-[50px]">
            Tiếc quá! HTGSOFT chưa tìm thấy trang bạn cần. Nếu bạn cần giúp đỡ,
            hãy đến{" "}
            <Link
              to={"/"}
              className="text-[--primary-color] font-[500] underline decoration-1"
            >
              Trung tâm hỗ trợ
            </Link>
          </div>
          <Link
            to={"/"}
            className="text-[21px] font-[500] bg-[--primary-color] px-[36px] py-[15px] rounded-[3rem] text-[#ffffff]"
          >
            Về lại trang chủ
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
