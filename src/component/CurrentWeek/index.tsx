import { FC } from "react";
import { Leaf } from "../Leaf";
import { Link } from "react-router-dom";

export const CurrentWeek: FC = () => {
  return (
    <Link to={"/journey"}>
      <div
        style={{
          backgroundColor: "rgb(26, 33, 25, 0.6)",
          width: "250px",
          height: "120px",
          color: "#ffffff",
          fontWeight: "600",
          borderRadius: "10px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          filter: "drop-shadow(3px 3px #b6d3d4)",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "-28px",
            backgroundColor: "#ffffff",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            border: "2px solid rgb(26, 33, 25, 0.6)",
          }}
        >
          <img src="/greenleaf.png" width="25" height="25" alt="" />
        </div>
        <div
          style={{
            marginTop: "-20px",
            backgroundColor: "rgb(26, 33, 25)",
            width: "140px",
            fontSize: "16px",
            height: "40px",
            color: "#ffffff",
            fontWeight: "600",
            borderRadius: "10px",
            alignContent: "center",
            textAlign: "center",
            marginBottom: 10 
          }}
        >
          Week 1 Day 5
        </div>
        Check your journey!
      </div>
    </Link>
  );
};
