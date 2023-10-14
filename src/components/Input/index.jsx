/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";

import eyeClose from "../../assets/images/signin/eye-close.svg";
import eye from "../../assets/images/signin/eye.svg";
import attention from "../../assets/images/signup/step1/attention.svg";

export const InputSignUp = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-y-[8px] mb-[10px]">
      <div className="flex items-center gap-x-[5px]">
        <label className="text-[--sub-color] font-[700] leading-[19px]">
          {props.title}
        </label>
        {props.error && (
          <div className="flex items-center gap-x-[5px]">
            <div className="w-[16px] h-[16px]">
              <img className="w-full h-full" src={attention} alt="icon error" />
            </div>
            <div className="text-[12px] text-[--primary-color] tracking-[0.6px]">
              {props.error}
            </div>
          </div>
        )}
      </div>
      <input
        className="border-[#9b9b9b] border-[1px] border-solid text-[16px] rounded-[12px] px-[12px] py-[10px] 2xl:py-[17px] focus-input"
        placeholder={props.placeholder}
        ref={props.refs}
        onChange={props.onChange}
        autoComplete="off"
        type={props.type}
        name={props.name}
        onKeyUp={props.onKeyUp}
      />
    </div>
  );
};

export const InputPassword = ({ passwordShown, ...props }) => {
  return (
    <div className={props.classNameOne}>
      <div className="flex items-center gap-x-[5px]">
        <label className="text-[--sub-color] font-[700] leading-[19px]">
          {props.title}
        </label>
        {props.error && (
          <div className="flex items-center gap-x-[5px]">
            <div className="w-[16px] h-[16px]">
              <LazyLoadImage
                effect="blur"
                className="w-full h-full"
                src={attention}
                alt="img"
              />
            </div>
            <div className="text-[12px] text-[--primary-color] tracking-[0.6px] flex-1">
              {props.error}
            </div>
          </div>
        )}
      </div>
      <div className={`${props.classNameTwo} focus-within-input`}>
        <input
          onKeyUp={props.onKeyUp}
          ref={props.refs}
          onChange={props.onChange}
          type={passwordShown ? "text" : "password"}
          defaultValue={props.defaultValue}
          name={props.name}
          className={`caret-[--primary-color] w-[90%] ${props.classNameThree}`}
          placeholder={props.placeholder}
          autoComplete="off"
        />
        {!passwordShown ? (
          <div
            onClick={props.onClick}
            className="w-[22px] h-[10px] cursor-pointer"
          >
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={eyeClose}
              alt="img"
            />
          </div>
        ) : (
          <div
            onClick={props.onClick}
            className="w-[22px] h-[17px] cursor-pointer"
          >
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={eye}
              alt="img"
            />
          </div>
        )}
      </div>
    </div>
  );
};
