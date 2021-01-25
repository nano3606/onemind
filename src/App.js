import React, { Component } from "react";
import { Layout, Carousel, Select } from "antd";
import User from "./components/User/User";
import { Content } from "antd/lib/layout/layout";
import { Row, Col } from "antd";
//Resources
import carousel1 from "./utils/carousel/carusel1.jpg";
import carousel2 from "./utils/carousel/carusel2.jpg";
import usersSource from "./utils/users.json";
import * as MdiIcon from "mdi-react";
import "antd/dist/antd.css";
import "./App.css";
class App extends Component {
  state = {
    selectedPet: null,
  };

  handlePetChange = (value) => {
    this.setState({
      selectedPet: value,
    });
  };
  render() {
    const contentStyle = {
      height: "100%",
      color: "#fff",
      lineHeight: "100%",
      textAlign: "center",
      background: "#364d79",
    };

    const { selectedPet } = this.state;
    return (
      <div className="App">
        <Layout>
          <Content>
            <Carousel autoplay effect="fade">
              <div>
                <h3 style={contentStyle}>
                  <img src={carousel1} alt="Carusel1"></img>
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img src={carousel2} alt="Carusel1"></img>
                </h3>
              </div>
            </Carousel>
            <Row className="p-5">
              <Col xs={24} sm={6}>
                <Row>
                  <Col
                    xs={24}
                    sm={24}
                    className="flex-row flex-align-center flex-justify-center"
                  >
                    <MdiIcon.PawIcon className="mr-2" />
                    <Select
                      onChange={this.handlePetChange}
                      showSearch
                      placeholder="Select your pet"
                      className="w-150"
                    >
                      <Select.Option key="dog">Dog</Select.Option>
                      <Select.Option key="cat">Cat</Select.Option>
                    </Select>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={18}>
                <User selectedPet={selectedPet} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
