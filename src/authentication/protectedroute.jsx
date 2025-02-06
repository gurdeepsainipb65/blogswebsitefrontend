import { Navigate } from "react-router-dom";
import { is_authenticated } from "./authentication";
export default function Protectedroute({ children }) {
  return is_authenticated() ? children : <Navigate to="/login/" replace />;
}
