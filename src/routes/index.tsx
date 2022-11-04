import { Routes, Route } from "react-router-dom";
import {
  AdmViagemPage,
  AdmViagemStorePage,
  CadastrarPage,
  HomePage,
  LayoutPage,
  LoginPage
} from "pages";
import ProtectedRoute from "./ProtectedRoute";
const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adm" element={<ProtectedRoute />}>
          <Route path="viagem" element={<AdmViagemPage />} />
          <Route path="viagem/:id" element={<AdmViagemStorePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Rotas;
