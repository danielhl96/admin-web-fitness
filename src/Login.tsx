import PasswordInput from './passwordinput';
import EmailInput from './emailinput';
import Button from './Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './HeaderLogout';

function LoginPage() {
  async function login(email: string, password: string) {
    try {
      const response = await axios.post(
        'http://localhost:3000/admin/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log('Login successful:', response.data);
      setErrorMessage(response.data.message || 'Login successful');
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage(error.message || 'Login failed');
      throw error;
    }
  }
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="card bg-black border border-white/20 w-full max-w-sm shadow-xl p-6">
          <h2 className="card-title text-2xl font-bold text-center mb-4">
            Admin Login
          </h2>
          <div className="flex flex-col gap-4">
            <EmailInput value={email} onChange={setEmail} />
            <PasswordInput value={password} onChange={setPassword} />
            <Button
              onClick={async () => {
                try {
                  await login(email, password);
                  navigate('/dashboard');
                } catch (err) {
                  // Error is handled in login function
                }
              }}
              w="w-full"
              border="#3B82F6"
            >
              Login
            </Button>
            <p className="text-center text-red-500 text-sm">{errorMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
