import React, {useState, useRef} from "react"
import "./ContactUs.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';

import iconHours from "../assets/time.png";
import iconPhone from "../assets/telephone.png";
import iconMail from "../assets/mail.png";
// import iconVisa from "../assets/icon-visa.png";
// import iconMasterCard from "../assets/icon-mastercard.png";

export default function ContactUs() {  
  return (
    <div className="container contactus-wrapper">
      
      {/* <h1>Contact Us</h1> */}

    <div className="row">
    
      <div className="col-md-6 contact-info">
        <div className="col-12 mb-3">
          <h2 className="mb-3">Our Contact Info</h2>
          <div className="info-group">
            <img src={iconPhone} alt="icon-phone"></img>
            <p>
              PHONE: <br />
              778-689-5531
            </p>
          </div>

          <div className="info-group">
            <img src={iconMail} alt="icon-email"></img>
            <p>
              EMAIL: <br />
              miracoolhvac@gmail.com
            </p>
          </div>

          <div className="info-group">
            <img src={iconHours} alt="icon-hours"></img>
            <p>
              HOURS: <br />
              Mon - Fri 8:00 AM - 5:00 PM <br/>
              <span className="red-text"><b>Emergency services availlable</b></span>
            </p>
          </div>

          <hr className="my-4" width="50px" />

          <h4>Service Location</h4>
          <p>The entire Lower Mainland</p>  

        </div>

        <hr className="my-4" width="50px" />

        {/* 

        <div className="col-12 mb-3">
          <h3>Methods of Payment</h3>
          <img src={iconVisa} alt="Visa" height="100"></img>
          <img src={iconMasterCard} alt="Master Card" height="100"></img>
        </div> */}
        
      </div>


      <div className="col-md-6 contact-form">
        <div className="mb-3">
          <h2>GET A FREE QUOTE</h2>
        </div>
        <CustomForm></CustomForm>
        
      </div>
    </div>


    </div>
  );
}


