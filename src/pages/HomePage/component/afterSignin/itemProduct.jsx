/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ItemProduct = ({ ...props }) => {
  return (
    <Link
      to={"/product"}
      className={`bg-[--text-color] rounded-[10px] item-product-shadow hover:border-[1px] hover:border-solid hover:border-[--primary-color] flex flex-col items-center justify-center pt-[45px] px-[21px] pb-[33px] h-[280px] w-[280px] class-active transition ${props.className}`}
    >
      <div className={`${props.classImg}`}>
        <LazyLoadImage
          effect="blur"
          className={`w-full h-full object-contain active-filter`}
          src={props.img}
          alt="img"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-[--sub-color] text-[22px] font-[700] active-text">
          {props?.title}
        </div>
        <div className="text-[--sub-color] text-[14px] active-text">
          {props?.description}
        </div>
        <div className="text-[--primary-color] text-[14px] max-w-[200px] text-center active-text">
          {props?.promotion}
        </div>
      </div>
    </Link>
  );
};

export default ItemProduct;
