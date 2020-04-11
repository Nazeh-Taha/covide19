import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from "react-bootstrap/CardDeck";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ReactMapGL, {Marker} from 'react-map-gl';
import axios from "axios";
import blue from "./images/blue.jpg";
import red from "./images/red.jpg";
import green from "./images/green.jpeg";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [allData, setAllData] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '90vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 0
  });

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/all"),
      axios.get("https://corona.lmao.ninja/countries")])
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
  console.log(search);
  RegExp.quote = function(search) {
    return search.replace(/([.?*+^$[\]\\(){}|-])/gi, "\\$1");
  };
  const regex = new RegExp(RegExp.quote(search), 'gi')
  var searchItems = allCountries.filter(function (item) {
    if (allCountries) {
      if (search) {
        return item.country.match(regex);
      }else{
        // return allCountries;
      }
    }

  });
  const countries = searchItems.map( data =>{
    return(<>
    
  <Card >
    <Card.Img variant="top" src= {data.countryInfo.flag} />
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

    </>)
  });
  return (
    <div>
      <Container>
        <CardDeck style={{ marginTop: "30px" }}>
          <Card bg="danger" text="dark" className="text-center">
            <Card.Body>
              <Card.Title>Death</Card.Title>
              <Card.Text>{allData.deaths}</Card.Text>
            </Card.Body>
            <Card.Footer>Last updated {updated} </Card.Footer>
          </Card>
          <Card bg="warning" text="dark" className="text-center">
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text>{allData.cases}</Card.Text>
            </Card.Body>
            <Card.Footer>Last updated {updated} </Card.Footer>
          </Card>
          <Card bg="success" text="dark" className="text-center">
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>{allData.recovered}</Card.Text>
            </Card.Body>
            <Card.Footer>Last updated {updated} </Card.Footer>
          </Card>
        </CardDeck>
        <Form>
  <Form.Group controlId="formGroupEmail" style={{ marginTop: "30px" }}>
    <Form.Label>Country Search</Form.Label>
    <Form.Control type="text" placeholder="Enter Country Name" onChange={e=>setSearch(e.target.value)}/>
  </Form.Group>
</Form>
        <CardColumns style={{ marginTop: "30px" }}>
        {countries}
        </CardColumns>
        <div style={{ height: "100vh", width: "100%" }}>
        <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoibmF6ZWgyMDAiLCJhIjoiY2s4dXpzY2h0MDUxODNobnpub3hrZW01eSJ9.CjIwcSToozJAr6Zk1gbA7A"
      {...viewport}
      onViewportChange={setViewport}
    >
    <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
      <div  style={{background: 'red',height:'10px',width:'10px'}}>
hi
      </div>
      </Marker>
    </ReactMapGL>
        </div>
      </Container>
    </div>
  );
}

export default App;
