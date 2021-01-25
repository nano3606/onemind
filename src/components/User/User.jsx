import React from "react";
import usersSource from "../../utils/users.json";
import { Card, Row, Col } from "antd";
import * as MdiIcon from "mdi-react";

class User extends React.Component {
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

  render() {
    const { selectedPet } = this.props;
    const usersWithSelectedPet = usersSource.filter((user) => {
      return user.animal === selectedPet && user.state === "active";
    });
    usersWithSelectedPet.sort(this.compare);
    return (
      <Row>
        {usersWithSelectedPet.length > 0 &&
          usersWithSelectedPet.map(
            (user, index) =>
              index < 10 && (
                <Col xs={24} sm={12}>
                  <Card>
                    <Row className="mb-3" justify="start" align="middle">
                      <MdiIcon.AccountCircleIcon
                        style={{ color: "darkblue" }}
                        className="mr-2"
                      />
                      {user.name}
                    </Row>
                    <Row justify="start" align="middle">
                      <MdiIcon.StarIcon
                        style={{ color: "gold" }}
                        className="mr-2"
                      />
                      {user.points}
                      <MdiIcon.PawIcon className="mr-2 ml-5" />
                      {user.race}
                    </Row>
                  </Card>
                </Col>
              )
          )}
        {usersWithSelectedPet.length === 0 && <Card>Select your pet</Card>}
      </Row>
    );
  }
}

export default User;
