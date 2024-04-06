import { FC, useState } from "react";
import { PageTemplate } from "./pageTemplate";
import { Link } from "react-router-dom";
import { BackArrow } from "../component/BackArrow";
import { Avatar, Divider, Radio, RadioChangeEvent } from "antd";
import "./friendsPage.css";
import { Leaf } from "../component/Leaf";
import { UserOutlined } from "@ant-design/icons";

export const FriendsPage: FC = () => {
  const [mode, setMode] = useState("request");

  const handleModeChange = () => {
    mode === "request" ? setMode("list") : setMode("request");
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
        <h1>Friends List</h1>
        <div>.</div>
      </div>
      <div
        style={{
          backgroundColor: "#rgb(204, 232, 232, 0.3)",
          borderRadius: "15px",
          boxShadow: "3px 3px 3px 3px #bcd4d4",
          padding: "20px",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Radio.Group
              onChange={handleModeChange}
              value={mode}
              style={{ marginBottom: 8, borderRadius: "20px" }}
            >
              <Radio.Button
                className="friend"
                value="request"
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  width: "40vw",
                  textAlign: "center",
                }}
              >
                Friend Requests
              </Radio.Button>
              <Radio.Button
                className="friend"
                value="list"
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  width: "40vw",
                  textAlign: "center",
                }}
              >
                Friend List
              </Radio.Button>
            </Radio.Group>
          </div>
          {mode === "request" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  padding: "15px",
                }}
              >
                Friend Requests
              </div>
              <div
                style={{
                  width: "80vw",
                  backgroundColor: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 500,
                  padding: "10px",
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  borderRadius: "15px",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#c1e3e3" }}
                  size={48}
                  icon={<UserOutlined />}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "19px" }}>
                    Carlos Tan
                  </div>
                  <div>
                    Hello! Connect with me to earn <Leaf />
                  </div>
                </div>
                <div style={{marginLeft: "40px"}}>
                  <a>
                    <img
                      onClick={() => {}}
                      src="/minus.png"
                      width="35"
                      height="35"
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                  </a>
                  <a>
                    <img
                      onClick={() => {}}
                      src="/add.png"
                      width="35"
                      height="35"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "80vw",
                  backgroundColor: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 500,
                  padding: "10px",
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  borderRadius: "15px",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#c1e3e3" }}
                  size={48}
                  icon={<UserOutlined />}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "19px" }}>
                    Maggie Lim
                  </div>
                  <div>Hihi, I am interested in solar too!</div>
                </div>
                <div style={{marginLeft: "40px"}}>
                  <a>
                    <img
                      src="/minus.png"
                      width="35"
                      height="35"
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                  </a>
                  <a>
                    <img
                      onClick={() => {}}
                      src="/add.png"
                      width="35"
                      height="35"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <Divider />
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  padding: "15px",
                  marginTop: "-10px",
                }}
              >
                Friend Suggestions
              </div>
              <div
                style={{
                  width: "80vw",
                  backgroundColor: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 500,
                  padding: "10px",
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  borderRadius: "15px",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#c1e3e3" }}
                  size={48}
                  icon={<UserOutlined />}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "19px" }}>
                    Charles Lim
                  </div>
                  <div>
                    Make new friends, Earn more <Leaf />
                  </div>
                </div>
                <div style={{ paddingLeft: "88px" }}>
                  <img
                    onClick={() => {}}
                    src="/add.png"
                    width="35"
                    height="35"
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  width: "80vw",
                  backgroundColor: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 500,
                  padding: "10px",
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  borderRadius: "15px",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#c1e3e3" }}
                  size={48}
                  icon={<UserOutlined />}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "19px" }}>
                    Louis Lee
                  </div>
                  <div>
                    Make new friends, Earn more <Leaf />
                  </div>
                </div>
                <div style={{ paddingLeft: "88px" }}>
                  <img
                    onClick={() => {}}
                    src="/add.png"
                    width="35"
                    height="35"
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  width: "80vw",
                  backgroundColor: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 500,
                  padding: "10px",
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  borderRadius: "15px",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#c1e3e3" }}
                  size={48}
                  icon={<UserOutlined />}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "19px" }}>
                    Seth Lee
                  </div>
                  <div>
                    Make new friends, Earn more <Leaf />
                  </div>
                </div>
                <div style={{ paddingLeft: "88px" }}>
                  <img
                    onClick={() => {}}
                    src="/add.png"
                    width="35"
                    height="35"
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  width: "80vw",
                  backgroundColor: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 500,
                  padding: "10px",
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  borderRadius: "15px",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#c1e3e3" }}
                  size={48}
                  icon={<UserOutlined />}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "19px" }}>
                    Seth Chua
                  </div>
                  <div>
                    Make new friends, Earn more <Leaf />
                  </div>
                </div>
                <div style={{ paddingLeft: "88px" }}>
                  <img
                    onClick={() => {}}
                    src="/add.png"
                    width="35"
                    height="35"
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  width: "80vw",
                  backgroundColor: "#ffffff",
                  fontSize: "17px",
                  fontWeight: 500,
                  padding: "10px",
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  borderRadius: "15px",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#c1e3e3" }}
                  size={48}
                  icon={<UserOutlined />}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "19px" }}>
                    Avery Sim
                  </div>
                  <div>
                    Make new friends, Earn more <Leaf />
                  </div>
                </div>
                <div style={{ paddingLeft: "88px" }}>
                  <img
                    onClick={() => {}}
                    src="/add.png"
                    width="35"
                    height="35"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
          {mode === "list" && <div>list</div>}
        </div>
      </div>
    </PageTemplate>
  );
};
