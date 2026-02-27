import { useState } from 'react';
import { UserCredentials } from '../types.ts';
function useUserCredential(): {
  userCredentials: UserCredentials;
  handleChange: (
    field: keyof UserCredentials,
    value: string | undefined
  ) => void;
  resetUserCredentials: () => void;
} {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (
    field: keyof UserCredentials,
    value: string | undefined
  ) => {
    setUserCredentials((prev) => ({ ...prev, [field]: value || '' }));
  };

  const resetUserCredentials = () => {
    setUserCredentials({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };
  return { userCredentials, handleChange, resetUserCredentials };
}
export default useUserCredential;
