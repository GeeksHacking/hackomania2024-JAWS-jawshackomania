import { Button, Col, Input, Row } from "antd";
import { FC } from "react";
import { PageTemplate } from "./pageTemplate";
import { LeagueName } from "../component/League/LeagueName";
import TypeButton from "../component/League/TypeButton";

export const LeaguePage: FC = () => {
  return (
    <PageTemplate>
      <div>League Page</div>
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Create a league</h1>
        <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Make it private or open to all!</h5>
      </div>
      <div>
        <Input size="large" placeholder="League Name" prefix={<LeagueName/>} />
      </div>
      <div></div>
      <div>
        <Row gutter={[20, 20]} justify="center">
          <Col>
            <TypeButton label="Private" description="You decide who can join" />
          </Col>
          <Col>
            <TypeButton label="Public" description="Open for anyone to join" />
          </Col>
        </Row>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button type="primary" shape="round">Create</Button>
      </div>
      
    </PageTemplate>
  );
};
