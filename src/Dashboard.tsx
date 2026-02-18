import Header from './Header.tsx';
import TemplateCards from './TemplateCards.tsx';
import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import Button from './Button.tsx';
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaLock,
  FaUnlock,
  FaPlus,
  FaKey,
} from 'react-icons/fa';

import EmailInput from './emailinput.tsx';
import PasswordInput from './passwordinput.tsx';

function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is { status: 'success'; data: T } {
  return response.status === 'success';
}

async function apiRequest<T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const response = await axios.request<T>({
      method,
      url,
      data,
      ...config,
      withCredentials: true,
    });
    return { status: 'success', data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return {
          status: 'error',
          message: error.response.data?.error || 'Server error',
        };
      } else if (error.request) {
        return { status: 'error', message: 'Network error' };
      } else {
        return { status: 'error', message: error.message };
      }
    } else {
      return { status: 'error', message: 'Unknown error' };
    }
  }
}

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

type ApiResponse<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

async function handleEmailChangeApi(
  email: string,
  userId: number,
  setModalOpen?: (open: boolean) => void
): Promise<ApiResponse<{ message: string }>> {
  const response = await apiRequest<{ message: string }>(
    'put',
    `http://localhost:3000/api/email/${userId}`,
    { email }
  );

  if (isSuccessResponse(response)) {
    console.log('Email change successful:', response.data.message);
    setModalOpen && setModalOpen(false);
  }
  return response;
}

type PasswordChangeData = {
  message: string;
};

async function handlePasswordChangeApi(
  password: string,
  userId: number,
  setModalOpen?: (open: boolean) => void
): Promise<ApiResponse<PasswordChangeData>> {
  const result = await apiRequest<PasswordChangeData>(
    'put',
    `http://localhost:3000/api/password/${userId}`,
    { password }
  );

  if (isSuccessResponse(result)) {
    console.log('Password change successful:', result.data.message);
    setModalOpen && setModalOpen(false);
  } else {
    console.error('Password change failed:', result.message);
  }
  return result;
}

type AccountDeleteData = {
  message: string;
};

async function handleAccountDeleteApi(
  userId: number,
  setModalOpen?: (open: boolean) => void
): Promise<ApiResponse<AccountDeleteData>> {
  const response = await apiRequest<AccountDeleteData>(
    'delete',
    `http://localhost:3000/api/user/${userId}`
  );

  if (isSuccessResponse(response) && setModalOpen) setModalOpen(false);
  return response;
}

type AdminDeleteData = {
  message: string;
};

async function handleAdminDeleteApi(
  adminId: number,
  setModalOpen?: (open: boolean) => void
): Promise<ApiResponse<AdminDeleteData>> {
  const response = await apiRequest<AdminDeleteData>(
    'delete',
    `http://localhost:3000/api/admins/delete/${adminId}`
  );

  if (isSuccessResponse(response) && setModalOpen) setModalOpen(false);
  return response;
}

type LockToggleData = {
  message: string;
};

async function handleLockToggleApi(
  userId: number,
  locked: boolean,
  onSuccess?: () => Promise<void> | void
): Promise<ApiResponse<LockToggleData>> {
  const response = await apiRequest<LockToggleData>(
    'put',
    `http://localhost:3000/api/user_lock/${userId}`,
    { locked }
  );

  if (isSuccessResponse(response) && onSuccess) await onSuccess();
  return response;
}

type AdminCreateData = {
  message: string;
  adminId: number;
};

async function handleAdminCreateApi(
  email: string,
  password: string,
  onSuccess?: () => Promise<void> | void
): Promise<ApiResponse<AdminCreateData>> {
  const response = await apiRequest<AdminCreateData>(
    'post',
    'http://localhost:3000/api/admin',
    { email, password }
  );

  if (isSuccessResponse(response) && onSuccess) await onSuccess();
  return response;
}

type PasswordGenerateData = {
  password: string;
};

