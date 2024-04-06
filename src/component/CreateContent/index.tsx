import { Card, Input, QRCode, Tag } from "antd";
import { FC, useState } from "react";
import "./index.css";
import { Leaf } from "../Leaf";

export const CreateContent: FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div
      style={{
        alignContent: "center",
        justifyContent: "center",
        display: "flex",
        paddingTop: "30px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: 500, paddingBottom: "30px" }}>
        Interested to create a new league? Just 3 steps!
      </div>
      {step === 1 && (
        <div
          style={{
            height: "115vw",
            width: "80vw",
            backgroundColor: "#c8e3da",
            display: "flex",
            alignItems: "center",
            borderRadius: "15px",
            padding: "15px",
            flexDirection: "column",
            boxShadow: "3px 3px #bcd4d4",
          }}
        >
          <div
            style={{
              fontSize: 25,
              fontWeight: 800,
              paddingBottom: "50px",
            }}
          >
            Step 1
          </div>
          <div
            style={{
              fontSize: 25,
              fontWeight: 800,
              paddingBottom: "40px",
            }}
          >
            League Name
          </div>
          <Input
            placeholder="Enter You League Name"
            prefix={<img src="/createTeam.png" width="20" height="20" alt="" />}
            style={{ maxWidth: "80%", height: "50px", marginBottom: "20px" }}
          />
          <div>*Your league name should be unique</div>

          <div style={{ paddingTop: "50px" }}>
            <h1>Suggested League Names </h1>
          </div>
          <div
            style={{
              paddingTop: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Tag
              style={{
                height: "40px",
                width: "250px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: 600,
              }}
              color="magenta"
            >
              Earth Guardians League
            </Tag>
            <Tag
              style={{
                height: "40px",
                width: "250px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: 600,
              }}
              color="orange"
            >
              Green Dream Team
            </Tag>
            <Tag
              style={{
                height: "40px",
                width: "250px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: 600,
              }}
              color="green"
            >
              Nature Ninjas Network
            </Tag>
            <Tag
              style={{
                height: "40px",
                width: "250px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: 600,
              }}
              color="blue"
            >
              EcoWarriors League
            </Tag>
            <Tag
              style={{
                height: "40px",
                width: "250px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: 600,
              }}
              color="purple"
            >
              Planet Protectors League
            </Tag>
          </div>
          <div style={{ paddingTop: "15px", paddingLeft: "80%" }}>
            <img
              src="/right.png"
              width="40"
              height="40"
              alt=""
              onClick={() => setStep(2)}
            />
          </div>
        </div>
      )}
      {step === 2 && (
        <div
          style={{
            height: "115vw",
            width: "80vw",
            backgroundColor: "#c8e3da",
            display: "flex",
            alignItems: "center",
            borderRadius: "15px",
            padding: "15px",
            flexDirection: "column",
            boxShadow: "3px 3px #bcd4d4",
          }}
        >
          <div
            style={{
              fontSize: 25,
              fontWeight: 800,
              paddingBottom: "50px",
            }}
          >
            Step 2
          </div>
          <div
            style={{
              fontSize: 25,
              fontWeight: 800,
              paddingBottom: "40px",
            }}
          >
            Make in Private or Public to all!
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <div
              className="private"
              style={{
                height: "200px",
                width: "200px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignContent: "left",
                justifyContent: "left",
                padding: "15px",
                paddingTop: "45px",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "25px",
                  paddingBottom: "10px",
                }}
              >
                Private
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                You decide who gets to take part!
              </div>
            </div>
            <div
              className="public"
              style={{
                height: "200px",
                width: "200px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignContent: "left",
                justifyContent: "left",
                padding: "15px",
                paddingTop: "45px",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "25px",
                  paddingBottom: "10px",
                }}
              >
                Public
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                Anyone can join!
              </div>
            </div>
          </div>
          <div
            style={{
              paddingTop: "15px",
              paddingLeft: "80%",
              marginTop: "250px",
            }}
          >
            <img
              src="/right.png"
              width="40"
              height="40"
              alt=""
              onClick={() => setStep(3)}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div
          style={{
            height: "115vw",
            width: "80vw",
            backgroundColor: "#c8e3da",
            display: "flex",
            alignItems: "center",
            borderRadius: "15px",
            padding: "15px",
            flexDirection: "column",
            boxShadow: "3px 3px #bcd4d4",
          }}
        >
          <div
            style={{
              fontSize: 25,
              fontWeight: 800,
              paddingBottom: "30px",
            }}
          >
            Step 3
          </div>
          <div
            style={{
              fontSize: 25,
              fontWeight: 800,
              paddingBottom: "40px",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Congratulations!
            <div style={{ fontSize: 20, fontWeight: 700, paddingTop: "15px" }}>
              You have successfully created your own league!
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Card
              title="Private League"
              style={{
                width: 300,
                height: "auto",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #3f7373",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "30px" }}>Team JAWS</div>
            </Card>

            <Card
              title="League Code"
              style={{
                width: 300,
                height: "auto",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#7dbdbd",
              }}
              className="card"
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "30px",
                  border: "3px solid rgb(255,255,255, 0.6)",
                  width: "200px",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <div>JBDSPKI</div>
                <img src="/copybold.png" width="30" height="30" alt="" />
              </div>
              <QRCode
               
                errorLevel="H"
                value="https://ant.design/"
                style={{ border: "none" }}
              />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
