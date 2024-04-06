import { FC } from "react";
import { PageTemplate } from "./pageTemplate";
import { Link } from "react-router-dom";
import { BackArrow } from "../component/BackArrow";
import { Events } from "../component/Events";

export const CommunityPage: FC = () => (
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
      <h1 style={{ marginLeft: "10%" }}>Community</h1>

      <Link to={"/friends"}>
        <img
          src="/addfriend.png"
          width="40"
          height="40"
          alt=""
          style={{ marginRight: "15px" }}
        />
      </Link>
    </div>
    <div>
      <Events />
    </div>
  </PageTemplate>
);
