// routes/PublicRoute.tsx
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isAuth: boolean; // user logged in or not
}

const PublicRoute = ({ children, isAuth }: Props) => {
  // If logged in → user should not visit login/register pages
  if (isAuth) return <Navigate to="/dashboard" />;

  return <>{children}</>;
};

export default PublicRoute;
