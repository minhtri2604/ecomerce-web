/* eslint-disable react/prop-types */
import { Table } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { FiImage } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";

import QuantityProduct from "../../../components/QuantityProduct";
import { dataCartFake } from "../../../data/dataCart";
import { addToCart } from "../../../redux/cart/cart.slice";
import ModalViewProduct from "./modalViewProduct";

const TableProduct = ({ ...props }) => {
  const paginationOptions = {
    pageSize: 6,
  };
  const [data, setData] = useState(dataCartFake);
  const [likedProducts, setLikedProducts] = useState([]);
  // Kiểm tra xem có nên hiển thị phân trang hay không
  const showPagination = data.length > paginationOptions.pageSize;

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [viewProduct, setProduct] = useState(null);

  const handleHoverProduct = (id) => {
    const product = data.find((item) => item.id === id);
    setHoveredProduct(product);
  };

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

  const isProductLiked = (product) => {
    return likedProducts.some(
      (likedProduct) => likedProduct.id === product.id && likedProduct.like
    );
  };

  const handleLikeProduct = (item) => {
    const existingProduct = likedProducts.find(
      (product) => product.id === item.id
    );

    if (existingProduct) {
      const updatedProducts = likedProducts.map((product) =>
        product.id === item.id ? { ...product, like: !product.like } : product
      );
      setLikedProducts(updatedProducts);
    } else {
      setLikedProducts([...likedProducts, { id: item.id, like: true }]);
    }
  };

  const handleViewProduct = (item) => {
    setProduct(item);
  };

  const handleSendDataToParent = (data) => {
    setProduct(data);
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
      title: "NHÓM ĐIỀU TRỊ",
      dataIndex: "treatment",
      render: (treatment) => (
        <div className="w-[30px] h-[30px] m-auto">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full"
            src={treatment}
            alt="img"
          />
        </div>
      ),
    },
    {
      title: "DẠNG BÀO CHẾ",
      dataIndex: "type",
      render: (type, record) => (
        <div className="font-Roboto text-[--sub-color] flex flex-col items-center">
          <div className="text-[12px] font-[700]">{type}</div>
          <div className="text-[10px]">{record.unit}</div>
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
    {
      title: "",
      dataIndex: "",
      render: (record) => (
        <div className="text-[--sub-color] font-Roboto flex flex-col items-center gap-y-[5px]">
          <div className="relative bg-[--border-cart] hover:bg-[--primary-color] transition rounded-[50%]">
            <FiImage
              onMouseEnter={() => handleHoverProduct(record.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleViewProduct(record)}
              className="text-[25px] p-[5px] cursor-pointer text-[--white-color]"
            />
            <div
              className={`${
                hoveredProduct && hoveredProduct.id === record.id
                  ? "visible transition"
                  : "invisible transition"
              } arrow border-[1px] border-solid border-[--white-color] absolute top-[-210%] right-[-110%] w-[80px] bg-[--primary-color] text-[--white-color] text-[12px] leading-[14px] text-center py-[10px] rounded-[10px]`}
            >
              Xem <br /> sản phẩm
            </div>
            {viewProduct !== null && (
              <ModalViewProduct
                data={viewProduct}
                handleSendDataToParent={handleSendDataToParent}
              />
            )}
          </div>
          <AiOutlineHeart
            onClick={() => handleLikeProduct(record)}
            className={`${
              isProductLiked(record)
                ? "bg-[--primary-color]"
                : "bg-[--border-cart]"
            } text-[25px] p-[5px] rounded-[50%] cursor-pointer text-[--white-color] hover:bg-[--primary-color] transition`}
          />
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

export default TableProduct;
