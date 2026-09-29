import { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

/**
 * Page de connexion — design original Archiva (fond dégradé orange + carte blanche).
 */
export default function Login() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message || "Échec de la connexion");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Row className="g-0 align-items-center">
          <Col md={6} className="auth-form-col">
            <h1 className="auth-title">Se connecter</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Entrer votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="auth-input"
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="loginPassword">
                <Form.Label className="fw-semibold">Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Entrer votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="auth-input"
                />
              </Form.Group>
              <div className="text-end mb-3">
                <a href="#" className="auth-link small">
                  Mot de passe oublié ?
                </a>
              </div>
              <Button
                type="submit"
                className="auth-btn w-100"
                disabled={loading}
              >
                {loading ? "Connexion…" : "Se connecter"}
              </Button>
            </Form>
            <p className="text-center mt-4 mb-0 small">
              Vous n&apos;avez pas de compte ?{" "}
              <Link to="/inscription" className="auth-link">
                Créez un nouveau compte
              </Link>
            </p>
          </Col>
          <Col md={6} className="d-none d-md-flex auth-illu-col">
            <img
              src="/assets/images/login.png"
              alt="Connexion"
              className="auth-illu"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
