import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DocumentList from "../components/DocumentList";
import { useApp } from "../context/AppContext";
import { extraCers } from "../data/cers";
import { useState } from "react";

export default function Home() {
  const { cers } = useApp();
  const [extraLoaded, setExtraLoaded] = useState(false);
  const [extraList, setExtraList] = useState([]);

  // Les meilleurs CERs = les 3 premiers (ou filtrés)
  const featured = cers.slice(0, 3);

  const handleVoirPlus = () => {
    setExtraList(extraCers);
    setExtraLoaded(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-5 mb-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <SearchBar placeholder="Rechercher un CER…" />
              <h1 className="display-5 fw-bold mt-3">Bienvenue sur Archiva</h1>
              <p className="lead">Espace d&apos;archivage d&apos;anciens CERs</p>
              <p className="fst-italic opacity-75">« L&apos;homme n&apos;est rien sans son bord »</p>
              <div className="d-flex gap-2 mt-3">
                <Button as={Link} to="/cers" variant="light" size="lg">
                  Explorer plus de CER
                </Button>
                <Button as={Link} to="/cers" variant="outline-light" size="lg">
                  Tous les CERs
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured */}
      <Container className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 mb-0">Les meilleurs CERs du moment</h2>
            <p className="text-muted small mb-0">Découvrez les documents les plus consultés</p>
          </div>
          <Button as={Link} to="/cers" variant="outline-primary" size="sm">
            Voir tout
          </Button>
        </div>
        <DocumentList cers={featured} emptyMessage="Aucun CER en vedette." />

        {!extraLoaded && (
          <div className="text-center mt-4">
            <Button variant="primary" onClick={handleVoirPlus}>
              Voir plus de CERs
            </Button>
          </div>
        )}

        {extraLoaded && extraList.length > 0 && (
          <div className="mt-4">
            <h3 className="h5 mb-3">CERs supplémentaires</h3>
            <DocumentList cers={extraList} />
          </div>
        )}
      </Container>
    </>
  );
}
