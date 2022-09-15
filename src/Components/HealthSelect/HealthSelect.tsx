import "./healthSelect.scss";
import { Select } from "antd";
import { FC } from "react";

import selectIcon from "../../assets/image/selectIcon.svg";

interface IHealthSelect {
  options: any;
  selectValue: any;
  handleChange: Function;
}

const { Option } = Select;
const HealthSelect: FC<IHealthSelect> = ({
  options,
  selectValue,
  handleChange,
}) => {
  return (
    <Select
      placeholder="Ваша платформа"
      value={selectValue}
      onChange={(value) => handleChange(value)}
      className="health-select"
      suffixIcon={<img src={selectIcon} />}
    >
      {options.map((option: any) => (
        <Option key={option.name}>{option.name}</Option>
      ))}
    </Select>
  );
};

export default HealthSelect;
