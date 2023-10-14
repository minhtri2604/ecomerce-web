/* eslint-disable react/prop-types */
const Title = ({ children, ...props }) => {
  return (
    <div className={`text-[32px] font-[700] ${props.className}`}>
      {children}
    </div>
  );
};

export default Title;

export const TitleForm = ({ children, ...props }) => {
  return (
    <div
      className={`text-[40px] text-[--sub-color] font-[700] ${props.className}`}
    >
      {children}
    </div>
  );
};

export const TitleCart = ({ children, ...props }) => {
  return (
    <div
      className={`text-[24px] text-[--sub-color] font-[700] ${props.className}`}
    >
      {children}
    </div>
  );
};

export const TitleAccount = ({ children, ...props }) => {
  return (
    <div
      className={`text-[20px] text-[--sub-color] font-[500] ${props.className}`}
    >
      {children}
    </div>
  );
};
