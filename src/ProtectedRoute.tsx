import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { useContext } from 'react';
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  console.log(
    'ProtectedRoute - isAuthenticated:',
    isAuthenticated,
    'loading:',
    loading
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
