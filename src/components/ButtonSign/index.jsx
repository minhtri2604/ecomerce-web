import { Link } from "react-router-dom";

import { Button } from "../Button";

const SignIn = () => {
  return (
    <div className="flex-center gap-x-[15px] cursor-pointer hidden lg:flex">
      <Link to={"/signup"}>
        <Button className="bg-[--primary-color] text-[--white-color] hover:bg-[--white-color] hover:text-[--primary-color] transition">
          Đăng ký
        </Button>
      </Link>
      <Link to={"/signin"}>
        <Button className="text-[--primary-color] hover:bg-[--primary-color] hover:text-[--white-color] transition">
          Đăng nhập
        </Button>
      </Link>
    </div>
  );
};

export default SignIn;
