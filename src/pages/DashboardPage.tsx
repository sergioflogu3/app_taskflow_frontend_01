import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        </div>
        <p className="text-gray-700">
          Bienvenido, <span className="font-semibold">{user?.name ?? 'usuario'}</span>
        </p>
      </div>
    </div>
  );
}
