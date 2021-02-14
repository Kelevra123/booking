import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import img1 from './img/3.jpg'
import img2 from './img/8.jpg'
import img3 from './img/cube.png'


const HiddenSection = () => {
    return (
        <>
            <section className='hidden-section'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="section-title text-align_left">
                                <h4>Our story</h4>
                                <h2>Few words about us</h2>
                                <div className="dots-separator fl-wrap"></div>
                                <div className="text-block ">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis
                                        et quasi architecto beatae vitae dicta sunt.
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                        laboriosam, nisi ut aliquid ex ea commodi consequatur.
                                    </p>
                                    <p> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                        molestiae consequatur.</p>
                                    <a href="menu.html" className="btn fl-btn">Explore Our Menu<i
                                        className="fal fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                                <div className="image-collge-wrap fl-wrap">
                                    <div className="main-iamge">
                                        <img style={{width: '100%', height: "auto", verticalAlign: "middle"}} src={img1} alt=""/>
                                    </div>
                                    <div className="images-collage-item"
                                         data-position-left="68" data-position-top="-15" data-zindex="2"
                                         data-opacity="1.0"><img className='img-fluid' src={img2} alt=""/></div>

                                </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HiddenSection
