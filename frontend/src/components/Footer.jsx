import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logoWhite from '../assets/logo-white.svg';
import payment from '../assets/credit-cards-footer.png';
import '../assets/styles/footer.css';
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer text-white">
      <Container className="footer-top py-4">
        <Row>
          <Col lg={3} md={4}>
            <LinkContainer to='/'>
              <img src={logoWhite} alt="Logo" width="200" />
            </LinkContainer>
          </Col>
          <Col lg={9} md={8}>
            <div className="footer-newsletter">
              <h4 className="title">
                Subscribe to our Newsletter
                <span>Get all the latest information, Sales and Offers.</span>
              </h4>
              <Form action="#" method="get" target="_blank" className="newsletter-form">
                <Form.Control type="email" placeholder="Email address here..." className="me-2" style={{ width: 'auto', display: 'inline' }} />
                <Button variant="primary">Subscribe</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="footer-middle py-3">
      <Row>
        <Col lg={3} md={6} className="single-footer f-contact">
          <h3>Get In Touch With Us</h3>
          <p className="phone">Phone: +1 (123) 456 7890</p>
          <ul>
            <li><span>Monday-Friday: </span> 9.00 am - 8.00 pm</li>
            <li><span>Saturday: </span> 10.00 am - 6.00 pm</li>
          </ul>
          <p className="mail">
            <a href="mailto:support@shopgrids.com">support@shopgrids.com</a>
          </p>
        </Col>
        <Col lg={3} md={6} className="single-footer our-app">
          <h3>Our Mobile App</h3>
          <ul className="app-btn">
            <li>
                <a href="/#">
                    <AiOutlineApple className="icon"/>
                    <span className="small-title">Download on the</span>
                    <span className="big-title">App Store</span>
                </a>
            </li>
            <li>
                <a href="/#">
                    <IoLogoGooglePlaystore className="icon"/>
                    <span className="small-title">Download on the</span>
                    <span className="big-title">Google Play</span>
                </a>
            </li>
        </ul>
        </Col>
        <Col lg={3} md={6} className="single-footer f-link">
          <h3>Information</h3>
          <ul>
            <li><a href="/#">About Us</a></li>
            <li><a href="/#">Contact Us</a></li>
            <li><a href="/#">Downloads</a></li>
            <li><a href="/#">Sitemap</a></li>
            <li><a href="/#">FAQs Page</a></li>
          </ul>
        </Col>
        <Col lg={3} md={6} className="single-footer f-link">
          <h3>Shop Departments</h3>
          <ul>
            <li><a href="/#">Computers & Accessories</a></li>
            <li><a href="/#">Smartphones & Tablets</a></li>
            <li><a href="/#">Downloads</a></li>
            <li><a href="/#">Cameras, Photo & Video</a></li>
            <li><a href="/#">Headphones</a></li>
          </ul>
        </Col>
      </Row>
      </Container>
      <Container className="footer-bottom py-3">
        <Row className="align-items-center">
          <Col lg={4} className="payment-gateway">
            <span>We Accept:</span>
            <img src={payment} alt="Credit Cards" />
          </Col>
          <Col lg={4} className="copyright">
            <p>Bintian Feng &copy; {currentYear}</p>
          </Col>
          <Col lg={4}>
            <ul className="social">
              <li>
                <span>Follow Us On:</span>
              </li>
              <li><FaFacebookF className='icon'/></li>
              <li><FaXTwitter className='icon'/></li>
              <li><FaInstagram className='icon'/></li>
              <li><FaGoogle className='icon'/></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
