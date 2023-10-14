/* eslint-disable react/prop-types */

const TitleCart = ({ children, ...props }) => {
  return (
    <div
      className={`${props.className} text-[20px] font-[500] text-[--sub-color]`}
    >
      {children}
    </div>
  );
};

export default TitleCart;

export const TitleStar = ({ children, ...props }) => {
  return (
    <div
      className={`${props.className} text-[20px] font-[500] text-[--sub-color]`}
    >
      {children} (<span className="text-[--primary-color]">*</span>)
    </div>
  );
};
