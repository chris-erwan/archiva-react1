import { Container, Alert } from "react-bootstrap";
import DocumentList from "../components/DocumentList";
import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Favoris() {
  const { cers, favoris } = useApp();
  const favorisCers = cers.filter((c) => favoris.includes(c.id));

  return (
    <Container className="py-4">
      <h1 className="h3 mb-3">Mes CER Favoris</h1>
      {favorisCers.length === 0 ? (
        <Alert variant="info">
          Vous n&apos;avez pas encore de favoris.{" "}
          <Link to="/cers">Parcourir le catalogue</Link> et cliquez sur ♡ pour en ajouter.
        </Alert>
      ) : (
        <DocumentList cers={favorisCers} />
      )}
    </Container>
  );
}
