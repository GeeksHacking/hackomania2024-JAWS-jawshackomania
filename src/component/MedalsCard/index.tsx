import { FC } from "react";

export const MedalsCard: FC = () => {
  const medal = (medalType: string) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "30%",
        width: "100vw",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: "10px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#bae7e8",
          padding: "15px",
          borderRadius: "15px",
          boxShadow: "3px 3px #bcd4d4",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontWeight: "800",
            paddingBottom: "10px",
          }}
        >
          {medalType === "gold" && <div>Ally Ang</div>}
          {medalType === "silver" && <div>Lionel Lim</div>}
          {medalType === "bronze" && <div>Perry Png</div>}
        </div>
        <img src={`/${medalType}.png`} width="50" height="50" alt="" />
        <div
          style={{
            marginTop: "5px",
            fontWeight: "900",
            borderRadius: "20%",
            height: "25px",
            width: "25px",
            color: "#ccb562",
            backgroundColor: "rgb(255, 219, 135, 0.2.5)",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {medalType === "gold" && <div>11</div>}
          {medalType === "silver" && <div>28</div>}
          {medalType === "bronze" && <div>20</div>}
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {medal("gold")}
      {medal("silver")}
      {medal("bronze")}
    </div>
  );
};
