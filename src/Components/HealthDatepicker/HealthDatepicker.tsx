import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import "./healthDatepicker.scss";
import moment from "moment";
import { FC } from "react";

interface IHealthDatepicker {
  onChange: Function;
  dropdownClassname: string;
}

const HealthDatepicker: FC<IHealthDatepicker> = ({
  onChange,
  dropdownClassname,
}) => {
  const changeHandler = (date: any, dateString: any) => {
    //console.log(date, dateString);
    onChange(dateString);
  };

  return (
    <div style={{ marginLeft: "10px", height: "268px" }}>
      <DatePicker
        defaultValue={moment()}
        locale={locale}
        open={true}
        onChange={changeHandler}
        dropdownClassName={dropdownClassname}
      />
    </div>
  );
};

export default HealthDatepicker;
