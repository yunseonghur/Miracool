import React from "react"
import "./Services.css";

import ImageGallery from "../components/ImageGallery.js";

import fanCoil1 from "../assets/fancoil_1.jpg";
import fanCoil2 from "../assets/fancoil_2.jpg";
import fanCoil3 from "../assets/fancoil_3.jpg";
import fanCoil4 from "../assets/fancoil_4.jpg";
import rtu1 from "../assets/rtu_1.jpg";
import rtu2 from "../assets/rtu_2.jpg";
import rtu3 from "../assets/rtu_3.jpg";
import rtu4 from "../assets/rtu_4.jpg";
import rtu5 from "../assets/rtu_5.jpg";
import heatpump1 from "../assets/c_heatpump_1.jpg";
import heatpump2 from "../assets/c_heatpump_2.jpg";
import heatpump3 from "../assets/c_heatpump_3.jpg";
import heatpump4 from "../assets/c_heatpump_4.jpg";
import heatpump5 from "../assets/c_heatpump_5.jpg";
import heatpump6 from "../assets/c_heatpump_6.jpg";
import exhaustFan1 from "../assets/c_exhaustfan_1.jpg";
import exhaustFan2 from "../assets/c_exhaustfan_2.jpg";
import duct1 from "../assets/c_duct_1.jpg";
import duct2 from "../assets/c_duct_2.jpg";
import walkInCooler1 from "../assets/c_cooler_1.jpg";
import walkInCooler2 from "../assets/c_cooler_2.jpg";
import walkInCooler3 from "../assets/c_cooler_3.jpg";

import centralDucted1 from "../assets/r_duct_1.jpg";
import centralDucted2 from "../assets/r_duct_2.jpg";
import centralDucted3 from "../assets/r_duct_3.jpg";
import centralDucted4 from "../assets/r_duct_4.jpg";
import miniSplit1 from "../assets/r_minisplit_1.jpg";
import miniSplit2 from "../assets/r_minisplit_2.jpg";
import miniSplit3 from "../assets/r_minisplit_3.jpg";
import miniSplit4 from "../assets/r_minisplit_4.jpg";
import miniSplit5 from "../assets/r_minisplit_5.jpg";
import miniSplit6 from "../assets/r_minisplit_6.jpg";
import miniSplit7 from "../assets/r_minisplit_7.jpg";
import miniSplit8 from "../assets/r_minisplit_8.jpg";
import miniSplit9 from "../assets/r_minisplit_9.jpg";
import furnace1 from "../assets/r_furnace_1.jpg";
import furnace2 from "../assets/r_furnace_2.jpg";
import furnace3 from "../assets/r_furnace_3.jpg";
import furnace4 from "../assets/r_furnace_4.jpg";
import furnace5 from "../assets/r_furnace_5.jpg";
import boiler1 from "../assets/r_boiler_1.jpg";
import boiler2 from "../assets/r_boiler_2.jpg";


export default function Services() {
  return (
    <div className="container services-wrapper">

      <div className="section">
        <h2 className="title">Commercial</h2>
        {CustomGallery(commServices)}
      </div>

       <div className="section">
        <h2 className="title">Residential</h2>
        {CustomGallery(resiServices)}
      </div>
    </div>
  );
}

function CustomGallery(data) {
  const listItems = data.map((item) => {
      return (
        <>
        <h4 className="subtitle text-center" style={{ backgroundColor: "#CEDAED", lineHeight: "2em"}}>{item.name}</h4>
        {ImageGallery(item.collection)}
        </>
      );
  });
  return <div>{listItems}</div>;
}

// const images = ["https://picsum.photos/1500/2000"];

// const commImages = [  
//   { name: "Fan Coil", collection: ["https://ibb.co/kJhmTYk", "https://ibb.co/xfV0NrQ", "https://ibb.co/F33G1zH", "https://ibb.co/McLt9xB"] },
//   { name: "RTU", collection: ["https://ibb.co/CBMWg64", "https://ibb.co/xsM67SN", "https://ibb.co/G2rZ7jC", "https://ibb.co/w7WW8t2", "https://ibb.co/cK5db7P"] },
//   { name: "Heat Pump (Air / Water)", collection: ["https://ibb.co/vQqZDzR", "https://ibb.co/DrrshVQ", "https://ibb.co/PDmwGyR", "https://ibb.co/fNTsJ65", "https://ibb.co/GFhyszr", "https://ibb.co/0qs1Yjw"] },
//   { name: "Exhaust Fan", collection: ["https://ibb.co/fddbXsx", "https://ibb.co/px0m7kf"] },
//   { name: "Duct", collection: ["https://ibb.co/rdC3T6f", "https://ibb.co/mJJDcrT"] },
//   { name: "Walk-in Cooler / Freezer", collection: ["https://ibb.co/9bcZtjq", "https://ibb.co/bvfmnQy", "https://ibb.co/278zdXz"] }
// ]

// https://ibb.co/hFS7H5r
// https://ibb.co/BrSFCjx
// https://ibb.co/rGpWThy
// https://ibb.co/hXKBrQs
// https://ibb.co/JK8LVP6
// https://ibb.co/k66xd99
// https://ibb.co/y82Dz9f
// https://ibb.co/xzG6wf0
// https://ibb.co/1XksNGt
// https://ibb.co/C9zMpHg
// https://ibb.co/rtTy5w9
// https://ibb.co/kyLSX25
// https://ibb.co/fYQCJ8F
// https://ibb.co/FBSQM3F
// https://ibb.co/59x5B6d
// https://ibb.co/JqMMXvh
// https://ibb.co/HKPyysZ
// https://ibb.co/JqSvNdj
// https://ibb.co/RSfJqzt
// https://ibb.co/9nKxS1X

const commServices = [
  { name: "Fan Coil", collection: [
    fanCoil1, fanCoil2, fanCoil3, fanCoil4
  ] },
  { name: "RTU", collection: [
    rtu1, rtu4, rtu5, rtu3, rtu2
  ] },
  { name: "Heat Pump (Air / Water)", collection: [
    heatpump1, heatpump2, heatpump3, heatpump4, heatpump5, heatpump6
  ] },
  { name: "Exhaust Fan", collection: [
    exhaustFan1, exhaustFan2
  ] },
  { name: "Duct", collection: [
    duct1, duct2
  ] },
  { name: "Walk-in Cooler / Freezer", collection: [
    walkInCooler1, walkInCooler2, walkInCooler3
  ] }
];

const resiServices = [
  { name: "Central Duct", collection: [
    centralDucted1, centralDucted2, centralDucted3, centralDucted4
  ] },
  { name: "Mini Split", collection: [
    miniSplit1, miniSplit2, miniSplit3, miniSplit4, miniSplit5, miniSplit6, miniSplit7, miniSplit8, miniSplit9
  ] },
  { name: "Furnace", collection: [
    furnace1, furnace2, furnace3, furnace4, furnace5
  ] },
  { name: "Boiler", collection: [
    boiler1, boiler2
  ] }
];


