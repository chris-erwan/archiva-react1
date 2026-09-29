import { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

/**
 * Page d'inscription — design original Archiva (fond dégradé orange + carte blanche).
 */
export default function Register() {
  const { register } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nom: "",
    email: "",
    niveau: "X1",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await register({
      nom: form.nom,
      email: form.email,
      niveau: form.niveau,
      password: form.password,
    });
    setLoading(false);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message || "Échec de l'inscription");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Row className="g-0 align-items-center">
          <Col md={6} className="auth-form-col">
            <h1 className="auth-title">Créer un compte</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="regNom">
                <Form.Label className="fw-semibold">Nom complet</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  placeholder="Nom complet"
                  value={form.nom}
                  onChange={handleChange}
                  required
                  className="auth-input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="regEmail">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Entrer votre email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="auth-input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="regNiveau">
                <Form.Label className="fw-semibold">Niveaux</Form.Label>
                <Form.Select
                  name="niveau"
                  value={form.niveau}
                  onChange={handleChange}
                  className="auth-input"
                >
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-4" controlId="regPassword">
                <Form.Label className="fw-semibold">Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Entrer votre mot de passe"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  autoComplete="new-password"
                  className="auth-input"
                />
              </Form.Group>
              <Button
                type="submit"
                className="auth-btn w-100"
                disabled={loading}
              >
                {loading ? "Inscription…" : "Créer un compte"}
              </Button>
            </Form>
            <p className="text-center mt-4 mb-0 small">
              Vous avez déjà un compte ?{" "}
              <Link to="/connexion" className="auth-link">
                Connectez vous
              </Link>
            </p>
          </Col>
          <Col md={6} className="d-none d-md-flex auth-illu-col">
            <img
              src="/assets/images/signup.png"
              alt="Inscription"
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
