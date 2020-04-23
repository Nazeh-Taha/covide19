import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";
import blue from "./images/cases.jpg";
import red from "./images/Coronavirus.png";
import green from "./images/green.jpg";
import {ReactNavbar} from 'react-responsive-animate-navbar'

import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "90vh",
    latitude: 30.7577,
    longitude: -20.4376,
    zoom: 1,
  });

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((res) => {
        setAllData(res[0].data);
        setAllCountries(res[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const date = new Date(parseInt(allData.updated));
  const updated = date.toString();
 
  RegExp.quote = function (search) {
    return search.replace(/([.?*+^$[\]\\(){}|-])/gi, "\\$1");
  };
  const regex = new RegExp(RegExp.quote(search), "gi");
  var searchItems = allCountries.filter(function (item) {
    if (allCountries) {
      if (search) {

        return item.country.match(regex);
      } else {
        // return allCountries;
      }
    }
  });
  const mapTag = allCountries.map((tag) => {
    return (
      <>
      
        <Marker
          latitude={tag.countryInfo.lat}
          longitude={tag.countryInfo.long}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img
            src={tag.countryInfo.flag}
            alt="img"
            style={{ height: "20px", width: "20px" ,borderRadius: "50%"}}
          />
          <p className="case">{tag.cases}</p>
        </Marker>
      </>
    );
  });
  const countries = searchItems.map((data) => {
    return (
      <>
        <Card>
          <Card.Img variant="top" src={data.countryInfo.flag} />
          <Card.Body>
            <Card.Title>{data.country}</Card.Title>
            <Card.Text>Cases: {data.cases}</Card.Text>
            <Card.Text>Today Cases: {data.todayCases}</Card.Text>
            <Card.Text>Deaths: {data.deaths}</Card.Text>
            <Card.Text>Today Deaths: {data.todayDeaths}</Card.Text>
            <Card.Text>Recovered: {data.recovered}</Card.Text>
            <Card.Text>Active: {data.active}</Card.Text>
            <Card.Text>Critical: {data.critical}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <div>
     <ReactNavbar 
     color="#c73838"
     logo="https://www.knightdesign.com.au/wp-content/uploads/2020/03/COVID-19_white.svg"
     menu={[
      { name: "HOME", to: "/" },
      { name: "ARTICLES", to: "/articles" },
      { name: "ABOUT ME", to: "/about" },
      { name: "CONTACT", to: "/contact" },
    ]}/>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={red}
      alt="First slide"
      style={{height:"50vh"}}
    />
    <Carousel.Caption>
      <h3>Today Deaths</h3>
      <h6 >{allData.todayDeaths}</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={green}
      alt="Third slide"
      style={{height:"50vh"}}
    />

    <Carousel.Caption>
      <h3>Tests</h3>
      <h6 >{allData.tests}</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={blue}
      alt="Third slide"
      style={{height:"50vh"}}
    />

    <Carousel.Caption>
      <h3>Today Cases</h3>
      <h6 >{allData.todayCases} </h6>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Container>
        <CardDeck style={{ marginTop: "30px" }}>
          <Card bg="danger" text="dark" className="text-center">
            <Card.Body>
              <Card.Title>Death</Card.Title>
              <Card.Text>{allData.deaths}</Card.Text>
            </Card.Body>
            <Card.Footer>Last updated: {updated} </Card.Footer>
          </Card>
          <Card bg="warning" text="dark" className="text-center">
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text>{allData.cases}</Card.Text>
            </Card.Body>
            <Card.Footer>Last updated: {updated} </Card.Footer>
          </Card>
          <Card bg="success" text="dark" className="text-center">
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>{allData.recovered}</Card.Text>
            </Card.Body>
            <Card.Footer>Last updated: {updated} </Card.Footer>
          </Card>
        </CardDeck>
        <Form>
          <Form.Group controlId="formGroupEmail" style={{ marginTop: "30px" }}>
            <Form.Label>Country Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country Name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Form>
        <CardColumns style={{ marginTop: "30px" }}>{countries}</CardColumns>
        <div style={{ height: "100vh", width: "100%" }}>
          <ReactMapGL
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken="pk.eyJ1IjoibmF6ZWgyMDAiLCJhIjoiY2s4dXpzY2h0MDUxODNobnpub3hrZW01eSJ9.CjIwcSToozJAr6Zk1gbA7A"
            {...viewport}
            onViewportChange={setViewport}
          >
            {mapTag}
          </ReactMapGL>
        </div>
      </Container>
     
    </div>
  );
}

export default App;
