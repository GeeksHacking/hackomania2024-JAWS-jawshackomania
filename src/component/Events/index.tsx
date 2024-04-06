import { Avatar, Button, Carousel, List } from "antd";
import { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Leaf } from "../Leaf";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface GroupChat {
  id: number;
  name: string;
  member: number;
}

interface CommunityPageProps {
  events: Event[];
  groupChats: GroupChat[];
}

export const Events: FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "SGreen Only",
      description:
        "Join us for an exclusive exploration into the realm of sustainable living. Uncover the secrets of eco-conscious practices and immerse yourself in a world where green is not just a color, but a way of life. From innovative technologies to mindful consumption, this event promises to ignite your passion for a greener future.",
      date: "April 15, 2024",
    },
    {
      id: 2,
      title: "Sustainablizz",
      description:
        "Welcome to Sustainablizz, where sustainability meets innovation in a whirlwind of excitement! Brace yourself for a journey through cutting-edge solutions and visionary ideas aimed at preserving our planet. From renewable energy to zero-waste initiatives, this event is your gateway to a more sustainable tomorrow.",
      date: "April 22, 2024",
    },
    {
      id: 3,
      title: "Solar Workshop",
      description:
        "Step into the illuminating world of solar energy at our Solar Workshop. Discover the power of sunlight transformed into sustainable solutions that light up our lives. Dive deep into the science, technology, and practical applications of solar power, and let the brilliance of the sun guide your path towards a brighter, cleaner future.",
      date: "April 29, 2024",
    },
  ];

  const groupChats: GroupChat[] = [
    {
      id: 1,
      name: "EcoPower Alliance",
      member: 183,
    },
    {
      id: 2,
      name: "Renewable Energy Warriors",
      member: 164,
    },
    {
      id: 3,
      name: "Tampines Green Collective",
      member: 312,
    },
    {
      id: 4,
      name: "Save The World",
      member: 40,
    },
    {
      id: 5,
      name: "Journey Points Trade",
      member: 210,
    },
  ];
  return (
    <div>
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{ fontSize: "25px", fontWeight: "700", paddingBottom: "20px" }}
        >
          Upcoming Events
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div
            style={{
              border: "2px solid #858585",
              borderRadius: "20px",
              padding: "10px",
              color: "#858585",
              fontWeight: 800,
            }}
          >
            Going
          </div>
          <div
            style={{
              border: "2px solid #858585",
              borderRadius: "20px",
              padding: "10px",
              color: "#858585",
              fontWeight: 800,
            }}
          >
            Saved
          </div>
          <div
            style={{
              border: "2px solid #46aba9",
              borderRadius: "20px",
              padding: "10px",
              color: "#46aba9",
              fontWeight: 800,
              backgroundColor: "rgb(157, 196, 174, 0.2)",
            }}
          >
            Suggested
          </div>
          <div
            style={{
              border: "2px solid #858585",
              borderRadius: "20px",
              padding: "10px",
              color: "#858585",
              fontWeight: 800,
            }}
          >
            Organise
          </div>
        </div>
        <Carousel
          autoplay
          style={{
            marginTop: "20px",
            backgroundColor: "#daf5f0",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            padding: "10px",
          }}
        >
          {events.map((event) => (
            <div key={event.id}>
              <div
                style={{
                  color: "#004d40",
                  fontSize: "22px",
                  fontWeight: "600",
                  paddingBottom: "10px",
                }}
              >
                {event.title}
              </div>
              <div style={{ color: "#00695c", paddingBottom: "10px" }}>
                {event.description}
              </div>
              <div
                style={{
                  color: "#00695c",
                  paddingBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Held On: {event.date}
              </div>
              <Button
                type="primary"
                style={{ marginBottom: "20px", backgroundColor: "#62e3cb" }}
                onClick={() => {}}
              >
                Join Now!
              </Button>
            </div>
          ))}
        </Carousel>
      </div>

      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "25px",
              fontWeight: "700",
              paddingBottom: "20px",
            }}
          >
            Your Group Chats
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(127, 185, 186, 0.5)",
            padding: "10px",
            borderRadius: "12px",
          }}
        >
          <List
            dataSource={groupChats}
            renderItem={(chat) => (
              <List.Item
                style={{
                  backgroundColor: "#ebf7f6",
                  padding: "10px",
                  borderRadius: "12px",
                  marginBottom: "5px",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#c1e3e3", marginRight: "20px" }}
                  icon={<UserOutlined />}
                  size={50}
                />
                <List.Item.Meta
                  title={
                    <a
                      href={`/chat/${chat.id}`}
                      style={{
                        color: "#004d40",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      {chat.name}
                    </a>
                  }
                  description={
                    <span style={{ color: "#00695c", fontSize: "15px" }}>
                      Members: {chat.member}
                    </span>
                  }
                />
                <div style={{ paddingRight: "10px" }}>
                  <img src="/rightarrow.png" width="20" height="20" alt="" />
                </div>
              </List.Item>
            )}
          />
          <div
            style={{
              backgroundColor: "#d6e8ff",
              borderRadius: "12px",
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <img src="team.png" width="50" height="50" alt="" />
            <div style={{ fontWeight: 700, fontSize: "17px" }}>
              <div>Start a new group!</div>
              <div>
                Organise your own event group and earn up to 200 <Leaf />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
