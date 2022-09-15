import { Checkbox } from "antd";

const HealthCheckbox = () => {
  return (
    <div className="health-checkbox">
      <Checkbox.Group>
        <Checkbox
          className="custom-checkbox__checkbox"
          value="По всем версиям статистических карточек"
        >
          По всем версиям статистических карточек
        </Checkbox>
        <br />
        <Checkbox value="Отобразить закрытые элементы справочников">
          Отобразить закрытые элементы справочников
        </Checkbox>
      </Checkbox.Group>
    </div>
  );
};

export default HealthCheckbox;
