import { FC } from "react";
import { PageTemplate } from "./pageTemplate";
import { Link } from "react-router-dom";
import { BackArrow } from "../component/BackArrow";
import { Avatar, Card } from "antd";
import {
  CloseCircleOutlined,
  WhatsAppOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Leaf } from "../component/Leaf";

const { Meta } = Card;

export const EventDetailPage: FC = () => (
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
        to={"/community"}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <BackArrow />
      </Link>
      <h1>SGreen Only Event Details</h1>
      <div>.</div>
    </div>
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
    >
      <Card
        style={{
          boxShadow: "rgba(100, 100, 111) 0px 7px 29px 4px",
          width: "90vw",
        }}
        cover={<img alt="example" src="spevent.jpg" />}
        actions={[
          <CloseCircleOutlined key="reject" />,
          <WhatsAppOutlined key="contact" />,
          <CheckCircleOutlined key="accept" />,
        ]}
      >
        <Meta
          style={{ fontSize: "20px", fontWeight: 700, paddingBottom: "15px" }}
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          description="GO GREEN SP | Sustainability Starts with Us"
        />
        <Meta
          style={{ fontSize: "18px", fontWeight: 500, paddingBottom: "15px" }}
          description="Location: Serangoon Community Center"
          avatar={
            <img alt="example" src="location.png" height={30} width={30} />
          }
        />
        <Meta
          style={{ fontSize: "18px", fontWeight: 500, paddingBottom: "15px" }}
          avatar={
            <img alt="example" src="calendar.png" height={30} width={30} />
          }
          description="Date: 15 April 2024"
        />
        <Meta
          style={{ fontSize: "18px", fontWeight: 500, paddingBottom: "15px" }}
          avatar={<img alt="example" src="cost.png" height={30} width={30} />}
          description={<div>Cost: Free + 25 <Leaf/></div>}
        />
        <Meta
          style={{ fontSize: "17px" }}
          avatar={<img alt="example" src="info.png" height={30} width={30} />}
          description=" An event dedicated to championing environmental consciousness and sustainable practices within our community. Join us as we embark on a journey to explore innovative solutions and actionable strategies aimed at reducing our ecological footprint. From insightful discussions on renewable energy and waste reduction to hands-on workshops promoting eco-friendly lifestyles, this event aims to inspire and empower individuals to take proactive steps towards a greener, more sustainable future. Together, we can make a meaningful impact and pave the way for a healthier planet for generations to come."
        />
      </Card>
    </div>
  </PageTemplate>
);
