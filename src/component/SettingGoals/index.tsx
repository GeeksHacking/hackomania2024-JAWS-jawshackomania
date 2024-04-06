import { FC, useState } from "react";
import { Button, Modal, Input } from "antd";
import "./index.css";
import { Leaf } from "../Leaf";

const thisMonthGoal = [15, 300];

export const SettingGoals: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waterError, setWaterError] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOnChange = (event: any) => {
    const { value } = event.target;
    if (value > thisMonthGoal) {
      setWaterError(true);
    } else {
      setWaterError(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{ fontSize: "25px", fontWeight: "700", paddingBottom: "10px" }}
      >
        Setting Goals
      </div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "rgb(218, 245, 240)",
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#004d40",
            fontSize: "22px",
            fontWeight: "600",
            paddingBottom: "10px",
          }}
        >
          Introducing the Energy Savings Bank
        </div>
        <div style={{ color: "#00695c", paddingBottom: "10px", width: "100%" }}>
          A personalized tool to track your energy goals effortlessly. Earn
          credits for conservation efforts and stay informed about your energy
          balance each month. It's your key to managing energy wisely and making
          a positive impact on the environment.
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Button
            type="primary"
            className="settingGoalsButton"
            onClick={showModal}
          >
            Setting Goals for May
          </Button>
        </div>
      </div>

      <Modal
        title="Goals for May"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modalWrapper"
        styles={{
          header: {
            backgroundColor: "rgb(218, 245, 240)",
          },
          body: {
            backgroundColor: "rgb(218, 245, 240)",
          },
          footer: {
            backgroundColor: "rgb(218, 245, 240)",
          },
        }}
        okButtonProps={{ className: "settingGoalsOkButton" }}
        cancelButtonProps={{ className: "settingGoalsCancelButton" }}
      >
        <div>
          Successfully reaching your monthly goals earns you 10 <Leaf />, while
          falling short results in a loss of 10 <Leaf />. Stay motivated and
          focused on achieving your targets to earn rewards and maintain your
          progress toward a greener lifestyle.
        </div>
        <div style={{ padding: "10px 0px" }}>
          <div>Goal for Water</div>
          <Input suffix="Cu M" onChange={handleOnChange} />
          {waterError && (
            <div style={{ color: "red" }}>
              You cannot set a goal higher than the current goal.
            </div>
          )}
        </div>
        <div style={{ padding: "10px 0px" }}>
          <div>Goal for Electricity</div>
          <Input suffix="kWh" />
        </div>
      </Modal>
    </div>
  );
};