function CustomForm() {
  const mcform = useRef();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })

    if (!!errors[field]){
      setErrors({
        ...errors,
        [field]: null
      })
    }
  }
  const validateForm = () => {
    const { inputFirstName, inputLastName, inputEmail, inputPhone, inputMessage } = form
    const newErrors = {}
    const emailPattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    const phonePattern = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
    if (!inputFirstName || inputFirstName === "") {
      newErrors.inputFirstName = "First name is required."
    }
    if (!inputLastName || inputLastName === "") {
      newErrors.inputLastName = "Last name is required."
    }
    if (!inputEmail || inputEmail === "") {
      newErrors.inputEmail = "Email is required."
    } else if (!emailPattern.test(inputEmail)) { 
      newErrors.inputEmail = "Valid email is required."
    }
    if (!inputPhone || inputPhone === "") {
      newErrors.inputPhone = "Phone number is required."
    } else if (!phonePattern.test(inputPhone)) { 
      newErrors.inputPhone = "Valid phone number is required."
    }
    if (!inputMessage || inputMessage === "") {
      newErrors.inputMessage = "Message is required."
    } else if (inputMessage.length < 10) {
      newErrors.inputMessage = "Message is too short."
    }
    return newErrors;
  }
  const handleSubmit = e => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      console.log("form submitted")
      console.log(form)
      sendEmail(e);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, mcform.current, {
        publicKey: process.env.REACT_APP_EMAILJS_USER_ID,
      })
      .then(
        () => {
          console.log('SUCCESS!', mcform);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <Form ref={mcform}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="inputFirstName">
          <Form.Label>First Name <span className="mandatory">*</span></Form.Label>
          <Form.Control type="text" placeholder="" name="from_name"
                        value={form.inputFirstName}
                        onChange={e => setField("inputFirstName", e.target.value)} 
                        isInvalid={!!errors.inputFirstName} />
          <Form.Control.Feedback type="invalid">{errors.inputFirstName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="inputLastName">
          <Form.Label>Last Name <span className="mandatory">*</span></Form.Label>
          <Form.Control type="text" placeholder="" name="inputLastName"
                        value={form.inputLastName}
                        onChange={e => setField("inputLastName", e.target.value)} 
                        isInvalid={!!errors.inputLastName} />
          <Form.Control.Feedback type="invalid">{errors.inputLastName}</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="inputEmail">
        <Form.Label>Email <span className="mandatory">*</span></Form.Label>
        <Form.Control type="email" placeholder="" name="inputEmail"
                      value={form.inputEmail}
                      onChange={e => setField("inputEmail", e.target.value)} 
                      isInvalid={!!errors.inputEmail} />
        <Form.Control.Feedback type="invalid">{errors.inputEmail}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="inputPhone">
        <Form.Label>Phone Number <span className="mandatory">*</span></Form.Label>
        <Form.Control placeholder="" name="inputPhone"
                      value={form.inputPhone}
                      onChange={e => setField("inputPhone", e.target.value)} 
                      isInvalid={!!errors.inputPhone} />
        <Form.Control.Feedback type="invalid">{errors.inputPhone}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="inputAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="" name="inputAddress" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inputMessage">
        <Form.Label>Message <span className="mandatory">*</span></Form.Label>
        <Form.Control as="textarea" rows={6} name="message"
                      value={form.inputMessage}
                      onChange={e => setField("inputMessage", e.target.value)} 
                      isInvalid={!!errors.inputMessage} />
        <Form.Control.Feedback type="invalid">{errors.inputMessage}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="submit">
        <Button onClick={handleSubmit} className="w-100 btn btn-lg mb-4 submit-btn" type="submit">Submit</Button>
      </Form.Group>
    </Form>

    // <form className="needs-validation" novalidate="">
    //   <div className="row g-3">
    //     <div className="col-sm-6">
    //       <label for="inputFirstName" className="form-label">First Name <span className="mandatory">*</span></label>
    //       <input type="text" className="form-control" id="inputFirstName" aria-label="First name" placeholder="" required="true" 
    //             value={form.inputFirstName}
    //             onChange={e => setField("inputFirstName", e.target.value)} 
    //             isInvalid={errors.inputFirstName} />
    //       <div className="invalid-feedback">
    //         Valid first name is required.
    //       </div>
    //     </div>

    //     <div className="col-sm-6">
    //       <label for="inputLastName" className="form-label">Last Name <span className="mandatory">*</span></label>
    //       <input type="text" className="form-control" id="inputLastName" aria-label="Last name" placeholder="" value="" required="" />
    //       <div className="invalid-feedback">
    //         Valid last name is required.
    //       </div>
    //     </div>

    //     <div className="col-12">
    //     <label for="inputPhone" className="form-label">Phone Number <span className="mandatory">*</span></label>
    //     <input type="phone" className="form-control" id="inputPhone" placeholder="" />
    //       <div className="invalid-feedback">
    //         Please enter a valid phone number.
    //       </div>
    //     </div>

    //     <div className="col-12">
    //     <label for="inputEmail" className="form-label">Email</label>
    //     <input type="email" className="form-control" id="inputEmail" placeholder="" />
    //     </div>

    //     <div className="col-12">
    //       <label for="inputAddress" className="form-label">Address</label>
    //       <input type="text" className="form-control" id="inputAddress" placeholder="" required="" />
    //     </div>

    //     <div className="col-12">
    //       <label for="inputMessage" className="form-label">Message <span className="mandatory">*</span></label>
    //       <textarea className="form-control" id="inputMessage" rows="6"></textarea>
    //       <div className="invalid-feedback">
    //         Valid message is required.
    //       </div>
    //     </div>

    //   </div>

    //   <div className="my-4" />

    //   <button className="w-100 btn btn-lg mb-4 submit-btn" type="submit">Submit</button>
    // </form>
  )
}