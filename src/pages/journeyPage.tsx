import { FC, useState, useEffect, useCallback } from "react";
import { PageTemplate } from "./pageTemplate";
import { Row } from "antd";
import { Link } from "react-router-dom";
import { BackArrow } from "../component/BackArrow";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import ImageMarker, { Marker, MarkerComponentProps } from "react-image-marker";
import "./journeyPage.css";

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
        <h1 style={{ marginLeft: "10%" }}>Achievements</h1>
        <div>.</div>
      </div>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {displayConfetti && <Confetti width={width} height={height} />}
        <ImageMarker
          src="/journeypath.png"
          markers={markers}
          markerComponent={CustomMarker}
          onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
        />
      </Row>
    </PageTemplate>
  );
};
