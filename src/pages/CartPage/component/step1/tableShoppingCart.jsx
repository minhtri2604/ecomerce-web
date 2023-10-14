/* eslint-disable react/prop-types */
import { Table, Space } from "antd";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineInbox } from "react-icons/ai";

import QuantityProduct from "../../../../components/QuantityProduct";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setCart } from "../../../../redux/cart/cart.slice";

const TableShoppingCart = ({ sendDataToParent, ...props }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const dataCart = useSelector((state) => state.cart.dataCart);
  const dispatch = useDispatch();

  const [data, setData] = useState(dataCart);

  useEffect(() => {
    setData(dataCart);
  }, [dataCart]);

  const paginationOptions = {
    pageSize: 7,
  };

  // Kiểm tra xem có nên hiển thị phân trang hay không
  const showPagination = data.length > paginationOptions.pageSize;

  const increaseQuantity = (id) => {
    const updatedProducts = data.map((product) => {
      if (product.id === id && product.quantity < product.totalProduct) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    dispatch(setCart({ dataCart: updatedProducts }));
    setData(updatedProducts);

    // Cập nhật số lượng mới cho các sản phẩm đã chọn
    const updatedSelectedProducts = selectedRowKeys.map((selectedId) => {
      const selectedProduct = updatedProducts.find(
        (prod) => prod.id === selectedId
      );
      return selectedProduct || null;
    });

    sendDataToParent(updatedSelectedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = data.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    dispatch(setCart({ dataCart: updatedProducts }));
    setData(updatedProducts);

    // Cập nhật số lượng mới cho các sản phẩm đã chọn
    const updatedSelectedProducts = selectedRowKeys.map((selectedId) => {
      const selectedProduct = updatedProducts.find(
        (prod) => prod.id === selectedId
      );
      return selectedProduct || null;
    });

    sendDataToParent(updatedSelectedProducts);
  };

  const columns = [
    {
      title: "Sản Phẩm",
      dataIndex: "title",
      render: (title, record) => (
        <div className="text-[--sub-color] font-Roboto max-w-[180px]">
          <div className="text-[14px] leading-[16px] font-[700] two-line">
            {title}
          </div>
          <div className="text-[12px] font-[500]">{record.date}</div>
        </div>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "desc",
      render: (desc, record) => (
        <div className="text-[--sub-color] font-Roboto max-w-[180px]">
          <div className="text-[12px] text-[--primary-color] font-[500] one-line">
            {desc}
          </div>
          <div className="text-[12px] font-[500]">{record.type}</div>
          <div className="text-[12px] font-[500]">{record.sub}</div>
        </div>
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      render: (price, record) => (
        <div className="text-[--sub-color] font-Roboto">
          <div className="text-[14px] font-[700]">
            {(price - (price * record.discount) / 100).toLocaleString("vi")}đ
          </div>
          <div className="text-[11px] line-through font-[500]">
            {price.toLocaleString("vi")}đ
          </div>
        </div>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      render: (quantity, record) => (
        <div className="text-[--sub-color] font-Roboto flex flex-col gap-y-[2px]">
          <div className="text-[10px]">Còn: {record.totalProduct} sản phẩm</div>
          <QuantityProduct
            increaseQuantity={() => increaseQuantity(record.id)}
            decreaseQuantity={() => decreaseQuantity(record.id)}
            quantity={quantity}
          />
          <div className="max-w-[92px] text-[10px] leading-[12px] text-[--primary-color]">
            Mua 2 sản phẩm tặng 1 sản phẩm
          </div>
        </div>
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "price",
      render: (price, record) => (
        <div className="text-[14px] font-700 text-[--primary-color] font-Roboto">
          {(
            (price - (price * record.discount) / 100) *
            record.quantity
          ).toLocaleString("vi")}
          đ
        </div>
      ),
    },
    {
      title: () => (
        <RiDeleteBin6Line
          className="cursor-pointer text-[16px] text-[--primary-color]"
          onClick={() => handleDelete("all")}
        />
      ),
      dataIndex: "delete",
      render: (_, record) => (
        <Space size="middle">
          <RiDeleteBin6Line
            className="cursor-pointer text-[16px]"
            onClick={() => handleDelete(record.key)}
          />
        </Space>
      ),
    },
  ];

  const handleDelete = (key) => {
    if (key === "all") {
      dispatch(setCart({ dataCart: [] }));
      localStorage.removeItem("cartProducts");
      setData([]);
    } else {
      dispatch(removeFromCart(key));
      const updatedData = data.filter((item) => item.id !== key);
      setData(updatedData);
      localStorage.setItem("cartProducts", JSON.stringify(updatedData));
    }

    // Giữ nguyên các sản phẩm đã chọn nếu chúng không bị xóa
    const updatedSelectedRowKeys = selectedRowKeys.filter(
      (selectedKey) => selectedKey !== key
    );
    setSelectedRowKeys(updatedSelectedRowKeys);

    // Cập nhật danh sách các sản phẩm đã chọn sau khi xóa
    const selectedProducts = data.filter((item) =>
      updatedSelectedRowKeys.includes(item.id)
    );

    sendDataToParent(selectedProducts);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);

    //check sản phảm được chọn để thanh toán
    const selectedProducts = data.filter((item) =>
      newSelectedRowKeys.includes(item.id)
    );

    sendDataToParent(selectedProducts);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelectAll: (selected, selectedRows, changeRows) => {
      if (selected) {
        const allRowKeys = changeRows.map((row) => row.key);
        setSelectedRowKeys(allRowKeys);
      } else {
        setSelectedRowKeys([]);
        onSelectChange([]);
      }
    },
  };

  return (
    <div className={props.className}>
      <Table
        rowSelection={rowSelection}
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

export default TableShoppingCart;
