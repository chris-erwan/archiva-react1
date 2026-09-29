import { Form, InputGroup } from "react-bootstrap";
import { useApp } from "../context/AppContext";

/**
 * Composant de recherche contrôlé.
 * Utilise useState via le Context (searchQuery / setSearchQuery).
 */
export default function SearchBar({ placeholder = "Rechercher un CER..." }) {
  const { searchQuery, setSearchQuery } = useApp();

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>🔍</InputGroup.Text>
      <Form.Control
        type="search"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Recherche de CER"
      />
      {searchQuery && (
        <InputGroup.Text
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => setSearchQuery("")}
          title="Effacer"
        >
          ✕
        </InputGroup.Text>
      )}
    </InputGroup>
  );
}
