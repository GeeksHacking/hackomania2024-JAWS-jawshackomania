import { Segmented } from "antd";
import { FC, useState } from "react";
import { PageTemplate } from "./pageTemplate";
import { Link } from "react-router-dom";
import { BackArrow } from "../component/BackArrow";
import "./leaguePage.css";
import { ActiveContent } from "../component/ActiveContent";
import { ExploreContent } from "../component/ExploreContent";

export const LeaguePage: FC = () => {
  const [selectedOption, setSelectedOption] = useState("Active");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

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
          backgroundColor: "#d8ebe7",
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
        <h1>Leagues</h1>
        <div>.</div>
      </div>

      <div className="league">
        <Segmented<string>
          style={{
            width: "100vw",
            fontSize: "20px",
            fontWeight: "700",
            backgroundColor: "#d8ebe7",
          }}
          options={["Active", "Explore", "Join", "Create", "Past"]}
          value={selectedOption}
          onChange={handleOptionChange}
        />
      </div>
      <div>
        {selectedOption === "Active" && <ActiveContent />}
        {/* {selectedOption === "Join" && <JoinContent />} */}
        {selectedOption === "Explore" && <ExploreContent />}
        {/* {selectedOption === "Create" && <CreateContent />}
        {selectedOption === "Past" && <PastContent />} */}
      </div>
    </PageTemplate>
  );
};
