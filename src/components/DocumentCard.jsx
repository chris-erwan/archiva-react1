import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

/**
 * Carte d'un document (CER).
 * Affiche image, titre, auteur, description et actions favori / détail.
 */
export default function DocumentCard({ cer }) {
  const { isFavori, toggleFavori } = useApp();
  const favori = isFavori(cer.id);

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={cer.image}
        alt={cer.titre}
        style={{ height: 160, objectFit: "cover" }}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x160?text=CER";
        }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Button
            variant={favori ? "danger" : "outline-secondary"}
            size="sm"
            onClick={() => toggleFavori(cer.id)}
            aria-label={favori ? "Retirer des favoris" : "Ajouter aux favoris"}
            title={favori ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            {favori ? "♥" : "♡"}
          </Button>
          <small className="text-muted">par {cer.auteur}</small>
        </div>
        <Card.Title className="fs-6">{cer.titre}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1" style={{ maxHeight: 80, overflow: "hidden" }}>
          {cer.description}
        </Card.Text>
        {cer.categorie && (
          <Badge bg="secondary" className="align-self-start mb-2">
            {cer.categorie}
          </Badge>
        )}
        <Button as={Link} to={`/cers/${cer.id}`} variant="primary" size="sm" className="mt-auto">
          Consulter le CER
        </Button>
      </Card.Body>
    </Card>
  );
}
