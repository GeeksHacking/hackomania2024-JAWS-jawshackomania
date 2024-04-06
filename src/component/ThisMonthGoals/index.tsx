import { FC } from "react";
import { EnergyCircle } from "../EnergyCircle";

const thisMonthGoal = [15, 300];

const thisMonthUsage = [17, 200];
export const ThisMonthGoals: FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{ fontSize: "25px", fontWeight: "700", paddingBottom: "10px" }}
      >
        This Month
      </div>
      <div
        style={{
          borderRadius: "12px",
          backgroundColor: "white",
          padding: "10px 15px",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "block", clear: "both", height: "100px" }}>
          <div style={{ float: "left" }}>
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
                  paddingBottom: "20px",
                }}
              >
                Water
              </div>
            </div>
            <div style={{ color: "grey" }}>
              <div style={{ fontWeight: 700 }}>Goals:</div>
              <b style={{ fontSize: "20px", color: "black" }}>
                {thisMonthGoal[0]}
              </b>{" "}
              Cu M
            </div>
          </div>
          <div style={{ float: "right" }}>
            <EnergyCircle
              color="red"
              unit="Cu M"
              percent={Math.ceil((thisMonthUsage[0] / thisMonthGoal[0]) * 100)}
              value={thisMonthUsage[0]}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          borderRadius: "12px",
          backgroundColor: "white",
          padding: "10px 15px",
        }}
      >
        <div style={{ display: "block", clear: "both", height: "100px" }}>
          <div style={{ float: "left" }}>
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
                  paddingBottom: "20px",
                }}
              >
                Electricity
              </div>
            </div>
            <div style={{ color: "grey" }}>
              <div style={{ fontWeight: 700 }}>Goals:</div>
              <b style={{ fontSize: "20px", color: "black" }}>
                {thisMonthUsage[1]}
              </b>{" "}
              kWh
            </div>
          </div>
          <div style={{ float: "right" }}>
            <EnergyCircle
              color="#55c95a"
              unit="kWh"
              percent={Math.ceil((thisMonthUsage[1] / thisMonthGoal[1]) * 100)}
              value={thisMonthGoal[1]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
