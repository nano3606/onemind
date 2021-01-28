import React, { Component } from "react";
import { Layout, Select } from "antd";
import User from "./components/User/User";
import CustomCarousel from './components/Carousel/Carousel';
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
    animals: [],
    users: usersSource,
  };
  componentDidMount() {
    let auxAnimals = [];
    usersSource.map((user) => {
      auxAnimals = [...auxAnimals, ...user.animals];
      return null;
    });
    this.setState({
      animals: [...new Set(auxAnimals)],
    });
  }
  handlePetChange = (value) => {
    this.setState({
      selectedPet: value,
    });
  };

  handleDeleteUSer = userToDelete => {
    const { users } = this.state
    const filteredUsers = users.filter( user => user.id !== userToDelete.id)
    this.setState({
      users: filteredUsers
    })
  }
  render() {
    const images= [carousel1, carousel2]
    const { selectedPet, animals, users } = this.state;
    return (
      <div className="App">
        <Layout>
          <Content>
            <CustomCarousel images={images} />
            <Row className="p-5">
              <Col xs={24} sm={6}>
                <div className="px-2 pb-2 flex-row flex-align-center flex-justify-center">
                  <MdiIcon.PawIcon className="mr-2" />
                  <Select
                    onChange={this.handlePetChange}
                    showSearch
                    placeholder="Select your animal"
                    className="w-100"
                    optionLabelProp="label"
                  >
                    {animals.map((animal) => (
                      <Select.Option label={animal.toUpperCase()} key={animal}>{animal}</Select.Option>
                    ))}
                  </Select>
                </div>
              </Col>
              <Col xs={24} sm={18}>
                <User users={users} selectedPet={selectedPet} deleteUSer={(user) => this.handleDeleteUSer.bind(this, user)} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
