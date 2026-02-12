import Header from './Header.tsx';
import TemplateCards from './TemplateCards.tsx';
import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Button from './Button.tsx';
import { FaEye, FaEdit, FaTrash, FaLock, FaPlus, FaKey } from 'react-icons/fa';

import EmailInput from './emailinput.tsx';
import PasswordInput from './passwordinput.tsx';
import { on } from 'events';

function getActivityLevelString(level: string | null | undefined): string {
  if (level == null) return 'N/A';
  switch (level) {
    case '1.2':
      return 'Not Active';
    case '1.4 ':
      return 'Light Activity';
    case '1.7':
      return 'Active';
    case '2.0':
      return 'Very Active';

    default:
      return 'Unknown';
  }
}

async function handleEmailChangeApi(
  email: string,
  userId: number,
  setModalOpen?: (open: boolean) => void
): Promise<AxiosResponse<any> | void> {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/email/${userId}`,
      { email },
      { withCredentials: true }
    );
    console.log('Server response:', response.data);

    if (setModalOpen) setModalOpen(false);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          'Server Error:',
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Request Error:', error.message);
      }
    } else {
      console.error(error);
    }
    throw error;
  }
}

async function handlePasswordChangeApi(
  password: string,
  userId: number,
  setModalOpen?: (open: boolean) => void
): Promise<AxiosResponse<any> | void> {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/password/${userId}`,
      { password },
      { withCredentials: true }
    );
    console.log('Server response:', response.data);

    if (setModalOpen) setModalOpen(false);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          'Server Error:',
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Request Error:', error.message);
      }
    } else {
      console.error(error);
    }
    throw error;
  }
}

