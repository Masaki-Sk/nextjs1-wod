'use client';

import { Container, Nav, Row, Col, Image } from 'react-bootstrap';
import { Instagram, Facebook, Twitter, Yelp } from 'react-bootstrap-icons';

const Footer = () => (
  <div className="bg-dark footer mt-auto">
    <Container>
      <Row className="py-3">
        <Col xs={6} className="justify-content-start">
          <Image src="./wod-ko-hana-logo.png" alt="Ko Hana Logo" width="200px" />
          <Row>
            <Nav>
              <Nav.Link href="#">ALOHA@KOHANARUM.COM</Nav.Link>
              <Nav.Link href="#">(808) 649-0830</Nav.Link>
              <Nav.Link href="#">92-1770 Kunia Rd., #227, Kunia, HI 96759, USA</Nav.Link>
            </Nav>
          </Row>
        </Col>
        <Col xs={2} className="justify-content-center" />
        <Col className="rightCol justify-content-end">
          <Row>
            <Nav className="justify-content-end">
              <Nav.Link href="#"><Instagram size="30px" /></Nav.Link>
              <Nav.Link href="#"><Facebook size="30px" /></Nav.Link>
              <Nav.Link href="#"><Twitter size="30px" /></Nav.Link>
              <Nav.Link href="#"><Yelp size="30px" /></Nav.Link>
            </Nav>
          </Row>
          <Row>
            <Nav className="justify-content-end">
              <Nav.Link href="#">TERMS & CONDITIONS</Nav.Link>
              <Nav.Link href="#">PRIVACY POLICY</Nav.Link>
            </Nav>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
