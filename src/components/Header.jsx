import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Header() {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-0">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/images/logo.png"
            alt="Archiva"
            height="40"
            className="d-inline-block align-top me-2"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          Archiva
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvas-navbar" onClick={() => setShow(true)} />

        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="end"
          show={show}
          onHide={() => setShow(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas-navbar-label">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/" end onClick={() => setShow(false)}>
                Accueil
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cers" onClick={() => setShow(false)}>
                CERs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/favoris" onClick={() => setShow(false)}>
                Mes CER Favoris
              </Nav.Link>
              <Nav.Link as={NavLink} to="/mes-cers" onClick={() => setShow(false)}>
                Gestion de CER
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link disabled className="text-info">
                    {user.name || user.email}
                  </Nav.Link>
                  <Button variant="outline-light" size="sm" onClick={handleLogout} className="ms-2">
                    Déconnexion
                  </Button>
                </>
              ) : (
                <Button
                  as={Link}
                  to="/connexion"
                  variant="primary"
                  size="sm"
                  className="ms-2"
                  onClick={() => setShow(false)}
                >
                  Connexion
                </Button>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
