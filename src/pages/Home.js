import React from "react"
import "./Home.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { HashLink as Link } from 'react-router-hash-link';

import fanCoil from "../assets/fancoil_4.jpg";
import rtu from "../assets/rtu_4_crop.jpg";
import heatpump from "../assets/c_heatpump_2_crop.jpg";
import exhaustFan from "../assets/c_exhaustfan_1_crop.jpg";
import duct from "../assets/c_duct_1_crop.jpg";
import walkInCooler from "../assets/c_cooler_1_crop.jpg";
import centralDucted from "../assets/r_duct_3_crop.jpg";
import miniSplit from "../assets/r_minisplit_6_crop.jpg";
import furnace from "../assets/r_furnace_2_crop.jpg";
import boiler from "../assets/r_boiler_1.jpg";


export default function Home() {
  return (
  <div className="home-wrapper">
    <div className="home-bg-img"></div>
    <div className="home-bg-text">
      <p className="home-title">Experts at Service/Repair, Preventative Maintenance, Quality Installation</p>
    </div>
    
    <div className="home-content">
      <CustomSection subtitle="Commercial" displayObjs={commServices} itemPerRow={3} />
      <CustomSection subtitle="Residential" displayObjs={resiServices} itemPerRow={4} />
   
      <h2 className="middle-text">Now serving the entire Lower Mainland</h2> 

      <div className="text-center youtube"><a href="https://www.youtube.com/channel/UCzGkMYknFTq0vT0rHw_tp5w"><img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>&nbsp;<h4 className="youtube-name">캐나다 미라쿨</h4></a></div>
    </div>

  </div>
  );
}

const getSectionContent = (displayObjs, itemPerRow) => {
  let content = [];
  let rowContent = [];
  let counter = 0;
  for (let item of displayObjs) {    
    rowContent.push(<Col md style={{ padding: '12px' }}><ServiceCard serviceId={item.id} serviceName={item.name} serviceIcon={item.imgSrc} /></Col>);
    counter++;

    if (counter === itemPerRow){
      content.push(<Row>{rowContent}</Row>);
      rowContent = []
      counter = 0;
    }
  }
  return content;
};


function CustomSection({ subtitle, displayObjs, itemPerRow }) {

  return (
    <div className="section">
      <Container>
        <h2 className="subtitle">{subtitle}</h2>
        {getSectionContent(displayObjs, itemPerRow)}
      </Container>
    </div>
  )
}

const ServiceCard = (props) => {
  const linkTo = "/services#" + props.serviceId;
  return (
  <>
    <Card>
      <Link className="serviceLink" to={linkTo}>
        <Card.Img className="serviceImage" variant="top" src={props.serviceIcon} />
        <Card.Body>
          <Card.Title className="text-center">{props.serviceName}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  </>

  );
}

const commServices = [
  { id: "cs1", name: "Fan Coil", imgSrc: fanCoil },
  { id: "cs2", name: "RTU", imgSrc: rtu },
  { id: "cs3", name: "Heat Pump (Air / Water)", imgSrc: heatpump },
  { id: "cs4", name: "Exhaust Fan", imgSrc: exhaustFan },
  { id: "cs5", name: "Duct", imgSrc: duct },
  { id: "cs6", name: "Walk-in Cooler / Freezer", imgSrc: walkInCooler }
];

const resiServices = [
  { id: "rs1", name: "Central Duct", imgSrc: centralDucted },
  { id: "rs2", name: "Mini Split", imgSrc: miniSplit },
  { id: "rs3", name: "Furnace", imgSrc: furnace },
  { id: "rs4", name: "Boiler", imgSrc: boiler }
];