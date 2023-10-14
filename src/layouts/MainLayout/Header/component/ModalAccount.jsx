/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuth } from "../../../../redux/auth/auth.slice";

import { dataAccount } from "../../../../data/dataModalAccount";

const ModalAccount = ({ ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("cartProducts");
    dispatch(setAuth({ accessToken: null, infoUser: null }));
    navigate("/");
  };

  return (
    <div
      className={`${props.className} w-[312px] bg-[--white-color] border-left-bottom modal-shadow py-[30px] px-[30px] z-10 hover-modal-account`}
    >
      <div className="text-[14px] text-[--sub-color] border-b-[1px] border-solid border-[--border-color] mb-[10px] pb-[20px]">
        Tài khoản
      </div>
      <div className="flex flex-col gap-y-[20px]">
        {dataAccount.map((item) => (
          <div key={item.id}>
            {item.id != 11 ? (
              <Link
                className="flex-center gap-x-[20px] hover:translate-x-[5px] hover:text-[--primary-color] transition"
                to={item.url}
              >
                <item.img className="text-[35px]" />
                <div className="w-full text-[14px] text-[--sub-color] font-[500]">
                  {item.title}
                </div>
              </Link>
            ) : (
              <div
                className="flex-center gap-x-[20px] hover:translate-x-[5px] hover:text-[--primary-color] transition"
                onClick={handleLogout}
              >
                <item.img className="text-[35px]" />
                <div className="w-full text-[14px] text-[--sub-color] font-[500]">
                  {item.title}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalAccount;
