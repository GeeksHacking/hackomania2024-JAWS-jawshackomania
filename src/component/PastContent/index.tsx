import { Card, Col, Divider, Row, Select, Tag } from "antd";
import { FC } from "react";

export const PastContent: FC = () => {
  const cardStyle = {
    boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.2)",
    fontSize: "14px",
    fontWeight: "600",
    height: "350px",
    opacity: "0.5",
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "15px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 700,
          fontSize: "18px",
          borderRadius: "20px",
          gap: "10px",
        }}
      >
        <div>Filter by:</div>
        <div>
          <Select
            showSearch
            placeholder="Select A Year"
            optionFilterProp="children"
            filterOption={filterOption}
            options={[
              {
                value: "2024",
                label: "2024",
              },
              {
                value: "2023",
                label: "2023",
              },
              {
                value: "2022",
                label: "2022",
              },
              {
                value: "2021",
                label: "2021",
              },
              {
                value: "2020",
                label: "2020",
              },
            ]}
          />
        </div>
      </div>
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
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event10.jpg" />}
                >
                  <p>Started Since: March 15, 2019</p>
                  <p>Closed On: June 15, 2023</p>
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
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event3.png" />}
                >
                  <p>Started Since: November 23, 2020</p>
                  <p>Closed On: June 15, 2023</p>
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
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event4.jpg" />}
                >
                  <p>Started Since: July 10, 2018</p>
                  <p>Closed On: June 15, 2023</p>
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
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event7.avif" />}
                >
                  <p>Started Since: September 5, 2017</p>
                  <p>Closed On: June 15, 2023</p>
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
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event8.jpg" />}
                >
                  <p>Started Since: April 30, 2016</p>
                  <p>Closed On: June 15, 2023</p>
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
                    </div>
                  }
                  bordered={false}
                  style={cardStyle}
                  cover={<img alt="example" src="event8.jpg" />}
                >
                  <p>Started Since: December 12, 2015</p>
                  <p>Closed On: June 15, 2023</p>
                </Card>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
