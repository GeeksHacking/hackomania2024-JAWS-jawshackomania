import { FC } from "react";
import { CurrentWeek } from "../CurrentWeek";
import { ProgressCircle } from "../ProgressCircle";
import { Link } from "react-router-dom";
import "./index.css";
import { Leaf } from "../Leaf";

export const ProgressCard: FC = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "93vw",
        padding: "20px",
        backgroundColor: "rgb(43, 201, 204, 0.2)",
        borderRadius: "20px",
      }}
    >
      <CurrentWeek />
      <ProgressCircle />
      <Link to={"/goals"} className="updateYourGoals">
        <div style={{ fontWeight: 700, fontSize: "20px" }}>
          Not satisfied? Update your goals here!
        </div>
      </Link>
      <div
        style={{
          backgroundColor: "#bdf0ec",
          height: "620px",
          width: "80vw",
          borderRadius: "20px",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "15px",
        }}
      >
        <div style={{fontSize: "18px", fontWeight: 700}}>Today's Challenge</div>
        <div
          style={{
            backgroundColor: "rgb(255,255,255, 0.5)",
            height: "160px",
            width: "75vw",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            gap: "8px",
            fontWeight: 600,
            fontSize: "18px",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "6px 6px #e6e6e6",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: 700 }}>
            Complete 3 Quizzes
          </div>
          <div>Head to the SP app here to checkout the quizzes!</div>
          <div>
            Complete this to earn 10 <Leaf />
          </div>
          <div
            style={{
              backgroundColor: "#e6e6e6",
              width: "50px",
              height: "30px",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "8px",
              border: "2px solid #cccccc",
              padding: "2px",
            }}
          >
            1 / 3
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(255,255,255, 0.5)",
            height: "160px",
            width: "75vw",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            gap: "8px",
            fontWeight: 600,
            fontSize: "18px",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "6px 6px #e6e6e6",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: 700 }}>
            Track your carbon footprint today!
          </div>
          <div>Head to the SP app to log your carbon emission today!</div>
          <div>
            Complete this to earn 15 <Leaf />
          </div>
          <div
            style={{
              backgroundColor: "#e6e6e6",
              width: "100px",
              height: "30px",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "8px",
              border: "2px solid #cccccc",
              padding: "2px",
            }}
          >
            Not Done
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(255,255,255, 0.5)",
            height: "160px",
            width: "75vw",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            gap: "8px",
            fontWeight: 600,
            fontSize: "18px",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "6px 6px #e6e6e6",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: 700 }}>
            Join a new league
          </div>
          <div>
            Explore new public leagues or create your own private league
          </div>
          <div>
            Complete this to earn 20 <Leaf />
          </div>
          <div
            style={{
              backgroundColor: "#e6e6e6",
              width: "100px",
              height: "30px",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "8px",
              border: "2px solid #cccccc",
              padding: "2px",
            }}
          >
            Not Done
          </div>
        </div>
      </div>
    </div>
  );
};
