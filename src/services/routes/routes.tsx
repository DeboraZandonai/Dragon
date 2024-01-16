import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../AuthContext";
import { Login } from "../../screens/Login";
import { List } from "../../screens/List";
import { Details } from "../../screens/Details";
import { Register } from "../../screens/Register";

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/lista" 
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/detalhe/:id" 
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/cadastrar" 
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;