import { Card, Col, Divider, Row, Tag } from "antd";
import { FC } from "react";

export const ActiveContent: FC = () => {
  const cardStyle = {
    boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.2)",
    fontSize: "14px",
    fontWeight: "600",
    height: "550px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <div>
        <Row gutter={[8, 16]} style={{ paddingBottom: "20px", width: "90vw" }}>
          <Col span={12}>
            <div>
              <a>
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Lion City Eco Warriors</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event10.jpg" />}
                >
                  <p>
                    Leading the charge for sustainability in Singapore, our eco
                    warriors are dedicated to protecting the environment through
                    collective action and advocacy.
                  </p>

                  <p>Members: 250</p>
                  <p>Points: 1200</p>
                  <p>Started Since: March 15, 2019</p>
                  <Tag color="#f50">Popular</Tag>
                  <Tag color="#2db7f5">Tampines</Tag>
                  <Tag color="#87d068">Energy</Tag>
                </Card>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <a>
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Green Impact</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event3.png" />}
                >
                  <p>
                    Making a positive impact on the environment one step at a
                    time, Green Impact fosters eco-friendly practices and
                    encourages sustainable living among its members.
                  </p>

                  <p>Members: 180</p>
                  <p>Points: 900</p>
                  <p>Started Since: November 23, 2020</p>

                  <Tag color="#ffc229">Solar</Tag>
                  <Tag color="#2db7f5">East Singapore</Tag>
                </Card>
              </a>
            </div>
          </Col>
        </Row>
        <Row gutter={[8, 16]} style={{ paddingBottom: "20px", width: "90vw" }}>
          <Col span={12}>
            <div>
              <a>
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Solar Panel</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event4.jpg" />}
                >
                  <p>
                    Harnessing the power of solar energy, our community of solar
                    enthusiasts promotes the adoption of solar technology for a
                    cleaner, renewable future.
                  </p>

                  <p>Members: 120</p>
                  <p>Points: 750</p>
                  <p>Started Since: July 10, 2018</p>
                  <Tag color="#ff21d6">Business</Tag>
                  <Tag color="#2db7f5">Pasir Ris</Tag>
                </Card>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <a>
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Weather2Hot</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event7.avif" />}
                >
                  <p>
                    Raising awareness about climate change and its impacts,
                    Weather2Hot advocates for urgent action to mitigate global
                    warming and protect our planet's future.
                  </p>

                  <p>Members: 300</p>
                  <p>Points: 1450</p>
                  <p>Started Since: September 5, 2017</p>
                  <Tag color="#296dff">Climate</Tag>
                  <Tag color="#2db7f5">Paya Lebar</Tag>
                </Card>
              </a>
            </div>
          </Col>
        </Row>
        <Row gutter={[8, 16]} style={{ paddingBottom: "20px", width: "90vw" }}>
          <Col span={12}>
            <div>
              <a>
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Climate Champion</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event8.jpg" />}
                >
                  <p>
                    Empowering individuals to become champions for climate
                    action, our league drives initiatives that address
                    environmental challenges and promote sustainable solutions.
                  </p>

                  <p>Members: 200</p>
                  <p>Points: 1100</p>
                  <p>Started Since: April 30, 2016</p>
                  <Tag color="#296dff">Climate</Tag>
                  <Tag color="#2db7f5">Hougang</Tag>
                </Card>
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <a>
                <Card
                  title={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>Garden By The Bay</div>
                      <img
                        src="/rightarrow.png"
                        width="17"
                        height="17"
                        alt=""
                      />
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event8.jpg" />}
                >
                  <p>
                    Inspired by Singapore's iconic Gardens by the Bay, our
                    league cultivates a community committed to preserving
                    nature's beauty and biodiversity through conservation
                    efforts.
                  </p>

                  <p>Members: 150</p>
                  <p>Points: 800</p>
                  <p>Started Since: December 12, 2015</p>
                  <Tag color="#36a315">Singapore</Tag>
                </Card>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
