import { useParams } from "react-router";
import Container from "../../components/Container";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import ViewProduct from "./component/viewProduct";
import InfoProduct from "./component/infoProduct";
import { TitlePage } from "../../components/TitlePage";
import WriteComment from "./component/writeComment";
import Comment from "./component/comment";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
  useDocumentTitle("Chi tiết sản phẩm");

  const accessToken = useSelector((state) => state.auth.accessToken);

  const params = useParams();

  return (
    <>
      <TitlePage className="mt-[5px]">Trang chủ / Sản phẩm</TitlePage>
      <Container>
        <div className="mt-[50px] flex justify-between gap-[30px] bg-[--white-color] py-[50px] px-[20px] rounded-[10px] box-shadow">
          <ViewProduct params={params} />
          <InfoProduct params={params} />
        </div>
        {accessToken && (
          <div className="mt-[20px] bg-[--white-color] py-[30px] px-[20px] rounded-[10px] box-shadow">
            <WriteComment />
          </div>
        )}

        <div className="mt-[20px] bg-[--white-color] py-[30px] px-[20px] rounded-[10px] box-shadow">
          <Comment />
        </div>
      </Container>
    </>
  );
};

export default ProductDetailPage;
