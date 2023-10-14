/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RiDeleteBin6Line } from "react-icons/ri";

import QuantityProduct from "../../../../components/QuantityProduct";
import { removeFromCart, setCart } from "../../../../redux/cart/cart.slice";

const ModalCart = ({ ...props }) => {
  const dataCart = useSelector((state) => state.cart.dataCart);
  const dispatch = useDispatch();

  const [products, setProducts] = useState(dataCart);

  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id && product.quantity < product.totalProduct) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    dispatch(setCart({ dataCart: updatedProducts }));
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    dispatch(setCart({ dataCart: updatedProducts }));
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleDeleteItem = (itemId) => {
    const updatedCart = products.filter((item) => item.id !== itemId);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
    dispatch(removeFromCart(itemId));
  };

  const totalPrice = products.reduce(
    (i, item) =>
      (i += (item.quantity * (item.price * (100 - item.discount))) / 100),
    0
  );

  useEffect(() => {
    setProducts(dataCart);
  }, [dataCart]);

  return (
    <div
      className={`${props.className} w-[363px] border-left-bottom bg-[--white-color] pt-[30px] modal-shadow hover-modal-account z-10`}
    >
      <div className="text-[--sub-color] text-[16px] font-[500] mb-[16px] pl-[30px]">
        Giỏ hàng của bạn
      </div>
      <div className="pr-[11px]">
        {products.length === 0 ? (
          <div className="pl-[30px] pr-[11px] text-[--primary-color]">
            Bạn không có sản phẩm nào
          </div>
        ) : (
          <div className="max-h-[400px] overflow-y-scroll scroll-noti pl-[30px] pr-[11px]">
            {products.map((item) => (
              <div
                key={item.id}
                className="border-y-[1px] border-solid border-[ --border-color] py-[19px]"
              >
                <div className="flex-between">
                  <div>
                    <div className="text-[12px] font-[700] text-[--sub-color] two-line">
                      {item.title}
                    </div>
                    <div className="text-[--blue-color] text-[12px] one-line">
                      {item.desc}
                    </div>
                    <div className="text-[--sub-color] text-[12px] one-line">
                      {item.sub}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-[14px] font-[700] text-[--primary-color]">
                      {(
                        item.quantity *
                        ((item.price * (100 - item.discount)) / 100)
                      ).toLocaleString("vi")}
                      đ
                    </div>
                    <div className="text-[12px] font-[500] text-[#A7A9AC] line-through">
                      {item.price.toLocaleString("vi")}đ
                    </div>
                  </div>
                </div>
                <div className="flex-between">
                  <div
                    onClick={() => handleDeleteItem(item.id)}
                    className="w-[12px] h-[13px]"
                  >
                    <RiDeleteBin6Line />
                  </div>
                  <QuantityProduct
                    decreaseQuantity={() => decreaseQuantity(item.id)}
                    increaseQuantity={() => increaseQuantity(item.id)}
                    quantity={item.quantity}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="py-[35px] pr-[30px] pl-[30px]">
        <div className="text-[--sub-color] text-[16px] font-[500] flex-between">
          <div>Số lượng:</div>
          <div>{products.length}</div>
        </div>
        <div className="text-[16px] font-[500] flex-between mt-[14px] mb-[30px]">
          <div className="text-[--sub-color]">Tổng giá thành:</div>
          <div className="text-[--primary-color]">
            {totalPrice.toLocaleString("vi")}đ
          </div>
        </div>
        <div className="w-full h-[36px] text-[16px] text-[--white-color] font-[500] bg-[--primary-color] rounded-[10px] flex-center mb-[20px]">
          Đặt hàng ngay
        </div>
        <Link
          to={"/cart"}
          className="w-full h-[36px] text-[16px] text-[--primary-color] font-[500] bg-[--white-color] rounded-[10px] flex-center border-[1px] border-solid border-[--primary-color]"
        >
          Xem giỏ hàng
        </Link>
      </div>
    </div>
  );
};

export default ModalCart;
