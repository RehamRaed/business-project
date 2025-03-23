import React from "react";
import { Container ,Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/Blog.css'
import blog from '../../assest/hepb9638.png'
function Blog(){
    return(
        <section id="blog_section">
            <Container>
        <Row className="blog_row">
            <Col  lg={5}>
            <h2>we help business launch , grow and succeed</h2>
            <p>
               Our team offers the expertise and solutions to help your business thrive in a competitive market. From strategic planning to growth, we ensure your success by providing tailored services and innovative approaches to meet your needs.
            </p>
            <div className="btn-wrapper">
              <Link className="btn" to="/">
                Get Started
              </Link>
            </div>
            </Col>
            <Col  lg={7} className="sec_col">
            <div className="img_style"></div>
                <div className="img_container"> 
                     <img src={blog} alt="blog_img" />
                </div>
            </Col>
        </Row>
        </Container>
        </section>
    )
}
export default Blog;