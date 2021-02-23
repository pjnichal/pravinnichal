import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import ProfileImg from '../../assets/profile.jpg'
import Button from 'react-bootstrap/Button'
import './aboutstyle.css'

export const About = () => {
    return (
        <div id='about'>
            <div className="about">          
              <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/*Profile*/}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={ProfileImg} thumbnail fluid />
                        </Row>
                    </Col>
                    {/*About*/}
                    <Col xs={12} md={6}>
                    <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Pravin Nichal</strong>
                <br />A passionate programmer &amp; a engineering student.
                <br/> I am an intermediate Full Stack Android Developer learning new things. I create native android apps using Flutter and Android Studio. 
                <br />I am getting started with web development to improve my skills overall.
                <br />I have completed my diploma in Computer Engineering. <br /> Now i am pursing B.E in Information Technology.
                <br />Apart from programming I also love to play games such as Valorant.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
              
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/pravin_nichal/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                            Instagram
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/pjnichal" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/pravin-nichal-93080b1b4" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>

    )
}
