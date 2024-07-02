import React from "react"
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      {/* <div className="container-fluid banner">
        <h1>About Us</h1>
      </div> */}
      <div className="container text-center about-us-wrapper">
        <div className="section">
          <h1>Highly-skilled HVAC/Refrigeration Technicians</h1><br/>
          <h3>Miracool Air Conditioning has developed knowledgeable highly-trained technicians with a wide coverage of skill-sets delivering the best value to our customer base.</h3>
        </div>

        <div className="section">
          <p className="license">
            HVAC/R Inter Provincial Red seal : IPSE #K-18-129635 <br/>
            Boiler & Pressure Vessel (Refrigeration) Contractor Licence : LBP0213700 <br/>
            Class B Gas Fitter : CER-003400 <br/>
            Gas Contractor Licence : LGA0213698 <br/>
            Electrical FSR (Class B-R) : CER-004490 <br/>
            HRAI : BC1128688 <br/>
            HPCN Membership <br/>
            MHPCR Membership (City of Vancouver)
          </p>
        </div>
        <hr className="divider" />
        <div className="section">
          <h2>$ 5M General Liability Insurance</h2><br/>
          <h3>Licensed / Insured / Bonded </h3>
        </div>
      </div>
    </>
  );
}