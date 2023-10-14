/* eslint-disable react/prop-types */
import { useState } from "react";
import { InputDate, ItemAccountName, ItemAddress } from "../itemInput";
import { dataCity } from "../../../../../../data/dataBussinessInfo";

const BusinessLicenseNumber = ({ ...props }) => {
  const [active, setActive] = useState(false);

  const [desc, setDesc] = useState("Tỉnh / Thành phố");
  const handleSetActive = () => {
    setActive(!active);
  };

  const sendDataCityToParent = (data) => {
    setDesc(data);
    setActive(false);
  };
  return (
    <div className="mb-[20px]">
      <div className="business-info">{props.title}</div>
      <div className="border-[1px] border-solid border-[--sub-color] rounded-[12px] p-[12px] grid grid-cols-3 gap-x-[15px] gap-y-[12px]">
        <ItemAccountName
          className="font-[400]"
          className2="font-[400]"
          title="Số giấy phép"
          placeholder="Vui lòng nhập ..."
          type="text"
          name="userName"
        />
        <InputDate title="Ngày cấp" />
        <ItemAddress
          onClick={() => handleSetActive()}
          active={active}
          data={dataCity}
          sendDataToParent={sendDataCityToParent}
          className="col-span-1"
          title="Nơi cấp"
          desc={desc}
        />
      </div>
    </div>
  );
};

export default BusinessLicenseNumber;
