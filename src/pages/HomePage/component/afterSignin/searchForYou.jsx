import { LazyLoadImage } from "react-lazy-load-image-component";

import Title from "../../../../components/Title";
import ItemProduct from "./itemProduct";

import addProduct from "../../../../assets/images/header-signin/top/add-product.svg";

import { dataProduct } from "../../../../data/dataProduct";
import { ButtonSmall } from "../../../../components/Button";

const SearchForYou = () => {
  return (
    <div>
      <div className="flex-between gap-x-[31px]">
        <div>
          <Title className="text-[--sub-color]">
            Nhóm tìm kiếm dành cho bạn ...
          </Title>
          <div className="text-[--sub-color] text-[16px] font-[500]">
            Trung Tâm Dược Phẩm là sàn thương mại với các hoạt động buôn bán
            trao đổi sản phẩm về thuốc và các sản phẩm y tế liên quan.
          </div>
        </div>
        <div className="flex items-center gap-x-[28px]">
          <div className="w-[64px]">
            <LazyLoadImage
              effect="blur"
              className="w-full"
              src={addProduct}
              alt="add product"
            />
          </div>
          <div className="flex-1">
            <div className="text-[--primary-color] text-[20px] font-[500]">
              Thêm danh sách đặt hàng
            </div>
            <div className="text-[#231F20] text-[12px] my-[8px]">
              Tải lên danh sách mua hàng theo định dạng CSV. Hoặc tải mẫu danh
              sách <span className="text-[#3D94FF]">tại đây.</span>
            </div>
            <ButtonSmall className="text-[12px] font-[700] bg-[--primary-color] text-[--white-color]">
              Chọn danh sách
            </ButtonSmall>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-[40px]">
        {dataProduct.map((item) => (
          <div key={item.id}>
            <ItemProduct
              img={item.img}
              classImg="w-[100px] h-[100px] mb-[16px]"
              title={item.title}
              description={item.desc}
              promotion={item.promo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchForYou;