async function GeneratePassword(): Promise<ApiResponse<PasswordGenerateData>> {
  const response = await apiRequest<PasswordGenerateData>(
    'get',
    'http://localhost:3000/api/createPassword'
  );
  return response;
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
}: ModalAccountAddProps): JSX.Element {
  return (
    <TemplateModal title="Add Account">
      <div className="divider divider-primary"></div>
      <div className="flex flex-col gap-2 justify-center mt-4">
        <EmailInput
          value={email || ''}
          onChange={(e) => onEmailChange(e)}
          onError={(error) => errorEmail && errorEmail(error)}
        />
        <PasswordInput
          value={password || ''}
          onChange={(e) => onPasswordChange(e)}
          placeholder="Password"
          onError={(error) => errorPassword && errorPassword(error)}
        />
        <PasswordInput
          value={confirmPassword || ''}
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
            if (isSuccessResponse(generated)) {
              console.log(generated.data.password);
              onPasswordChange(generated.data.password);
              onConfirmPasswordChange(generated.data.password);
            } else {
              console.error('Password generation failed:', generated.message);
            }
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

interface ModalforAdminProps {
  onClose: () => void;
  email?: string;
  password?: string;
  errorEmail?: (hasError: boolean) => void;
  errorPassword?: (hasError: boolean) => void;
  onPasswordChange?: (value: string) => void;
  onEmailChange?: (value: string) => void;
  emailHasError?: boolean;
  passwordHasError?: boolean;
}

function ModalforAdmin({
  onClose,
  email,
  password,
  errorEmail,
  errorPassword,
  onPasswordChange,
  onEmailChange,
  emailHasError,
  passwordHasError,
}: ModalforAdminProps): JSX.Element {
  return (
    <TemplateModal title="Create Admin Account">
      <div className="flex flex-col gap-2 justify-center mt-4">
        <EmailInput
          value={email || ''}
          onChange={(e) => onEmailChange && onEmailChange(e)}
          onError={errorEmail}
        />
        <PasswordInput
          value={password || ''}
          onChange={(e) => onPasswordChange && onPasswordChange(e)}
          placeholder="Admin Password"
          onError={errorPassword}
        />
        <Button
          onClick={async () => {
            const generated = await GeneratePassword();
            if (!isSuccessResponse(generated)) {
              console.error('Password generation failed:', generated.message);
              return;
            } else {
              onPasswordChange && onPasswordChange(generated.data.password);
            }
          }}
          w="sm:w-28 w-28"
          border="#3B82F6"
        >
          <>
            <FaKey size={16} className="mr-1" /> Generate
          </>
        </Button>
        <div className="divider divider-primary"></div>
        <div className="flex flex-row gap-2 justify-center mt-4">
          <Button
            onClick={async () => {
              try {
                await handleAdminCreateApi(email || '', password || '');
                if (onClose) onClose();
              } catch (err) {
                console.error('Create admin account failed', err);
              }
            }}
            disabled={emailHasError || passwordHasError || !email || !password}
            w="sm:w-auto w-12"
            border="#3B82F6"
          >
            Create
          </Button>
          <Button w="sm:w-auto w-12" border="#FF0000" onClick={onClose}>
            X
          </Button>
        </div>
      </div>
    </TemplateModal>
  );
}

interface ModalAccountDeleteProps {
  setDeleting: (deleting: boolean) => void;
  selectedUser: User;
  onSaved?: () => Promise<void> | void;
}
function ModalAccountDelete({
  setDeleting,
  selectedUser,
  onSaved,
}: ModalAccountDeleteProps): JSX.Element {
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
            const response = await handleAccountDeleteApi(
              selectedUser.id,
              setDeleting
            );
            if (isSuccessResponse(response)) {
              if (onSaved) await onSaved();
            } else {
              console.log('Delete account failed:', response.message);
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

function ModalAdminDelete({
  setDeleting,
  selectedAdmin,
  onSaved,
}: {
  setDeleting: (deleting: boolean) => void;
  selectedAdmin: Admin;
  onSaved?: () => Promise<void> | void;
}): JSX.Element {
  return (
    <TemplateModal title="Delete Admin Account">
      <div className="divider divider-primary"></div>
      <p className="text-white text-center break-words">
        Are you sure you want to delete the admin account with following email:{' '}
        {selectedAdmin?.email}? This action cannot be undone.
      </p>
      <div className="divider divider-primary"></div>
      <div className="flex flex-row gap-2 justify-center mt-4">
        <Button
          onClick={async () => {
            const response = await handleAdminDeleteApi(
              selectedAdmin.id,
              setDeleting
            );
            if (isSuccessResponse(response)) {
              if (onSaved) await onSaved();
            } else {
              console.log('Delete admin failed:', response.message);
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
}: ModalPasswordChangeProps): JSX.Element {
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
              const response = await handleEmailChangeApi(email, userid);
              if (isSuccessResponse(response)) {
                if (onSaved) await onSaved();
              } else {
                return;
              }
              if (onSaved) await onSaved();
              onClose();
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
              const generated = await GeneratePassword();
              if (!isSuccessResponse(generated)) {
                console.error('Password generation failed:', generated.message);
                return;
              } else {
                onPasswordChange(generated.data.password);
                onConfirmPasswordChange(generated.data.password);
              }
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
              const response = await handlePasswordChangeApi(password, userid);
              if (!isSuccessResponse(response)) {
                console.error('Password change failed:', response.message);
                return;
              }
              if (onSaved) await onSaved();
              onClose();
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

function ModalUserView({
  user,
  onClose,
}: ModalUserViewProps): React.ReactElement | null {
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
  readonly id: number;
  readonly email: string;
  readonly weight: number; // in kg
  readonly height: number; // in cm
  readonly age: number; // in years
  readonly gender: 'male' | 'female';
  readonly activity_level: string;
  readonly goal: string;
  readonly bfp: number; // body fat percentage
  readonly waist: number; // in cm
  readonly hip: number; // in cm
  readonly bmi: number; // body mass index
  readonly calories: number; // daily caloric needs
  locked: boolean; // Kann sich ändern, also nicht readonly
}

interface Meal {
  readonly id: number;
  readonly user_id: number;
  readonly date: string;
  readonly name: string;
  readonly calories: number;
  readonly protein: number;
  readonly carbs: number;
  readonly fats: number;
}

interface Exercises {
  readonly id: number;
  readonly user_id: number;
  readonly workout_plan_id: number | null;
  readonly date: string;
  readonly name: string;
  readonly sets: number;
  readonly reps: number[];
  readonly weights: number[];
  readonly users: User;
  readonly workout_plans: WorkoutPlans | null;
}

interface WorkoutPlans {
  readonly id: number;
}

interface Admin {
  readonly id: number;
  readonly masterid: boolean;
  readonly email: string;
}

function Dashboard() {
  const [users, setUsers] = useState<readonly User[]>([]);
  const [exercises, setExercises] = useState<readonly Exercises[]>([]);
  const [meals, setMeals] = useState<readonly Meal[]>([]);
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
  const [isAdminView, setIsAdminView] = useState<boolean>(false);
  const [admins, setAdmins] = useState<readonly Admin[]>([]);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [isAdminDeleting, setIsAdminDeleting] = useState<boolean>(false);

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const handleConfirmPasswordChange = useCallback((value: string) => {
    setConfirmPassword(value);
  }, []);

  type UserResponse = {
    readonly users: readonly User[];
  };

  async function fetchUsers(): Promise<void> {
    const response = await apiRequest<UserResponse>(
      'get',
      'http://localhost:3000/api/users'
    );
    if (isSuccessResponse(response)) {
      setUsers(response.data.users);
    } else {
      setUsers([]);
    }
  }

  type AdminResponse = {
    readonly admins: readonly Admin[];
  };

  async function fetchAdmins(): Promise<void> {
    const response = await apiRequest<AdminResponse>(
      'get',
      'http://localhost:3000/api/admins'
    );

    if (isSuccessResponse(response)) {
      setAdmins(response.data.admins);
    } else {
      setAdmins([]);
    }
  }

  type MealResponse = {
    readonly meals: readonly Meal[];
  };

  async function fetchMeals(): Promise<void> {
    const response = await apiRequest<MealResponse>(
      'get',
      'http://localhost:3000/api/meals'
    );
    if (isSuccessResponse(response)) {
      setMeals(response.data.meals);
    } else {
      setMeals([]);
    }
  }

  type ExercisesResponse = {
    readonly exercises: readonly Exercises[];
  };

  async function fetchExercises(): Promise<void> {
    const response = await apiRequest<ExercisesResponse>(
      'get',
      'http://localhost:3000/api/exercises'
    );
    if (isSuccessResponse(response)) {
      setExercises(response.data.exercises);
    } else {
      setExercises([]);
    }
  }

  function AdminCard(admin: Admin): JSX.Element {
    return (
      <div className="card w-56 bg-black/10 backdrop-blur-md border border-white/20 shadow-xl">
        <h2 className="text-center text-blue-500">Admin</h2>
        <p className="text-center text-xs">Mail: {admin.email}</p>
        <div className="flex flex-row gap-2 m-2 items-center justify-center">
          <Button
            onClick={() => {
              setIsAdminDeleting(true);
              setSelectedAdmin(admin);
            }}
            w="w-11"
            border="#3B82F6"
          >
            <FaTrash size={20} />
          </Button>
        </div>
      </div>
    );
  }

  function UserCard(user: User, onView: () => void): JSX.Element {
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
          <Button
            onClick={async () => {
              const updatedLockedStatus = !user.locked;
              console.log(
                `Toggling lock status for user ID ${user.id} to ${updatedLockedStatus}`
              );

              await handleLockToggleApi(
                user.id,
                updatedLockedStatus,
                fetchUsers
              );
              setSelectedUser({
                ...user,
                locked: updatedLockedStatus,
              });
            }}
            w="w-11"
            border="#3B82F6"
          >
            {user.locked ? <FaLock size={20} /> : <FaUnlock size={20} />}
          </Button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetchUsers();
    fetchAdmins();
    fetchMeals();
    fetchExercises();
  }, []);

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-gray-900 to-black ">
      <Header setIsAdminView={setIsAdminView} />
      <div className="items-center justify-center  flex flex-col pt-10 px-3 lg:px-2">
        <div className="grid grid-cols-1 gap-3 lg:gap-2 py-2 lg:grid-cols-3 items-center justify-center overflow-y-auto max-h-[95dvh]  px-3 lg:px-2 ">
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

          <TemplateCards title="Admin overview">
            <div className="flex top-0 left-0 w-full justify-end mb-0">
              <Button
                onClick={() => {
                  setIsAdminView(true);
                }}
                w="sm:w-auto w-10"
                border="#3B82F6"
              >
                <FaPlus size={12} />
              </Button>
            </div>
            <div className="divider divider-primary">
              Registered Admins: {admins.length}
            </div>
            <div className="flex flex-col items-center space-y-2 w-full overflow-y-auto max-h-[20dvh] lg:max-h-[50dvh]">
              {admins.map((a, index) => (
                <div key={a.id || index} className="mb-2">
                  {AdminCard(a)}
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
      {isEditing && selectedUser && (
        <ModalPasswordChange
          email={Email}
          password={Password}
          confirmPassword={ConfirmPassword}
          onPasswordChange={handlePasswordChange}
          onConfirmPasswordChange={handleConfirmPasswordChange}
          onEmailChange={handleEmailChange}
          onClose={() => setIsEditing(false)}
          userid={selectedUser.id}
          onSaved={fetchUsers}
          errorPassword={(error) => setPasswordError(error)}
          errorConfirmPassword={(error) => setConfirmPasswordError(error)}
          errorEmail={(error) => setEmailError(error)}
          emailHasError={emailError}
          passwordHasError={passwordError}
          confirmPasswordHasError={confirmPasswordError}
        />
      )}
      {isDeleting && selectedUser && (
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
      {isAdminView && (
        <ModalforAdmin
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onClose={() => setIsAdminView(false)}
          errorEmail={(error) => setEmailError(error)}
          errorPassword={(error) => setPasswordError(error)}
          emailHasError={emailError}
          passwordHasError={passwordError}
          email={Email}
          password={Password}
        />
      )}

      {isAdminDeleting && selectedAdmin && (
        <ModalAdminDelete
          setDeleting={setIsAdminDeleting}
          selectedAdmin={selectedAdmin}
          onSaved={() => {
            setSelectedAdmin(null);
            fetchAdmins();
          }}
        />
      )}
    </div>
  );
}

export default Dashboard;
