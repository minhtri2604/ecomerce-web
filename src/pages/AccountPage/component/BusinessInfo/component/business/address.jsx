import { useState } from "react";
import { ItemAccountName, ItemAddress } from "../itemInput";
import { dataCity } from "../../../../../../data/dataBussinessInfo";

const Address = () => {
  const [active, setActive] = useState({
    city: false,
    districts: false,
    wards: false,
  });

  const [desc, setDesc] = useState({
    city: "Tỉnh / Thành phố",
    districts: "Quận / Huyện",
    wards: "Xã / Phường",
  });

  //lấy quận, huyện
  const dataDistrictsFilter = dataCity?.filter(
    (item) => item.name === desc?.city
  );
  const dataDistricts = dataDistrictsFilter?.map((item) => item.districts);

  //lấy xã, phường
  const dataWardsFilter = dataDistricts[0]?.filter(
    (item) => item.name === desc?.districts
  );
  const dataWards = dataWardsFilter?.map((item) => item.wards);

  const handleSetActive = (item) => {
    setActive((prevActive) => ({
      city: item === "city" ? !prevActive.city : false,
      districts: item === "districts" ? !prevActive.districts : false,
      wards: item === "wards" ? !prevActive.wards : false,
    }));
  };

  const sendDataCityToParent = (data) => {
    setDesc({ ...desc, city: data });
    setActive({ ...active, city: false });
  };

  const sendDataDistrictsToParent = (data) => {
    setDesc({ ...desc, districts: data });
    setActive({ ...active, districts: false });
  };

  const sendDataWardsToParent = (data) => {
    setDesc({ ...desc, wards: data });
    setActive({ ...active, wards: false });
  };

  return (
    <div className="my-[20px]">
      <div className="business-info">Địa chỉ</div>

      <div className="border-[1px] border-solid border-[--sub-color] rounded-[12px] p-[12px] grid grid-cols-3 gap-x-[15px] gap-y-[12px]">
        <ItemAddress
          onClick={() => handleSetActive("city")}
          active={active.city}
          data={dataCity}
          sendDataToParent={sendDataCityToParent}
          className="col-span-1"
          title="Tỉnh / Thành phố"
          desc={desc.city}
        />
        <ItemAddress
          onClick={() => handleSetActive("districts")}
          active={active.districts}
          data={dataDistricts[0]}
          sendDataToParent={sendDataDistrictsToParent}
          className="col-span-1"
          title="Quận / Huyện"
          desc={desc.districts}
        />
        <ItemAddress
          onClick={() => handleSetActive("wards")}
          active={active.wards}
          data={dataDistricts[0] ? dataWards[0] : null}
          sendDataToParent={sendDataWardsToParent}
          className="col-span-1"
          title="Xã / Phường"
          desc={desc.wards}
        />
        <ItemAccountName
          className3="col-span-1"
          title="Số nhà"
          placeholder="Vui lòng nhập ..."
          type="text"
          name="userName"
        />
        <ItemAccountName
          className3="col-span-2"
          title="Tên đường"
          placeholder="Vui lòng nhập Tên đường/ Tòa nhà/ Thôn/ Ấp"
          type="text"
          name="userName"
        />
      </div>
    </div>
  );
};

export default Address;
