import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge, Alert } from "react-bootstrap";
import { useApp } from "../context/AppContext";

/**
 * Détail d'un document (CER).
 * Composant dédié pour l'affichage complet d'un CER.
 */
export default function DocumentDetail() {
  const { id } = useParams();
  const { cers, isFavori, toggleFavori } = useApp();
  const navigate = useNavigate();

  const cer = cers.find((c) => String(c.id) === String(id));

  if (!cer) {
    return (
      <Container className="py-5">
        <Alert variant="warning">
          CER introuvable. <Link to="/cers">Retour au catalogue</Link>
        </Alert>
      </Container>
    );
  }

  const favori = isFavori(cer.id);

  return (
    <Container className="py-4">
      <Button variant="link" onClick={() => navigate(-1)} className="mb-3 ps-0">
        ← Retour
      </Button>
      <Row>
        <Col md={5}>
          <Card>
            <Card.Img
              variant="top"
              src={cer.image}
              alt={cer.titre}
              style={{ maxHeight: 320, objectFit: "cover" }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x250?text=CER";
              }}
            />
          </Card>
        </Col>
        <Col md={7}>
          <h1 className="h3">{cer.titre}</h1>
          <p className="text-muted">
            Par <strong>{cer.auteur}</strong>
            {cer.date && <> · {new Date(cer.date).toLocaleDateString("fr-FR")}</>}
          </p>
          {cer.categorie && (
            <Badge bg="info" className="mb-3">
              {cer.categorie}
            </Badge>
          )}
          <p className="lead">{cer.description}</p>
          <div className="d-flex gap-2 mt-4">
            <Button
              variant={favori ? "danger" : "outline-primary"}
              onClick={() => toggleFavori(cer.id)}
            >
              {favori ? "♥ Retirer des favoris" : "♡ Ajouter aux favoris"}
            </Button>
            <Button as={Link} to="/cers" variant="secondary">
              Voir tous les CERs
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
