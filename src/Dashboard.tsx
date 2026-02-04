import Header from './Header.tsx';
import TemplateCards from './TemplateCards.tsx';
import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Button from './Button.tsx';
import { FaEye, FaEdit, FaTrash, FaLock } from 'react-icons/fa';
import Input from './Input.tsx';

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

interface ModalPasswordChangeProps {
  email: string;
  password: string;
  confirmPassword: string;
  userid: number;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}: ModalPasswordChangeProps) {
  return (
    <TemplateModal title="Change Credentials">
      <div className="divider divider-primary"></div>
      <div className="flex flex-col space-y-2">
        <div className="flex gap-2 flex-row text-white text-sm">
          <Input
            value={email}
            onChange={onEmailChange}
            w="w-64"
            placeholder="Email"
          />
          <Button
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

        <Input
          value={password}
          onChange={onPasswordChange}
          w="w-64"
          placeholder="New Password"
        />
        <div className="flex flex-row text-white text-sm gap-2">
          <Input
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            w="w-64"
            placeholder="Confirm New Password"
          />

          <Button w="sm:w-auto w-12" border="#3B82F6">
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
  date: string; // DateTime wird als ISO-String serialisiert
  name: string;
  calories: number;
  protein: number; // in grams
  carbs: number; // in grams
  fats: number; // in grams
}

// Type für Exercises (basierend auf Prisma-Schema)
interface Exercises {
  id: number;
  user_id: number;
  workout_plan_id: number | null;
  date: string; // DateTime wird als ISO-String serialisiert
  name: string;
  sets: number;
  reps: number[]; // Array von Zahlen
  weights: number[]; // Array von Floats
  users: User; // Relation zu User
  workout_plans: WorkoutPlans | null; // Optionale Relation
}

// Type für WorkoutPlans (falls benötigt)
interface WorkoutPlans {
  id: number;
  // Weitere Felder je nach Schema
}
function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [exercises, setExercises] = useState<Exercises[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [Email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [ConfirmPassword, setConfirmPassword] = useState<string>('');

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      console.log('Email changed to:', e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      console.log('Password changed to:', e.target.value);
    },
    []
  );

  const handleConfirmPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value);
      console.log('Confirm Password changed to:', e.target.value);
    },
    []
  );

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
          <Button w="w-11" border="#3B82F6">
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
          // Server antwortete mit Error Status
          console.error(
            'Server Error:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // Request wurde gemacht, aber keine Response
          console.error('Network Error:', error.request);
        } else {
          // Etwas anderes ging schief
          console.error('Request Error:', error.message);
        }
        // Fallback zu den statischen Daten falls API nicht verfügbar
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
          // Server antwortete mit Error Status
          console.error(
            'Server Error:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // Request wurde gemacht, aber keine Response
          console.error('Network Error:', error.request);
        } else {
          // Etwas anderes ging schief
          console.error('Request Error:', error.message);
        }
        // Fallback zu den statischen Daten falls API nicht verfügbar
      });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Removed old UserCard function
  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-gray-900 to-black ">
      <Header />
      <div className="items-center justify-center  flex flex-col pt-5">
        <div className="grid grid-cols-1 gap-3 lg:gap-2 py-2 lg:grid-cols-3 items-center justify-center px-3 lg:px-2 overflow-y-auto max-h-screen">
          <TemplateCards title="User Management">
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
        />
      )}
    </div>
  );
}

export default Dashboard;
