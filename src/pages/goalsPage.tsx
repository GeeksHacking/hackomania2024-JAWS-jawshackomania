import { FC } from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "./pageTemplate";
import { BackArrow } from "../component/BackArrow";
import { SettingGoals } from "../component/SettingGoals";
import { ThisMonthGoals } from "../component/ThisMonthGoals";
import { TrendGoals } from "../component/TrendGoals";

export const GoalsPage: FC = () => {
  return (
    <PageTemplate>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Link
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <BackArrow />
        </Link>
        <h1>Update your goals</h1>
        <div>.</div>
      </div>
      <SettingGoals />
      <ThisMonthGoals />
      <TrendGoals />
    </PageTemplate>
  );
};
