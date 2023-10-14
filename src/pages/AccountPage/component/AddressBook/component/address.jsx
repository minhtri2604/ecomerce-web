import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LiaSaveSolid } from "react-icons/lia";

import { setAddress } from "../../../../../redux/comment/comment.slice";
import NotiCheckInfo from "../../../../../components/NotiCheck";
import { NameItemInput } from "../../AccountInfo/component/nameItem";
import { ButtonDelete, ButtonEdit } from "../../../../../components/Button";
import { Pagination } from "antd";

const Address = () => {
  const dataAdd = useSelector((state) => state.comment.dataAddress);
  const pageSize = 2;

  const inputRef = useRef({
    nameUser: null,
    nameBusiness: null,
    address: null,
    taxCode: null,
    email: null,
  });

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [editItemId, setEditItemId] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedComments = dataAdd?.slice(startIndex, endIndex);
  const shouldDisplayPagination = dataAdd.length > pageSize;

  const handleDelete = (idToDelete) => {
    const updatedData = dataAdd.filter((item) => item.id !== idToDelete);
    localStorage.setItem("dataAddress", JSON.stringify(updatedData));
    dispatch(setAddress({ dataAddress: updatedData }));
  };

  const handleEdit = (id) => {
    setEditItemId(id);
  };

  const handleSaveEdit = (idToEdit, updatedData) => {
    const updatedInvoice = dataAdd.map((item) =>
      item.id === idToEdit ? { ...item, ...updatedData } : item
    );
    localStorage.setItem("dataAddress", JSON.stringify(updatedInvoice));
    dispatch(setAddress({ dataAddress: updatedInvoice }));

    setEditItemId(null);
  };

  return (
    <div>
      {displayedComments.map((item, id) => (
        <div
          key={item.id}
          className="border-t-[1px] last:border-b-[1px] border-solid border-[--border-cart] py-[25px]"
        >
          <div className="text-[16px] font-[500] text-[--sub-color]">
            Địa chỉ {id + 1}: {item.nameBusiness}
          </div>
          <NotiCheckInfo
            title="Xin vui lòng kiểm tra lại thông tin chính xác cho việc giao hàng."
            className="my-[15px] w-fit"
          />
          <div
            className={`${
              editItemId === item.id ? "flex flex-col gap-y-[10px]" : ""
            }`}
          >
            <NameItemInput
              edit={editItemId === item.id}
              className={`${editItemId === item.id ? "py-[5px]" : ""}`}
              title="Tên người mua hàng :"
              value={item.nameUser}
              refs={(el) => (inputRef.current.nameUser = el)}
            />

            <NameItemInput
              edit={editItemId === item.id}
              className={`${editItemId === item.id ? "py-[5px]" : ""}`}
              title="Địa chỉ :"
              value={item.address + ", " + item.city}
              refs={(el) => (inputRef.current.address = el)}
            />
            <NameItemInput
              edit={editItemId === item.id}
              className={`${editItemId === item.id ? "py-[5px]" : ""}`}
              title="Số điện thoại :"
              value={item.phone}
              refs={(el) => (inputRef.current.nameBusiness = el)}
            />
            {/* <NameItemInput
              edit={editItemId === item.id}
              className={`${editItemId === item.id ? "py-[5px]" : ""}`}
              title="Email :"
              value={item.email}
              refs={(el) => (inputRef.current.email = el)}
            /> */}
          </div>
          <div className="text-[14px] font-[500] my-[15px] flex gap-[10px]">
            {item.check && <span className="text-[#f00]"># Mặc định</span>}
            {item.type === "home" && <span># Giao tại nhà</span>}
            {item.type === "office" && <span># Giao tại văn phòng</span>}
          </div>

          <div className="flex item-center gap-x-[15px]">
            <ButtonDelete onClick={() => handleDelete(item.id)} />
            {!editItemId || editItemId !== item.id ? (
              <>
                <ButtonEdit onClick={() => handleEdit(item.id)} />
              </>
            ) : (
              <div
                onClick={() => handleSaveEdit()}
                className="flex items-center gap-x-[5px] text-[--white-color] bg-[--primary-color] py-[10px] px-[25px] rounded-[10px] cursor-pointer"
              >
                <span className="text-[12px] font-[700]">Lưu</span>
                <LiaSaveSolid className="text-[18px]" />
              </div>
            )}
          </div>
        </div>
      ))}
      {shouldDisplayPagination && (
        <Pagination
          className="flex items-center ml-auto"
          current={currentPage}
          total={dataAdd.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Address;
