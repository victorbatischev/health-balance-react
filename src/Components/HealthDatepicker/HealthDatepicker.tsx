import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import "./healthDatepicker.scss";
import moment from "moment";

const HealthDatepicker = () => {
  const changeHandler = (date: any, dateString: any) => {
    console.log(date, dateString);
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <DatePicker
        defaultValue={moment()}
        locale={locale}
        open={true}
        onChange={changeHandler}
      />
    </div>
  );
};

export default HealthDatepicker;
