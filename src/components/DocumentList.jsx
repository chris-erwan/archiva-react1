import { Row, Col, Spinner, Alert } from "react-bootstrap";
import DocumentCard from "./DocumentCard";
import { useApp } from "../context/AppContext";

/**
 * Liste des documents (CERs).
 * Affiche les cartes filtrées selon la recherche (Context).
 */
export default function DocumentList({ cers: propCers, emptyMessage = "Aucun CER trouvé." }) {
  const { filteredCers, loading } = useApp();
  const list = propCers ?? filteredCers;

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-2 text-muted">Chargement des CERs…</p>
      </div>
    );
  }

  if (!list || list.length === 0) {
    return <Alert variant="info">{emptyMessage}</Alert>;
  }

  return (
    <Row xs={1} sm={2} md={3} lg={3} className="g-4">
      {list.map((cer) => (
        <Col key={cer.id}>
          <DocumentCard cer={cer} />
        </Col>
      ))}
    </Row>
  );
}
