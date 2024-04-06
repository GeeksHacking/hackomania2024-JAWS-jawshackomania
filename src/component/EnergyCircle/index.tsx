import { FC } from "react";
import { Progress } from "antd";

interface IProps {
  color: string;
  unit: string;
  percent: number;
  value: number;
}

export const EnergyCircle: FC<IProps> = ({ color, unit, percent, value }) => {
  const textInCircle = (percent?: number) => {
    return (
      <div
        style={{
          color: "grey",
          fontSize: 14,
          display: "flex",
          flexDirection: "column",
          fontWeight: "800",
          gap: 10,
        }}
      >
        <div>{percent}%</div>
        <div>
          {value} {unit}
        </div>
      </div>
    );
  };
  return (
    <div>
      <Progress
        type="dashboard"
        percent={percent}
        format={() => <div>{textInCircle(percent)}</div>}
        strokeColor={color}
        steps={5}
        strokeWidth={15}
        trailColor="rgba(0, 0, 0, 0.06)"
        size={100}
      />
    </div>
  );
};
