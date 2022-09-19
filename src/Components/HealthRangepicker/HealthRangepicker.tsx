import { DatePicker } from "antd";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import "./healthRangepicker.scss";
import { FC } from "react";

const { RangePicker } = DatePicker;

interface IHealthRangePicker {
  onChange: Function;
  dropdownClassname: string;
}

const HealthRangepicker: FC<IHealthRangePicker> = ({
  dropdownClassname,
  onChange,
}) => {
  const changeHandler = (date: any, dateString: any) => {
    onChange(dateString);
    // onChange(dateString);
  };
  return (
    <div style={{ marginLeft: "10px", height: "268px" }}>
      <RangePicker
        dropdownClassName={dropdownClassname}
        onChange={changeHandler}
        locale={locale}
        open={true}
      />
    </div>
  );
};

export default HealthRangepicker;

/*
.ant-picker-panels > *:first-child button.ant-picker-header-next-btn {
  visibility: visible !important;
}

.ant-picker-panels > *:first-child button.ant-picker-header-super-next-btn {
  visibility: visible !important;
}

.ant-picker-panels > *:last-child {
  display: none;
}

.ant-picker-panel-container, .ant-picker-footer {
  width: 280px !important;
}

.ant-picker-footer-extra > div {
  flex-wrap: wrap !important; 
}

*/
