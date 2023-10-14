/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { dataCity } from "../../../../../../data/dataBussinessInfo";

const TabAddress = ({
  handleSendDataToParent,
  handleSendActiveTabToParent,
  activeTab,
}) => {
  const [active, setActive] = useState("city");

  useEffect(() => {
    setActive("city");
    handleSendActiveTabToParent(false);
  }, [activeTab]);

  const [desc, setDesc] = useState({
    city: "",
    districts: "",
    wards: "",
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

  const handleCity = (city) => {
    setDesc({ ...desc, city: city, districts: "", wards: "" });
    setActive("districts");
    handleSendDataToParent({
      data: { ...desc, city: city, districts: "", wards: "" },
      active: true,
    });
  };
  const handleDistricts = (districts) => {
    setDesc({ ...desc, districts: districts, wards: "" });
    setActive("wards");
    handleSendDataToParent({
      data: { ...desc, districts: districts, wards: "" },
      active: true,
    });
  };
  const handleWards = (wards) => {
    setDesc({ ...desc, wards: wards });
    handleSendDataToParent({ data: { ...desc, wards: wards }, active: false });
  };

  return (
    <div className="absolute top-[110%] left-0 bg-[--white-color] w-full border-[1px] border-solid border-[--sub-color] rounded-[12px] z-10">
      <div className="grid grid-cols-3 border-b-[1px] border-solid border-[--sub-color] rounded-[12px]">
        <div
          onClick={() => setActive("city")}
          className={`${
            active === "city"
              ? "bg-[--primary-color] text-[--white-color] rounded-l-[12px]"
              : ""
          } text-[14px] text-[--title-table-color] text-center py-[15px] cursor-pointer transition`}
        >
          Tỉnh / Thành phố
        </div>
        <div
          onClick={() => setActive("districts")}
          className={`${
            active === "districts"
              ? "bg-[--primary-color] text-[--white-color]"
              : ""
          } text-[14px] text-[--title-table-color] text-center py-[15px] cursor-pointer transition`}
        >
          Quận / Huyện
        </div>
        <div
          onClick={() => setActive("wards")}
          className={`${
            active === "wards"
              ? "bg-[--primary-color] text-[--white-color] rounded-r-[12px]"
              : ""
          } text-[14px] text-[--title-table-color] text-center py-[15px] cursor-pointer transition`}
        >
          Phường / Xã / Thị trấn
        </div>
      </div>

      <div className="pl-[16px] pr-[8px]">
        <div className="h-[230px] overflow-y-scroll scroll-noti">
          {active === "city" && (
            <>
              {dataCity.map((item) => (
                <div
                  onClick={() => handleCity(item.name)}
                  key={item.code}
                  className="text-[18px] text-[--sub-color] px-[20px] py-[10px] cursor-pointer hover:text-[--primary-color]"
                >
                  {item.name}
                </div>
              ))}
            </>
          )}
          {active === "districts" && (
            <>
              {dataDistricts[0]?.map((item) => (
                <div
                  onClick={() => handleDistricts(item.name)}
                  key={item.code}
                  className="text-[18px] text-[--sub-color] px-[20px] py-[10px] cursor-pointer hover:text-[--primary-color]"
                >
                  {item.name}
                </div>
              ))}
            </>
          )}
          {active === "wards" && dataDistricts[0] && (
            <>
              {dataWards[0]?.map((item) => (
                <div
                  onClick={() => handleWards(item.name)}
                  key={item.code}
                  className="text-[18px] text-[--sub-color] px-[20px] py-[10px] cursor-pointer hover:text-[--primary-color]"
                >
                  {item.name}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabAddress;
