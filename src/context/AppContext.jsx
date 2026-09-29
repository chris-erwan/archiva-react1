import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { initialCers } from "../data/cers";

const AppContext = createContext(null);

// URL de base du backend (à adapter selon votre API)
const API_BASE = "http://localhost:3000/api"; // mock : on utilise les données locales si l'API échoue

export function AppProvider({ children }) {
  const [cers, setCers] = useState(initialCers);
  const [favoris, setFavoris] = useState(() => {
    try {
      const saved = localStorage.getItem("archiva_favoris");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sauvegarder les favoris dans localStorage
  useEffect(() => {
    localStorage.setItem("archiva_favoris", JSON.stringify(favoris));
  }, [favoris]);

  // Charger les CERs depuis le backend (avec fallback local)
  const fetchCers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/cers`);
      if (res.ok) {
        const data = await res.json();
        setCers(data);
      }
      // sinon on garde les données initiales
    } catch (err) {
      console.warn("Backend inaccessible, utilisation des données locales:", err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCers();
  }, [fetchCers]);

  const toggleFavori = (cerId) => {
    setFavoris((prev) =>
      prev.includes(cerId) ? prev.filter((id) => id !== cerId) : [...prev, cerId]
    );
  };

  const isFavori = (cerId) => favoris.includes(cerId);

  const addCer = async (nouveauCer) => {
    // Controlled form data → envoi au backend
    try {
      const res = await fetch(`${API_BASE}/cers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nouveauCer),
      });
      if (res.ok) {
        const created = await res.json();
        setCers((prev) => [...prev, created]);
        return { success: true, data: created };
      }
    } catch (err) {
      // Fallback local
      const localCer = {
        ...nouveauCer,
        id: Date.now(),
        image: nouveauCer.image || "/assets/images/uml.png",
      };
      setCers((prev) => [...prev, localCer]);
      return { success: true, data: localCer, offline: true };
    }
    return { success: false };
  };

  const deleteCer = async (id) => {
    try {
      await fetch(`${API_BASE}/cers/${id}`, { method: "DELETE" });
    } catch {
      // ignore
    }
    setCers((prev) => prev.filter((c) => c.id !== id));
    setFavoris((prev) => prev.filter((fid) => fid !== id));
  };

  const login = async (email, password) => {
    // Simulation d'auth (remplacer par vrai fetch)
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        return { success: true };
      }
    } catch {
      // Demo : accepte n'importe quel email/password non vide
      if (email && password) {
        setUser({ email, name: email.split("@")[0] });
        return { success: true, offline: true };
      }
    }
    return { success: false, message: "Identifiants invalides" };
  };

  const logout = () => setUser(null);

  const register = async (formData) => {
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        return { success: true };
      }
    } catch {
      if (formData.email && formData.password) {
        setUser({ email: formData.email, name: formData.nom || formData.email.split("@")[0] });
        return { success: true, offline: true };
      }
    }
    return { success: false, message: "Erreur d'inscription" };
  };

  const filteredCers = searchQuery
    ? cers.filter(
        (c) =>
          c.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.auteur.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (c.description && c.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : cers;

  const value = {
    cers,
    filteredCers,
    favoris,
    user,
    loading,
    searchQuery,
    setSearchQuery,
    toggleFavori,
    isFavori,
    addCer,
    deleteCer,
    login,
    logout,
    register,
    fetchCers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
