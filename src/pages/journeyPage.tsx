import { FC, useState, useEffect, useCallback } from "react";
import { PageTemplate } from "./pageTemplate";
import { Row, Progress, ProgressProps } from "antd";
import { Link } from "react-router-dom";
import { BackArrow } from "../component/BackArrow";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import ImageMarker, { Marker, MarkerComponentProps } from "react-image-marker";
import "./journeyPage.css";
import { Leaf } from "../component/Leaf";

const customMarkerMapping = [
  <img src={"twenty-one.png"} width="50" height="50" alt="" />,
  <img src={"twenty-two.png"} width="50" height="50" alt="" />,
  <img src={"23.png"} width="50" height="50" alt="" />,
  <img src={"24.png"} width="50" height="50" alt="" />,
  <img src={"25.png"} width="50" height="50" alt="" />,
  <div className="lightBulbContainer">
    <img
      className="lightBulbIcon"
      src={"light-bulb.png"}
      width="70"
      height="70"
      alt=""
    />
  </div>,
];

const twoColors: ProgressProps["strokeColor"] = {
  "0%": "#67bfbf",
  "100%": "#0cf7f7",
};

export const JourneyPage: FC = () => {
  const [markers, setMarkers] = useState<Array<Marker>>([
    {
      top: 86,
      left: 82,
    },
    {
      top: 66,
      left: 52,
    },
    {
      top: 53,
      left: 20,
    },
    {
      top: 35,
      left: 51,
    },
    {
      top: 20,
      left: 12,
    },
    {
      top: 60,
      left: 35,
    },
  ]);
  const [displayConfetti, setDisplayConfetti] = useState<boolean>(false);
  const { width, height } = useWindowSize();

  const CustomMarker = useCallback(
    (props: MarkerComponentProps) => {
      return customMarkerMapping[props.itemNumber as any];
    },
    [customMarkerMapping]
  );

  const BulbMarker = () => {
    return <BulbMarker />;
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayConfetti(true);
    }, 3500);
  }, []);

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
        <h1>Achievements</h1>
        <div>.</div>
      </div>
      <Row style={{ width: "100%", display: "block", textAlign: "center" }}>
        {displayConfetti && <Confetti width={width} height={height} />}
        <div
          style={{
            display: "flex",
            padding: "0px 20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageMarker
            src="/journeypath.png"
            markers={markers}
            markerComponent={CustomMarker}
            onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
          />
        </div>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            height: "110px",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            borderRadius: "15px",
            padding: "15px",
            color: "#000000",
            fontWeight: "600",
            gap: "5px",
            opacity: "0.8",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: "900", fontSize: "18px" }}>
                <img src="firework.png" alt="" width="20" height="20" />
                <span style={{ paddingLeft: "5px" }}>Congratulations!</span>
              </div>
              <div style={{ fontSize: "15px" }}>
                You have earn 744 <Leaf />. Only 46 <Leaf /> to next level!{" "}
              </div>
            </div>
          </div>
          <div>
            <Progress percent={50} strokeColor={twoColors} />
          </div>
        </div>
      </Row>
    </PageTemplate>
  );
};
