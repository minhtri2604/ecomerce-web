/* eslint-disable react/prop-types */

const Container = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} container mx-auto max-w-[1180px] w-full px-[20px] 2xl:p-0`}
    >
      {children}
    </div>
  );
};

export default Container;
