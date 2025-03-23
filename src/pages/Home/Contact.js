import React from "react";
import { Container ,Col ,Row} from "react-bootstrap";
import group from '../../assest/tiebhoch.png'
import '../../styles/Contact.css'
import { Link } from "react-scroll";

const inputs = [
    { placeholder: "Your Name...", type: "text" },
    { placeholder: "Your Phone...", type: "tel" },
    { placeholder: "Your Email...", type: "email" },
    { placeholder: "Your Message...", type:"textarea"}
  ];
  
function Contact(){
    return(
        <section id="contact_section">
            <Container>
                <Row className="row">
                    <Col lg={7} >
                    <div className="img_container">
                    
                        <img src={group} alt="contact_img" />
                    </div>
                    </Col>
                    <Col lg={5}>
                    <h1>Contact Us</h1>
                    <div>
                        {inputs.map((input, index) => (
                               <input key={index} className="custom-input" autocomplete="off" {...input} />
                         ))}
                    </div>
                    <div className="btn-wrapper">
                      <Link className="btn" to="/">
                      Submit
                      </Link>
              </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact;