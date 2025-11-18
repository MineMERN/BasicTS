// routes/PrivateRoute.tsx
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isAuth: boolean; // is user logged in?
}

const PrivateRoute = ({ children, isAuth }: Props) => {
  // If user is NOT authenticated → move to login page
  if (!isAuth) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default PrivateRoute;
