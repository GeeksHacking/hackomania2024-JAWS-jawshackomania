import React from "react";
import { FC } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const Profile: FC = () => {
  return (
    <div
      style={{
        gap: "15px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        padding: "10px",
        fontSize: 20,
        fontWeight: 600,
        marginLeft: "20px",
      }}
    >
      <Avatar
        style={{ backgroundColor: "#7fb9ba" }}
        size="large"
        icon={<UserOutlined />}
      />
      <div style={{fontSize: "25px"}}>Hello Ally!</div>
    </div>
  );
};
