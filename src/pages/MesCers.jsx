import { Container, Table, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function MesCers() {
  const { cers, deleteCer, user } = useApp();

  // En mode démo on affiche tous les CERs comme "mes CERs"
  // En production on filtrerait par user.id
  const mesCers = cers;

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Gestion de CER</h1>
        <Button as={Link} to="/add-cer" variant="primary">
          + Ajouter un CER
        </Button>
      </div>

      {!user && (
        <Alert variant="warning" className="mb-3">
          Connectez-vous pour gérer vos propres CERs.{" "}
          <Link to="/connexion">Se connecter</Link>
        </Alert>
      )}

      {mesCers.length === 0 ? (
        <Alert variant="info">Aucun CER. Ajoutez-en un !</Alert>
      ) : (
        <Table responsive striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Catégorie</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mesCers.map((cer) => (
              <tr key={cer.id}>
                <td>{cer.id}</td>
                <td>
                  <Link to={`/cers/${cer.id}`}>{cer.titre}</Link>
                </td>
                <td>{cer.auteur}</td>
                <td>{cer.categorie || "—"}</td>
                <td>{cer.date ? new Date(cer.date).toLocaleDateString("fr-FR") : "—"}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => {
                      if (window.confirm(`Supprimer « ${cer.titre} » ?`)) {
                        deleteCer(cer.id);
                      }
                    }}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
