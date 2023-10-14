import Container from "../../components/Container";
import TableProduct from "./component/tableProduct";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const ProductPage = () => {
  useDocumentTitle("Sản phẩm");

  return (
    <Container>
      <TableProduct className="mt-[20px]" />
    </Container>
  );
};

export default ProductPage;
