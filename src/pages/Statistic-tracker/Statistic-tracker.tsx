import React from "react";
import Header from "../../Components/Header/Header";
import HealthDatepicker from "../../Components/HealthDatepicker/HealthDatepicker";

export const StatisticTracker = () => {
  return (
    <div>
      <Header title="Статистика трекера" />
      <HealthDatepicker />
    </div>
  );
};
