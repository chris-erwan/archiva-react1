import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="archiva-footer">
      <Container>
        <Row className="align-items-start py-5">
          {/* Logo + contact */}
          <Col md={4} className="mb-4 mb-md-0">
            <img
              src="/assets/images/logo.png"
              alt="Archiva"
              height="48"
              className="mb-3"
              onError={(e) => (e.target.style.display = "none")}
            />
            <address className="footer-contact mb-0">
              <p className="mb-1">info@archiva.com</p>
              <p className="mb-1">+237 600 000 000</p>
              <p className="mb-0">Yassa, Douala/Cameroun</p>
            </address>
          </Col>

          {/* Navigation */}
          <Col md={4} className="mb-4 mb-md-0">
            <ul className="list-unstyled footer-nav mb-0">
              <li>
                <Link to="/" className="footer-nav-link fw-bold">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/cers" className="footer-nav-link">
                  CERs
                </Link>
              </li>
              <li>
                <Link to="/favoris" className="footer-nav-link">
                  Mes CERs favoris
                </Link>
              </li>
              <li>
                <Link to="/mes-cers" className="footer-nav-link">
                  Gestion de CER
                </Link>
              </li>
            </ul>
          </Col>

          {/* Réseaux sociaux */}
          <Col md={4}>
            <h6 className="footer-social-title">Social Profiles</h6>
            <div className="d-flex gap-2">
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                f
              </a>
              <a href="#" className="footer-social-btn" aria-label="Twitter">
                t
              </a>
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                in
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p className="text-center text-muted small mb-0 py-3">
            &copy; 2024 Archiva. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