async function handleAccountDeleteApi(
  userId: number,
  setModalOpen?: (open: boolean) => void
): Promise<AxiosResponse<any> | void> {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/user/${userId}`,
      { withCredentials: true }
    );
    console.log('Server response:', response.data);
    if (setModalOpen) setModalOpen(false);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          'Server Error:',
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Request Error:', error.message);
      }
    } else {
      console.error(error);
    }
    throw error;
  }
}

async function GeneratePassword() {
  try {
    const response = await axios.get(
      'http://localhost:3000/api/createPassword',
      { withCredentials: true }
    );
    console.log('Server response:', response.data);
    return response.data.password;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          'Server Error:',
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Request Error:', error.message);
      }
    } else {
      console.error(error);
    }
    throw error;
  }
}

function getGoalString(goal: string | null | undefined): string {
  if (goal == null) return 'N/A';
  switch (goal) {
    case '1':
      return 'Cut';
    case '2':
      return 'Maintain';
    case '3':
      return 'Bulk';

    default:
      return 'Unknown';
  }
}

// Top-level modals to avoid remounting on each Dashboard render
function TemplateModal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
      <div className="bg-gradient-to-b from-gray-900 to-black backdrop-blur border border-white/20 p-6 rounded-lg max-w-md w-auto mx-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}

interface ModalAccountAddProps {
  onSaved?: () => Promise<void> | void;
  setIsAddingAccount: (adding: boolean) => void;
  onPasswordChange?: (password: string) => void;
  onConfirmPasswordChange?: (password: string) => void;
  onEmailChange?: (email: string) => void;
  email?: string;
  password?: string;
  confirmPassword?: string;
  errorPassword?: (hasError: boolean) => void;
  errorConfirmPassword?: (hasError: boolean) => void;
  errorEmail?: (hasError: boolean) => void;
  emailHasError?: boolean;
  passwordHasError?: boolean;
  confirmPasswordHasError?: boolean;
}

function ModalAccountAdd({
  onSaved,
  setIsAddingAccount,
  onPasswordChange = () => {},
  onConfirmPasswordChange = () => {},
  onEmailChange = () => {},
  email,
  password,
  confirmPassword,
  errorPassword = () => {},
  errorConfirmPassword = () => {},
  errorEmail = () => {},
  emailHasError,
  passwordHasError,
  confirmPasswordHasError,
}: ModalAccountAddProps) {
  return (
    <TemplateModal title="Add Account">
      <div className="divider divider-primary"></div>
      <div className="flex flex-col gap-2 justify-center mt-4">
        <EmailInput
          value={email}
          onChange={(e) => onEmailChange(e)}
          onError={(error) => errorEmail && errorEmail(error)}
        />
        <PasswordInput
          value={password}
          onChange={(e) => onPasswordChange(e)}
          placeholder="Password"
          onError={(error) => errorPassword && errorPassword(error)}
        />
        <PasswordInput
          value={confirmPassword}
          onChange={(e) => onConfirmPasswordChange(e)}
          placeholder="Confirm Password"
          onError={(error) =>
            errorConfirmPassword && errorConfirmPassword(error)
          }
        />
        <Button
          onClick={async () => {
            console.log('Generating password...');
            const generated = await GeneratePassword();
            onPasswordChange(generated);
            onConfirmPasswordChange(generated);
          }}
          w="sm:w-28 w-28"
          border="#3B82F6"
        >
          <>
            <FaKey size={16} className="mr-1" /> Generate
          </>
        </Button>
        <div className="divider divider-primary"></div>
        <div className="flex flex-row gap-2">
          <Button
            disabled={
              email === '' ||
              password === '' ||
              confirmPassword === '' ||
              password !== confirmPassword ||
              Boolean(emailHasError) ||
              Boolean(passwordHasError) ||
              Boolean(confirmPasswordHasError)
            }
            onClick={async () => {
              try {
                await axios.post(
                  'http://localhost:3000/api/user',
                  { email, password },
                  { withCredentials: true }
                );
                if (onSaved) await onSaved();
                onPasswordChange('');
                onConfirmPasswordChange('');
                onEmailChange('');

                setIsAddingAccount(false);
              } catch (err) {
                console.error('Create account failed', err);
              }
            }}
            w="sm:w-auto w-12"
            border="#3B82F6"
          >
            Create
          </Button>
          <Button
            onClick={() => setIsAddingAccount(false)}
            w="sm:w-auto w-12"
            border="#FF0000"
          >
            Cancel
          </Button>
        </div>
      </div>
    </TemplateModal>
  );
}

interface ModalAccountDeleteProps {
  setDeleting: (deleting: boolean) => void;
  selectedUser: User | null;
  onSaved?: () => Promise<void> | void;
}
function ModalAccountDelete({
  setDeleting,
  selectedUser,
  onSaved,
}: ModalAccountDeleteProps) {
  return (
    <TemplateModal title="Delete Account">
      <div className="divider divider-primary"></div>
      <p className="text-white text-center break-words">
        Are you sure you want to delete the account with following email:{' '}
        {selectedUser?.email}? This action cannot be undone.
      </p>
      <div className="divider divider-primary"></div>
      <div className="flex flex-row gap-2 justify-center mt-4">
        <Button
          onClick={async () => {
            try {
              await handleAccountDeleteApi(selectedUser?.id, setDeleting);
              if (onSaved) await onSaved();
            } catch (err) {
              console.error('Delete account failed', err);
            }
          }}
          w="sm:w-auto w-12"
          border="#FF0000"
        >
          Delete
        </Button>
        <Button
          onClick={() => setDeleting(false)}
          w="sm:w-auto w-12"
          border="#3B82F6"
        >
          Cancel
        </Button>
      </div>
    </TemplateModal>
  );
}

interface ModalPasswordChangeProps {
  email: string;
  password: string;
  confirmPassword: string;
  userid: number;
  errorEmail?: (hasError: boolean) => void;
  errorPassword?: (hasError: boolean) => void;
  errorConfirmPassword?: (hasError: boolean) => void;
  emailHasError?: boolean;
  passwordHasError?: boolean;
  confirmPasswordHasError?: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onClose: () => void;
  onSaved?: () => Promise<void> | void;
}

function ModalPasswordChange({
  email,
  password,
  confirmPassword,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onClose,
  userid,
  onSaved,
  errorEmail,
  errorPassword,
  errorConfirmPassword,
  emailHasError,
  passwordHasError,
  confirmPasswordHasError,
}: ModalPasswordChangeProps) {
  return (
    <TemplateModal title="Change Credentials">
      <div className="divider divider-primary"></div>
      <div className="flex flex-col space-y-2">
        <div className="flex gap-2 flex-row text-white text-sm">
          <EmailInput
            value={email}
            onChange={onEmailChange}
            onError={errorEmail}
          />
          <Button
            disabled={email === '' || Boolean(emailHasError)}
            onClick={async () => {
              try {
                await handleEmailChangeApi(email, userid);
                if (onSaved) await onSaved();
                onClose();
              } catch (err) {
                console.error('Save email failed', err);
              }
            }}
            w="sm:w-auto w-12"
            border="#3B82F6"
          >
            Save
          </Button>
        </div>

        <PasswordInput
          value={password}
          onChange={onPasswordChange}
          placeholder="New Password"
          onError={errorPassword}
        />
        <div className="flex flex-row text-white text-sm gap-2">
          <PasswordInput
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            placeholder="Confirm New Password"
            onError={errorConfirmPassword}
          />

          <Button
            onClick={async () => {
              console.log('Generating password...');
              const generated = await GeneratePassword();
              onPasswordChange(generated);
              onConfirmPasswordChange(generated);
            }}
            w="sm:w-28 w-12"
            border="#3B82F6"
          >
            <>
              <FaKey size={16} className="mr-1" />
            </>
          </Button>

          <Button
            disabled={
              password === '' ||
              password !== confirmPassword ||
              Boolean(passwordHasError) ||
              Boolean(confirmPasswordHasError)
            }
            onClick={async () => {
              try {
                await handlePasswordChangeApi(password, userid);
                if (onSaved) await onSaved();
                onClose();
              } catch (err) {
                console.error('Save password failed', err);
              }
            }}
            w="sm:w-auto w-12"
            border="#3B82F6"
          >
            Save
          </Button>
        </div>
        <Button w="sm:w-auto w-12" border="#FF0000" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </TemplateModal>
  );
}

interface ModalUserViewProps {
  user: User | null;
  onClose: () => void;
}

function ModalUserView({ user, onClose }: ModalUserViewProps) {
  if (!user) return null;
  return (
    <TemplateModal title="User View">
      <div className="divider divider-primary"></div>
      <div className="grid grid-cols-2 gap-2 text-base">
        <span className="font-bold">ID:</span>
        <span>{user.id || 'N/A'}</span>
        <span className="font-bold">Email:</span>
        <span className="break-words">{user.email || 'N/A'}</span>
        <span className="font-bold">Weight:</span>
        <span>{user.weight != null ? `${user.weight} kg` : 'N/A'}</span>
        <span className="font-bold">Height:</span>
        <span>{user.height != null ? `${user.height} cm` : 'N/A'}</span>
        <span className="font-bold">Age:</span>
        <span>{user.age != null ? `${user.age} years` : 'N/A'}</span>
        <span className="font-bold">Gender:</span>
        <span>{user.gender || 'N/A'}</span>
        <span className="font-bold">Activity Level:</span>
        <span>{getActivityLevelString(user.activity_level)}</span>
        <span className="font-bold">Goals:</span>
        <span>{getGoalString(user.goal) || 'N/A'}</span>
        <span className="font-bold">Body Fat Percentage:</span>
        <span>{user.bfp != null ? `${user.bfp}%` : 'N/A'}</span>
        <span className="font-bold">Waist Circumference:</span>
        <span>{user.waist != null ? `${user.waist} cm` : 'N/A'}</span>
        <span className="font-bold">Hip Circumference:</span>
        <span>{user.hip != null ? `${user.hip} cm` : 'N/A'}</span>
        <span className="font-bold">BMI:</span>
        <span>{user.bmi != null ? user.bmi.toFixed(0) : 'N/A'}</span>
        <span className="font-bold">Caloric Needs:</span>
        <span>
          {user.calories != null ? `${user.calories} kcal/day` : 'N/A'}
        </span>
        <div className="col-span-2  mt-2">
          <div className="divider divider-primary"></div>
        </div>
        <div className="col-span-2">
          <Button w="w-full" border="#FF0000" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </TemplateModal>
  );
}

// Type für User
interface User {
  id: number;

  email: string;
  weight: number; // in kg
  height: number; // in cm
  age: number; // in years
  gender: 'male' | 'female';
  activity_level: string;
  goal: string;
  bfp: number; // body fat percentage
  waist: number; // in cm
  hip: number; // in cm
  bmi: number; // body mass index
  calories: number; // daily caloric needs
}

interface Meal {
  id: number;
  user_id: number;
  date: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

interface Exercises {
  id: number;
  user_id: number;
  workout_plan_id: number | null;
  date: string;
  name: string;
  sets: number;
  reps: number[];
  weights: number[];
  users: User;
  workout_plans: WorkoutPlans | null;
}

interface WorkoutPlans {
  id: number;
}
function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [exercises, setExercises] = useState<Exercises[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [Email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [ConfirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isAddingAccount, setIsAddingAccount] = useState<boolean>(false);

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
    console.log('Email changed to:', value);
  }, []);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
    console.log('Password changed to:', value);
  }, []);

  const handleConfirmPasswordChange = useCallback((value: string) => {
    setConfirmPassword(value);
    console.log('Confirm Password changed to:', value);
  }, []);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get<User[]>(
        'http://localhost:3000/api/users',
        {
          withCredentials: true,
        }
      );
      setUsers(response.data);
      console.log('Fetched users:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error(
            'Server Error:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.error('Network Error:', error.request);
        } else {
          console.error('Request Error:', error.message);
        }
      } else {
        console.error(error);
      }
    }
  }, []);

  function UserCard(user: User, onView: () => void) {
    return (
      <div className="card w-56 bg-black/10 backdrop-blur-md border border-white/20 shadow-xl">
        <h2 className="text-center text-blue-500">User</h2>
        <p className="text-center text-xs">Mail: {user.email}</p>
        <div className="flex flex-row gap-2 m-2 items-center justify-center">
          <Button onClick={onView} w="w-11" border="#3B82F6">
            <FaEye size={20} />
          </Button>
          <Button
            onClick={() => {
              setIsEditing(true);
              setSelectedUser(user);
              setEmail(user.email);
            }}
            w="w-11"
            border="#3B82F6"
          >
            <FaEdit size={20} />
          </Button>
          <Button
            onClick={() => {
              setIsDeleting(true);
              setSelectedUser(user);
            }}
            w="w-11"
            border="#3B82F6"
          >
            <FaTrash size={20} />
          </Button>
          <Button w="w-11" border="#3B82F6">
            <FaLock size={20} />
          </Button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    axios
      .get<Meal[]>('http://localhost:3000/api/meals', {
        withCredentials: true,
      })
      .then((response: AxiosResponse<Meal[]>) => {
        setMeals(response.data);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          console.error(
            'Server Error:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.error('Network Error:', error.request);
        } else {
          console.error('Request Error:', error.message);
        }
      });
  }, []);

  useEffect(() => {
    axios
      .get<Exercises[]>('http://localhost:3000/api/exercises', {
        withCredentials: true,
      })
      .then((response: AxiosResponse<Exercises[]>) => {
        setExercises(response.data);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          console.error(
            'Server Error:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.error('Network Error:', error.request);
        } else {
          console.error('Request Error:', error.message);
        }
      });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-gray-900 to-black ">
      <Header />
      <div className="items-center justify-center  flex flex-col pt-5">
        <div className="grid grid-cols-1 gap-3 lg:gap-2 py-2 lg:grid-cols-3 items-center justify-center px-3 lg:px-2 overflow-y-auto max-h-screen">
          <TemplateCards title="User Management">
            <div className="flex top-0 left-0 w-full justify-end mb-0">
              <Button
                onClick={() => {
                  setIsAddingAccount(true);
                }}
                w="sm:w-auto w-10"
                border="#3B82F6"
              >
                <FaPlus size={12} />
              </Button>
            </div>
            <div className="divider divider-primary">
              Registered Users: {users.length}
            </div>
            <div className="flex flex-col items-center space-y-2 w-full overflow-y-auto max-h-[20dvh] lg:max-h-[50dvh] ">
              {users.map((u, index) => (
                <div key={u.id || index} className="mb-2">
                  {UserCard(u, () => {
                    setSelectedUser(u);
                    setIsModalOpen(true);
                  })}
                </div>
              ))}
            </div>
          </TemplateCards>

          <TemplateCards title="Statistics Exercises">
            <div className="divider divider-primary">
              Logged Exercises: {exercises.length}
            </div>
            <div className="flex flex-col overflow-y-auto items-center w-full max-h-[20dvh] lg:max-h-[50dvh]">
              {exercises.map((e, index) => (
                <div key={index} className="mb-2">
                  <p className="text-white text-center text-xs">
                    {e.name} {e.weights.join('kg, ')}kg - Reps:{' '}
                    {e.reps.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </TemplateCards>

          <TemplateCards title="Statistics Meals">
            <div className="divider divider-primary">
              Logged Meals: {meals.length}
            </div>
            <div className="flex flex-col  overflow-y-auto items-center w-full max-h-[20dvh] lg:max-h-[50dvh]">
              {meals.map((e, index) => (
                <div key={index} className="mb-2">
                  <p className="text-white text-center text-xs">
                    {e.name} - {e.calories} kcal P: {e.protein}g, C: {e.carbs}g
                    F: {e.fats}g
                  </p>
                </div>
              ))}
            </div>
          </TemplateCards>
        </div>
      </div>
      {isModalOpen && (
        <ModalUserView
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isEditing && (
        <ModalPasswordChange
          email={Email}
          password={Password}
          confirmPassword={ConfirmPassword}
          onPasswordChange={handlePasswordChange}
          onConfirmPasswordChange={handleConfirmPasswordChange}
          onEmailChange={handleEmailChange}
          onClose={() => setIsEditing(false)}
          userid={selectedUser ? selectedUser.id : 0}
          onSaved={fetchUsers}
          errorPassword={(error) => setPasswordError(error)}
          errorConfirmPassword={(error) => setConfirmPasswordError(error)}
          errorEmail={(error) => setEmailError(error)}
          emailHasError={emailError}
          passwordHasError={passwordError}
          confirmPasswordHasError={confirmPasswordError}
        />
      )}
      {isDeleting && (
        <ModalAccountDelete
          setDeleting={setIsDeleting}
          selectedUser={selectedUser}
          onSaved={fetchUsers}
        />
      )}
      {isAddingAccount && (
        <ModalAccountAdd
          setIsAddingAccount={setIsAddingAccount}
          onSaved={fetchUsers}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onConfirmPasswordChange={handleConfirmPasswordChange}
          confirmPassword={ConfirmPassword}
          password={Password}
          email={Email}
          errorPassword={(error) => setPasswordError(error)}
          errorConfirmPassword={(error) => setConfirmPasswordError(error)}
          errorEmail={(error) => setEmailError(error)}
          emailHasError={emailError}
          passwordHasError={passwordError}
          confirmPasswordHasError={confirmPasswordError}
        />
      )}
    </div>
  );
}

export default Dashboard;
