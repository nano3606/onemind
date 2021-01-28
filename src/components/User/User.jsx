import React from "react";
import { Card, Row, Col, Button } from "antd";
import * as MdiIcon from "mdi-react";

class User extends React.Component {
  state = {
    numberOfUsers: 10,
    showText: "Show",
    showSymbol: "+",
  };
  compare = (a, b) => {
    const pointsA = a.points;
    const pointsB = b.points;

    let comparison = 0;
    if (pointsA > pointsB) {
      comparison = 1;
    } else if (pointsA < pointsB) {
      comparison = -1;
    }
    return comparison;
  };

  handleShowMore = () => {
    const { numberOfUsers } = this.state;
    this.setState({
      numberOfUsers: numberOfUsers === 10 ? 25 : 10,
      showSymbol: numberOfUsers === 10 ? "-" : "+",
      showText: numberOfUsers === 10 ? "Hide" : "Show",
    });
  };

  render() {
    const { numberOfUsers, showText, showSymbol } = this.state;
    const { selectedPet, users, deleteUSer } = this.props;
    const usersWithSelectedPet = users.filter((user) => {
      return user.animals.includes(selectedPet) && user.isActive;
    });
    usersWithSelectedPet.sort(this.compare);
    return (
      <div>
        <Row>
          {usersWithSelectedPet.length > 0 &&
            usersWithSelectedPet.map(
              (user, index) =>
                index < numberOfUsers && (
                  <Col className="px-2 pb-3" xs={24} sm={8}>
                    <Card>
                      <Row
                        className="mb-3"
                        justify="space-between"
                        align="middle"
                      >
                        <Col>
                          <Row justify="start" align="middle">
                            <MdiIcon.AccountCircleIcon
                              style={{ color: "darkblue" }}
                              className="mr-2"
                            />
                            <span>
                              {user.name.given} {user.name.surname}
                            </span>
                          </Row>
                        </Col>
                        <Col justify="start" align="middle">
                          <Row justify="space-between" align="middle">
                            <span className="mr-2 ml-4">Age:</span>
                            <span className="font-weight-bold">
                              {user.age}{" "}
                            </span>
                          </Row>
                        </Col>
                      </Row>
                      <Row justify="space-between" align="middle">
                        <Col>
                        <Row justify="start" align="middle">
                          <MdiIcon.StarIcon
                            style={{ color: "gold" }}
                            className="mr-2"
                          />
                          {user.points}
                        </Row>
                        </Col>
                        <Col>
                          <Button style={{border: 'none', padding: 0}} onClick={deleteUSer(user)}>
                            <MdiIcon.DeleteIcon style={{ color: "red" }} />
                          </Button>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                )
            )}

          {usersWithSelectedPet.length === 0 && (
            <Col className="px-2" xs={24}>
              <Card>No animal selected</Card>
            </Col>
          )}
        </Row>
        <Row className="mt-4">
          {usersWithSelectedPet.length > 10 && (
            <Col xs={24}>
              <Button type="primary" onClick={this.handleShowMore}>
                <span className="mr-1">{showText}</span>
                <span className="font-weight-bold">{`15 ${showSymbol}`}</span>
              </Button>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default User;
