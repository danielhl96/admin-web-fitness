import PasswordInput from '../Components/passwordinput';
import EmailInput from '../Components/emailinput';
import Button from '../Components/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/HeaderLogout';
import { loginAdmin } from '../utils/api';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

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
                  await loginAdmin(email, password);

                  navigate('/dashboard');
                } catch (err) {
                  // Error is handled in login function
                  setErrorMessage(
                    typeof err === 'string' ? err : 'Login failed'
                  );
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
