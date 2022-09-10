import { TabContent, Tabs } from "../../Components/Tabs/Tabs";
import moment from "moment";
import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import HealthDatepicker from "../../Components/HealthDatepicker/HealthDatepicker";
import DayStatistic from "../../Components/Tracker/Day-statistic";
import { HealthySleep } from "../../Components/Tracker/Healthy-sleep";
import { WaterTarget } from "../../Components/Tracker/Water-target";
import { FruitTarget } from "../../Components/Tracker/Fruit-target";

export const StatisticTracker = () => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const namesTabsDynamics = ["Сон", "Вода", "Фрукты"];
  const [currentValueTab, setCurrentValueTab] = useState<number>(0);

  const convertDate = (date: string) => {
    const dateArr = date.split("-");
    return dateArr[2] + "." + dateArr[1] + "." + dateArr[0];
  };

  return (
    <div>
      <Header title="Статистика трекера" />
      <HealthDatepicker onChange={setDate} />
      <DayStatistic date={convertDate(date)} />
      <Tabs
        labels={namesTabsDynamics}
        onClick={setCurrentValueTab}
        value={currentValueTab}
      />
      <div style={{ height: "25px" }}></div>
      <TabContent index={0} value={currentValueTab}>
        <HealthySleep editProhibition={true} />
      </TabContent>
      <TabContent index={1} value={currentValueTab}>
        <WaterTarget />
      </TabContent>
      <TabContent index={2} value={currentValueTab}>
        <FruitTarget />
      </TabContent>
    </div>
  );
};
