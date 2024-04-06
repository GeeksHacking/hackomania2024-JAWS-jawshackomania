import { FC } from "react";
import { Card } from "antd";

export const TrendGoals: FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{ fontSize: "25px", fontWeight: "700", paddingBottom: "10px" }}
      >
        Trends
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <Card
          title={
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: "20px",
              }}
            >
              <img alt="" src="drop.png" width="15" height="15" />
              <div
                style={{
                  color: "rgb(132,219, 255)",
                  fontWeight: 700,
                  paddingLeft: "5px",
                }}
              >
                Water
              </div>
            </div>
          }
          bordered={false}
        >
          <div style={{ color: "grey", paddingBottom: "10px" }}>
            Your average monthly water consumption over the past 10 months was
            15 cubic meters.{" "}
          </div>
          <div style={{ display: "block", clear: "both" }}>
            <span style={{ float: "left" }}>
              <div style={{ color: "grey", fontSize: "20px" }}>Averaged:</div>
              <div style={{ color: "grey", fontSize: "20px" }}>17.5 Cu M</div>
            </span>
            <div style={{ float: "right" }}>
              <img src="red_green_chart1.png" alt="" height="80" width="200" />
            </div>
          </div>
        </Card>
      </div>
      <Card
        title={
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: "20px",
            }}
          >
            <img alt="" src="lightning.png" width="20" height="20" />
            <div
              style={{
                color: "rgb(255,220, 100)",
                fontWeight: 700,
                paddingLeft: "5px",
              }}
            >
              Electricity
            </div>
          </div>
        }
        bordered={false}
      >
        <div style={{ color: "grey", paddingBottom: "10px" }}>
          Your average monthly electricity consumption over the past 10 months
          was 250 kilo watts per hour.{" "}
        </div>
        <div style={{ display: "block", clear: "both" }}>
          <span style={{ float: "left" }}>
            <div style={{ color: "grey", fontSize: "20px" }}>Averaged:</div>
            <div style={{ color: "grey", fontSize: "20px" }}>250 kWh</div>
          </span>
          <div style={{ float: "right" }}>
            <img src="red_green_chart.png" alt="" height="80" width="200" />
          </div>
        </div>
      </Card>
    </div>
  );
};
