/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useState } from "react";

import { dataProductDetail } from "../../../data/dataProductDetail";
import QuantityProduct from "../../../components/QuantityProduct";
import { ButtonSmall } from "../../../components/Button";
import { addToCart } from "../../../redux/cart/cart.slice";
import RatingStar from "../../../components/RatingStar";
import { CommingSoon } from "../../../helpers/commingSoon";

const InfoProduct = ({ params }) => {
  const productDeatil = dataProductDetail.find(
    (item) => item.id === +params?.id
  );

  const [dataProduct, setDataProduct] = useState(productDeatil);

  const dispatch = useDispatch();

  const increaseQuantity = () => {
    if (dataProduct.quantity < dataProduct.totalProduct) {
      setDataProduct({ ...dataProduct, quantity: dataProduct.quantity + 1 });
    }
  };
  const decreaseQuantity = () => {
    if (dataProduct.quantity > 1) {
      setDataProduct({ ...dataProduct, quantity: dataProduct.quantity - 1 });
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="w-[70%] flex flex-col gap-y-[20px]">
      <div className="font-[500] text-[--sub-color] text-[20px]">
        {dataProduct.title}
      </div>
      <div className="text-[16px] text-[--sub-color] flex items-center">
        <RatingStar value={dataProduct.star} className="text-[22px]" />
        <span className="border-x-[1px] border-solid border-[--border-cart] mx-[20px] px-[20px]">
          5 Đánh giá
        </span>
        <span>{dataProduct.sold} Đã Bán</span>
      </div>
      <div className="flex items-center gap-[20px] bg-[--bg-color] p-[20px]">
        <span className="text-[--title-table-color] text-[16px] line-through">
          {dataProduct.price.toLocaleString("vi")}đ
        </span>
        <span className="font-[500] text-[--primary-color] text-[26px]">
          {(
            (dataProduct.price * (100 - dataProduct.discount)) /
            100
          ).toLocaleString("vi")}
          đ
        </span>
      </div>
      <div className="text-[16px] font-[500]">{dataProduct.sub}</div>
      <div className="text-[16px]">Thành phần: {dataProduct.desc}</div>
      <div className="text-[16px]">Nhà sản xuất: {dataProduct.company}</div>
      <div className="flex items-center gap-[20px]">
        <QuantityProduct
          decreaseQuantity={() => decreaseQuantity()}
          increaseQuantity={() => increaseQuantity()}
          quantity={dataProduct.quantity}
        />
        <div className="text-[16px]">
          {dataProduct.totalProduct} sản phẩm có sẵn
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <ButtonSmall
          onClick={() => handleAddToCart(dataProduct)}
          className="text-[--white-color] text-[14px] font-[500] border-[1px] border-solid border-[--primary-color] bg-[--primary-color]"
        >
          Thêm vào giỏ hàng
        </ButtonSmall>
        <ButtonSmall
          onClick={CommingSoon}
          className="text-[--primary-color] text-[14px] font-[500] border-[1px] border-solid border-[--primary-color]"
        >
          Đặt hàng ngay
        </ButtonSmall>
      </div>
    </div>
  );
};

export default InfoProduct;
