import { FiPaperclip } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ButtonSmall } from "../../../../components/Button";
import { dataItemOrder } from "../../../../data/dataItemOder";

const ItemOder = () => {
  return (
    <div className="grid grid-cols-3 gap-[20px]">
      {dataItemOrder.slice(0, 3).map((item) => (
        <div
          key={item.id}
          className="py-[16px] px-[14px] bg-[--white-color] rounded-[10px] flex flex-col justify-between"
        >
          <div>
            <div className="flex-between">
              <div className="text-[--sub-color] text-[16px] font-[500]">
                Mã đơn hàng : {item.codeOrder}
              </div>
              <div className="flex-center gap-[5px] border-[1.5px] border-solid border-[--primary-color] rounded-[30px] py-[10px] px-[11px] cursor-pointer">
                <FiPaperclip className="text-[--primary-color]" />
                <div className="text-[12px] font-[500] text-[--primary-color]">
                  Ghim đơn
                </div>
              </div>
            </div>
            <div className="flex-between mt-[5px] mb-[25px]">
              <div className="text-[--blue-color] text-[14px] font-[500]">
                {item.quantity} sản phẩm
              </div>
              <div className="text-[12px] text-[--sub-color]">
                Giao ngày {item.date}
              </div>
            </div>

            <table className="table-auto w-full">
              <thead className="border-b-[1px] border-solid border-[--border-color]">
                <tr className="text-[12px] font-[700] text-[--sub-color]">
                  <th className="text-left pb-[10px] max-w-[164px]">
                    Tên sản phẩm
                  </th>
                  <th className="pb-[10px]">Số lượng</th>
                  <th className="text-right pb-[10px]">Đơn giá hiện tại</th>
                </tr>
              </thead>
              <tbody>
                {item.product.slice(0, 8).map((item) => (
                  <tr key={item.id}>
                    <td className="last:mb-[10px] pt-[10px] max-w-[164px]">
                      <div className="text-[12px] text-[--sub-color] font-[500] one-line">
                        {item.productName}
                      </div>
                      <div className="text-[10px] text-[--sub-color]">
                        {item.desc}
                      </div>
                    </td>
                    <td className="text-center pt-[10px]">{item.quantity}</td>
                    <td className="text-right pt-[10px]">
                      {item.price.toLocaleString("vi")}đ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {item.product.length >= 8 && (
              <div className="flex items-center justify-end">
                <div className="text-[--sub-color] text-[16px] font-[500]">
                  Xem thêm
                </div>{" "}
                <MdKeyboardDoubleArrowRight />
              </div>
            )}
          </div>
          <div className="flex justify-end items-center gap-[10px] mt-[15px] border-t-[1px] border-solid border-[--border-color] pt-[15px] cursor-pointer">
            <ButtonSmall className="text-[--primary-color] text-[14px] font-[500] border-[1px] border-solid border-[--primary-color]">
              Xem đơn hàng
            </ButtonSmall>
            <ButtonSmall className="text-[14px] font-[500] bg-[--primary-color] text-[--white-color]">
              Đặt lại đơn
            </ButtonSmall>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemOder;
