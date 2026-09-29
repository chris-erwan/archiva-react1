import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cers from "./pages/Cers";
import Favoris from "./pages/Favoris";
import MesCers from "./pages/MesCers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCer from "./pages/AddCer";
import DocumentDetail from "./components/DocumentDetail";

const AUTH_PATHS = ["/connexion", "/inscription"];

function AppLayout() {
  const location = useLocation();
  const isAuthPage = AUTH_PATHS.includes(location.pathname);

  return (
    <div className="d-flex flex-column min-vh-100">
      {!isAuthPage && <Header />}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cers" element={<Cers />} />
          <Route path="/cers/:id" element={<DocumentDetail />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/mes-cers" element={<MesCers />} />
          <Route path="/add-cer" element={<AddCer />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

/**
 * Application Archiva React
 * - React Router DOM pour la navigation
 * - Context API pour les données partagées
 * - Bootstrap / React-Bootstrap pour le style
 * - fetch pour le backend (avec fallback local)
 * - Controlled Components pour les formulaires
 */
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
