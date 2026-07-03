import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Registro</h1>
        <p className="text-gray-600 mb-4">Página de registro (en construcción)</p>
        <Link to="/login" className="text-blue-600 hover:underline">
          Volver al login
        </Link>
      </div>
    </div>
  );
}
