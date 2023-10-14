/* eslint-disable react/prop-types */
import { Table } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { dataCartFake } from "../../../../../data/dataCart";
import { addToCart } from "../../../../../redux/cart/cart.slice";
import QuantityProduct from "../../../../../components/QuantityProduct";

const TableFavourite = ({ ...props }) => {
  const paginationOptions = {
    pageSize: 6,
  };
  const [data, setData] = useState(dataCartFake);
  const [likedProducts, setLikedProducts] = useState([]);
  // Kiểm tra xem có nên hiển thị phân trang hay không
  const showPagination = data.length > paginationOptions.pageSize;

  useEffect(() => {
    const likedProductsFromStorage = localStorage.getItem("likedProducts");
    if (likedProductsFromStorage) {
      setLikedProducts(JSON.parse(likedProductsFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const dispatch = useDispatch();

  const increaseQuantity = (id) => {
    const updatedProducts = data.map((product) => {
      if (product.id === id && product.quantity < product.totalProduct) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    setData(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = data.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });

    setData(updatedProducts);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const columns = [
    {
      title: "TÊN SẢN PHẨM / NHÀ SẢN XUẤT",
      dataIndex: "title",
      render: (title, record) => (
        <div className="text-[--sub-color] font-Roboto max-w-[180px]">
          <div className="text-[12px] leading-[16px] font-[700] two-line">
            {title}
          </div>
          <div className="text-[10px] font-[500] one-line">
            {record.company}
          </div>
        </div>
      ),
      style: {
        fontSize: "118px",
      },
    },
    {
      title: "MÔ TẢ",
      dataIndex: "typeMedicine",
      render: (typeMedicine, record) => (
        <div className="text-[--sub-color] font-Roboto max-w-[180px]">
          <div className="text-[12px] font-[500] one-line">{typeMedicine}</div>
          <div className="text-[12px] text-[--primary-color] font-[500] two-line">
            {record.desc}
          </div>
        </div>
      ),
    },
    {
      title: "ĐƠN VỊ TÍNH",
      dataIndex: "unit",
      render: (unit) => (
        <div className="text-[12px] text-[--sub-color] text-center font-Roboto">
          {unit}
        </div>
      ),
    },
    {
      title: "GIÁ BÁN",
      dataIndex: "price",
      render: (price, record) => (
        <div className="font-Roboto flex flex-col items-center justify-center gap-y-[2px]">
          <div className="rounded-[23px] py-[3px] px-[6px] bg-[--primary-color] text-[--white-color] text-[10px] font-[700]">
            Giảm {record.discount}%
          </div>
          <div className="text-[12px] font-700 text-[--primary-color]">
            {(price - (price * record.discount) / 100).toLocaleString("vi")}đ
          </div>
          <div className="text-[10px] font-[500] text-[--sub-color] line-through">
            {price.toLocaleString("vi")}đ
          </div>
        </div>
      ),
    },
    {
      title: "THÊM VÀO GIỎ",
      dataIndex: "quantity",
      render: (quantity, record) => (
        <div className="text-[--sub-color] font-Roboto flex flex-col items-center gap-y-[5px]">
          <QuantityProduct
            increaseQuantity={() => increaseQuantity(record.id)}
            decreaseQuantity={() => decreaseQuantity(record.id)}
            quantity={quantity}
          />
          <div
            onClick={() => handleAddToCart(record)}
            className="bg-[--primary-color] rounded-[23px] py-[4px] px-[32px] cursor-pointer"
          >
            <BsCartPlus className="text-[--white-color] text-[16px]" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={props.className}>
      <Table
        className="table-product"
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        pagination={
          showPagination
            ? { ...paginationOptions, className: "custom-pagination" }
            : false
        }
        locale={{
          emptyText: (
            <div className="flex flex-col items-center justify-center">
              <AiOutlineInbox size={40} />
              <span className="font-Roboto text-[16px]">
                Không có sản phẩm nào
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default TableFavourite;
