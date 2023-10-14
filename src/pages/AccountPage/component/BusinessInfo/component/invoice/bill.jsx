import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LiaSaveSolid } from "react-icons/lia";
import { ButtonDelete, ButtonEdit } from "../../../../../../components/Button";
import NotiCheckInfo from "../../../../../../components/NotiCheck";
import { Pagination } from "antd";
import { setInvoice } from "../../../../../../redux/comment/comment.slice";
import { NameItemInput } from "../../../AccountInfo/component/nameItem";

const Bill = () => {
  const dataBill = useSelector((state) => state.comment.dataInvoice);
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
  const displayedComments = dataBill.slice(startIndex, endIndex);
  const shouldDisplayPagination = dataBill.length > pageSize;

  const handleDelete = (idToDelete) => {
    const updatedData = dataBill.filter((item) => item.id !== idToDelete);
    localStorage.setItem("dataInvoice", JSON.stringify(updatedData));
    dispatch(setInvoice({ dataInvoice: updatedData }));
  };

  const handleEdit = (id) => {
    setEditItemId(id);
  };

  const handleSaveEdit = (idToEdit, updatedData) => {
    const updatedInvoice = dataBill.map((item) =>
      item.id === idToEdit ? { ...item, ...updatedData } : item
    );
    localStorage.setItem("dataInvoice", JSON.stringify(updatedInvoice));
    dispatch(setInvoice({ dataInvoice: updatedInvoice }));

    setEditItemId(null);
  };

  return (
    <div>
      {displayedComments.map((item) => (
        <div
          key={item.id}
          className="border-t-[1px] last:border-b-[1px] border-solid border-[--border-cart] py-[25px]"
        >
          <div className="text-[16px] font-[500] text-[--sub-color]">
            Thông tin xuất hóa đơn : {item.nameBusiness}
          </div>
          <NotiCheckInfo
            title="Vui lòng nhập và kiểm tra lại thông tin chính xác để tránh việc xuất hóa đơn bị chậm trễ."
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
              title="Tên doanh nghiệp :"
              value={item.nameBusiness}
              refs={(el) => (inputRef.current.nameBusiness = el)}
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
              title="Mã số thuế :"
              value={item.taxCode}
              refs={(el) => (inputRef.current.taxCode = el)}
            />
            <NameItemInput
              edit={editItemId === item.id}
              className={`${editItemId === item.id ? "py-[5px]" : ""}`}
              title="Email nhận hóa đơn :"
              value={item.email}
              refs={(el) => (inputRef.current.email = el)}
            />
          </div>
          <div className="text-[14px] font-[500] text-[#f00] my-[15px]">
            {item.check && "# Mặc định"}
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
          total={dataBill.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Bill;
