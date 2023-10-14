/* eslint-disable react/prop-types */
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import { useState } from "react";

import moment from "moment";
import "moment/dist/locale/vi";
moment.locale("vi");

const DateOfBirth = ({ DOB, ...props }) => {
  // const initDate = moment(DOB, "DD/MM/YYYY") || null;
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex items-center">
      <div className="text-[--sub-color] text-[16px] font-[500] min-w-[160px]">
        Ngày sinh :
      </div>
      <div className="text-[--sub-color] text-[16px] font-[500] flex-1">
        {props.edit ? (
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            locale={locale}
            format="DD/MM/YYYY"
            // picker="date"
            showToday={false}
            placeholder={DOB}
            className="focus:border-[--primary-color] hover:border-[--primary-color] border-[--gray-color] py-[8px]"
          />
        ) : (
          <>{DOB}</>
        )}
      </div>
    </div>
  );
};

export default DateOfBirth;
