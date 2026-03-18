import { useState } from 'react';
import { UserCredentials } from '../types.ts';

// This is a custom hook that manages the state of user credentials (email, password, confirm password) for forms in the application.
// It provides a handleChange function to update the state
// and a resetUserCredentials function to reset the state to its initial values.
// This hook can be used in components that require user input for credentials, such as account creation or login forms.
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
