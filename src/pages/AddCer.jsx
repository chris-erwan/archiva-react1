import { useState } from "react";
import { Container, Card, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

/**
 * Formulaire d'ajout de CER — Controlled Components.
 * Envoie les données via fetch (Context.addCer).
 */
export default function AddCer() {
  const { addCer } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    titre: "",
    auteur: "",
    description: "",
    categorie: "",
    image: "/assets/images/uml.png",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const result = await addCer({
      ...form,
      date: new Date().toISOString().slice(0, 10),
    });
    setLoading(false);
    if (result.success) {
      setSuccess(
        result.offline
          ? "CER ajouté localement (backend inaccessible)."
          : "CER ajouté avec succès !"
      );
      setForm({
        titre: "",
        auteur: "",
        description: "",
        categorie: "",
        image: "/assets/images/uml.png",
      });
      setTimeout(() => navigate("/mes-cers"), 1500);
    } else {
      setError("Impossible d'ajouter le CER.");
    }
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h1 className="h4 mb-4">Ajouter un CER</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="cerTitre">
                  <Form.Label>Titre *</Form.Label>
                  <Form.Control
                    type="text"
                    name="titre"
                    value={form.titre}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Prosit 5.1 ..."
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cerAuteur">
                  <Form.Label>Auteur *</Form.Label>
                  <Form.Control
                    type="text"
                    name="auteur"
                    value={form.auteur}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cerCategorie">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Select name="categorie" value={form.categorie} onChange={handleChange}>
                    <option value="">— Choisir —</option>
                    <option value="Modélisation">Modélisation</option>
                    <option value="API">API</option>
                    <option value="Développement">Développement</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Système">Système</option>
                    <option value="DevOps">DevOps</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="cerDescription">
                  <Form.Label>Description *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    placeholder="Résumé du CER..."
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cerImage">
                  <Form.Label>URL de l&apos;image</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="/assets/images/..."
                  />
                </Form.Group>
                <div className="d-flex gap-2">
                  <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? "Envoi…" : "Ajouter le CER"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline-secondary"
                    onClick={() => navigate("/mes-cers")}
                  >
                    Annuler
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
