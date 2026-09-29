import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import DocumentList from "../components/DocumentList";
import { useApp } from "../context/AppContext";

export default function Cers() {
  const { filteredCers, searchQuery } = useApp();

  return (
    <Container className="py-4">
      <h1 className="h3 mb-3">Catalogue des CERs</h1>
      <SearchBar placeholder="Filtrer par titre, auteur…" />
      {searchQuery && (
        <p className="text-muted small">
          {filteredCers.length} résultat(s) pour « {searchQuery} »
        </p>
      )}
      <DocumentList emptyMessage="Aucun CER ne correspond à votre recherche." />
    </Container>
  );
}
