// import Container from "../../components/Container";

import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import BasicSignup from "./component/basicSignup";

const SignUpPage = () => {
  useDocumentTitle("Đăng ký");

  return (
    <>
      {/* <Container className="flex-center"> */}
      <BasicSignup />
      {/* </Container> */}
    </>
  );
};

export default SignUpPage;
