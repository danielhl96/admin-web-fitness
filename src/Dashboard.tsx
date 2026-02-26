import Header from './Header.tsx';
import TemplateCards from './TemplateCards.tsx';
import React, { useCallback, useMemo } from 'react';
import { useEffect, useState } from 'react';
import Button from './Button.tsx';
import AdminCard from './AdminCard.tsx';
import { UI_STATE } from './types.ts';
import { NotifyProps } from './notify.tsx';
import { Admin, User, Meal, Exercises, UserCredentials } from './types.ts';
import {
  handleEmailChange,
  handlePasswordChange,
  handleAccountDelete,
  handleAdminDelete,
  handleAdminCreate,
  handleGeneratePassword,
  fetchAdmins,
  fetchExercises,
  fetchMeals,
  fetchUsers,
  handleCreateUser,
} from './api.ts';
import { FaPlus, FaKey } from 'react-icons/fa';
import Notify from './notify.tsx';
import EmailInput from './emailinput.tsx';
import PasswordInput from './passwordinput.tsx';
import UserCard from './UserCard.tsx';
import isSuccessResponse from './isSuccessResponse.tsx';
const NOTIFICATION_DURATION = 2000; // ms
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
  setStateNotifyManager: (notify: NotifyProps | null) => void;
}

function ModalAccountAdd({
  onSaved,
  setIsAddingAccount,

  errorPassword = () => {},
  errorConfirmPassword = () => {},
  errorEmail = () => {},
  emailHasError,
  passwordHasError,
  confirmPasswordHasError,
  setStateNotifyManager,
}: ModalAccountAddProps): JSX.Element {
  const { userCredentials, handleChange, resetUserCredentials } =
    useUserCredential();
  return (
    <TemplateModal title="Add Account">
      <div className="divider divider-primary"></div>
      <div className="flex flex-col gap-2 justify-center mt-4">
        <EmailInput
          value={userCredentials.email || ''}
          onChange={(e) => handleChange('email', e)}
          onError={(error) => errorEmail && errorEmail(error)}
        />
        <PasswordInput
          value={userCredentials.password || ''}
          onChange={(e) => handleChange('password', e)}
          placeholder="Password"
          onError={(error) => errorPassword && errorPassword(error)}
        />
        <PasswordInput
          value={userCredentials.confirmPassword || ''}
          onChange={(e) => handleChange('confirmPassword', e)}
          placeholder="Confirm Password"
          onError={(error) =>
            errorConfirmPassword && errorConfirmPassword(error)
          }
        />
        <Button
          onClick={async () => {
            console.log('Generating password...');
            const generated = await handleGeneratePassword();
            if (isSuccessResponse(generated)) {
              console.log(generated.data.password);
              handleChange('password', generated.data.password);
              handleChange('confirmPassword', generated.data.password);
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
              userCredentials.email === '' ||
              userCredentials.password === '' ||
              userCredentials.confirmPassword === '' ||
              userCredentials.password !== userCredentials.confirmPassword ||
              Boolean(emailHasError) ||
              Boolean(passwordHasError) ||
              Boolean(confirmPasswordHasError)
            }
            onClick={async () => {
              try {
                const response = await handleCreateUser(
                  userCredentials.email || '',
                  userCredentials.password || ''
                );
                console.log('Create account response:', response);
                if (!isSuccessResponse(response)) {
                  console.error('Account creation failed:', response.message);
                  return;
                }
                setStateNotifyManager({
                  title: 'Success',
                  message: 'Account created successfully',
                  type: 'success',
                });

                if (onSaved) await onSaved();

                resetUserCredentials();

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
  setStateNotifyManager: (notify: NotifyProps | null) => void;
}

function ModalforAdmin({
  onClose,
  errorEmail,
  errorPassword,
  emailHasError,
  passwordHasError,
  setStateNotifyManager,
}: ModalforAdminProps): JSX.Element {
  const { userCredentials, handleChange, resetUserCredentials } =
    useUserCredential();
  return (
    <TemplateModal title="Create Admin Account">
      <div className="flex flex-col gap-2 justify-center mt-4">
        <EmailInput
          value={userCredentials.email || ''}
          onChange={(e) => handleChange('email', e)}
          onError={errorEmail}
        />
        <PasswordInput
          value={userCredentials.password || ''}
          onChange={(e) => handleChange('password', e)}
          placeholder="Admin Password"
          onError={errorPassword}
        />
        <Button
          onClick={async () => {
            const generated = await handleGeneratePassword();
            if (!isSuccessResponse(generated)) {
              console.error('Password generation failed:', generated.message);
              return;
            } else {
              handleChange('password', generated.data.password);
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
                await handleAdminCreate(
                  userCredentials.email || '',
                  userCredentials.password || ''
                );
                if (onClose) onClose();
                setStateNotifyManager({
                  title: 'Success',
                  message: 'Admin account created successfully',
                  type: 'success',
                });
                resetUserCredentials();
              } catch (err) {
                console.error('Create admin account failed', err);
                setStateNotifyManager({
                  title: 'Error',
                  message: 'Failed to create admin account',
                  type: 'error',
                });
              }
            }}
            disabled={
              emailHasError ||
              passwordHasError ||
              !userCredentials.email ||
              !userCredentials.password
            }
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
  setStateNotifyManager: (notify: NotifyProps | null) => void;
}
function ModalAccountDelete({
  setDeleting,
  selectedUser,
  onSaved,
  setStateNotifyManager,
}: ModalAccountDeleteProps): JSX.Element {
  return (
    <TemplateModal title="Delete Account">
      <div className="divider divider-primary"></div>
      <p className="text-white text-center break-words">
        Are you sure you want to delete the account with following email:{' '}
        {selectedUser?.email}? This action cannot be undone.
      </p>
      <div className="flex flex-row gap-2 justify-center mt-4">
        <Button
          onClick={async () => {
            const response = await handleAccountDelete(selectedUser.id);
            if (isSuccessResponse(response)) {
              if (onSaved) await onSaved();
              setDeleting(false);
              setStateNotifyManager({
                title: 'Success',
                message: response.data.message,
                type: 'success',
              });
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

interface ModalAdminDeleteProps {
  setDeleting: (deleting: boolean) => void;
  selectedAdmin: Admin;
  onSaved?: () => Promise<void> | void;
  setStateNotifyManager: (notify: NotifyProps | null) => void;
}

function ModalAdminDelete({
  setDeleting,
  selectedAdmin,
  onSaved,
  setStateNotifyManager,
}: ModalAdminDeleteProps): JSX.Element {
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
            const response = await handleAdminDelete(selectedAdmin.id);
            if (isSuccessResponse(response)) {
              if (onSaved) await onSaved();

              setStateNotifyManager({
                title: 'Success',
                message: response.data.message,
                type: 'success',
              });
            } else {
              setStateNotifyManager({
                title: 'Error',
                message: response.message,
                type: 'error',
              });
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
  userid: number;
  errorEmail?: (hasError: boolean) => void;
  errorPassword?: (hasError: boolean) => void;
  errorConfirmPassword?: (hasError: boolean) => void;
  emailHasError?: boolean;
  passwordHasError?: boolean;
  confirmPasswordHasError?: boolean;

  onClose: () => void;
  onSaved?: () => Promise<void> | void;
  setStateNotifyManager: (notify: NotifyProps | null) => void;
}

function ModalPasswordChange({
  onClose,
  userid,
  onSaved,
  errorEmail,
  errorPassword,
  errorConfirmPassword,
  emailHasError,
  passwordHasError,
  confirmPasswordHasError,
  setStateNotifyManager,
}: ModalPasswordChangeProps): JSX.Element {
  const { userCredentials, handleChange, resetUserCredentials } =
    useUserCredential();
  return (
    <TemplateModal title="Change Credentials">
      <div className="divider divider-primary"></div>
      <div className="flex flex-col space-y-2">
        <div className="flex gap-2 flex-row text-white text-sm">
          <EmailInput
            value={userCredentials.email}
            onChange={(value) => handleChange('email', value)}
            onError={errorEmail}
          />
          <Button
            disabled={userCredentials.email === '' || Boolean(emailHasError)}
            onClick={async () => {
              const response = await handleEmailChange(
                userCredentials.email,
                userid
              );
              if (isSuccessResponse(response)) {
                if (onSaved) await onSaved();
                setStateNotifyManager({
                  title: 'Success',
                  message: 'Email changed successfully',
                  type: 'success',
                });
                resetUserCredentials();
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
          value={userCredentials.password}
          onChange={(value) => handleChange('password', value)}
          placeholder="New Password"
          onError={errorPassword}
        />
        <div className="flex flex-row text-white text-sm gap-2">
          <PasswordInput
            value={
              userCredentials.confirmPassword
                ? userCredentials.confirmPassword
                : ''
            }
            onChange={(value) => handleChange('confirmPassword', value)}
            placeholder="Confirm New Password"
            onError={errorConfirmPassword}
          />

          <Button
            onClick={async () => {
              const generated = await handleGeneratePassword();
              if (!isSuccessResponse(generated)) {
                console.error('Password generation failed:', generated.message);
                return;
              } else {
                handleChange('password', generated.data.password);
                handleChange('confirmPassword', generated.data.password);
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
              userCredentials.password === '' ||
              userCredentials.password !== userCredentials.confirmPassword ||
              Boolean(passwordHasError) ||
              Boolean(confirmPasswordHasError)
            }
            onClick={async () => {
              const response = await handlePasswordChange(
                userCredentials.password,
                userid
              );
              if (!isSuccessResponse(response)) {
                console.error('Password change failed:', response.message);
                return;
              }
              if (onSaved) await onSaved();
              setStateNotifyManager({
                title: 'Success',
                message: 'Password changed successfully',
                type: 'success',
              });
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
  const activityLevel = useMemo(
    () => getActivityLevelString(user.activity_level),
    [user.activity_level]
  );
  const goalString = useMemo(() => getGoalString(user.goal), [user.goal]);
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
        <span>{activityLevel || 'N/A'}</span>
        <span className="font-bold">Goals:</span>
        <span>{goalString || 'N/A'}</span>
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

function Dashboard() {
  const [users, setUsers] = useState<readonly User[]>([]);
  const [exercises, setExercises] = useState<readonly Exercises[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isAddingAccount, setIsAddingAccount] = useState<boolean>(false);
  const [isAdminView, setIsAdminView] = useState<boolean>(false);
  const [admins, setAdmins] = useState<readonly Admin[]>([]);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [isAdminDeleting, setIsAdminDeleting] = useState<boolean>(false);
  const [userInterfaceState, setUserInterfaceState] = useState<
    UI_STATE<readonly User[]>
  >({
    type: 'loading',
  });
  const [adminInterfaceState, setAdminInterfaceState] = useState<
    UI_STATE<readonly Admin[]>
  >({
    type: 'loading',
  });
  const [exerciseInterfaceState, setExerciseInterfaceState] = useState<
    UI_STATE<readonly Exercises[]>
  >({
    type: 'loading',
  });
  const [mealInterfaceState, setMealInterfaceState] = useState<
    UI_STATE<readonly Meal[]>
  >({
    type: 'loading',
  });

  const [stateNotifyManager, setStateNotifyManager] =
    useState<NotifyProps | null>(null);

  const loadData = async () => {
    const results = await Promise.allSettled([
      fetchUsers(),
      fetchExercises(),
      fetchMeals(),
      fetchAdmins(),
    ]);

    const usersResponse =
      results[0].status === 'fulfilled' ? results[0].value : null;
    const exercisesResponse =
      results[1].status === 'fulfilled' ? results[1].value : null;
    const mealsResponse =
      results[2].status === 'fulfilled' ? results[2].value : null;
    const adminsResponse =
      results[3].status === 'fulfilled' ? results[3].value : null;

    if (usersResponse && isSuccessResponse(usersResponse)) {
      setUsers(usersResponse.data.users);
      setUserInterfaceState({
        type: 'success',
        data: usersResponse.data.users,
      });
    } else {
      setUserInterfaceState({ type: 'error', error: 'Failed to fetch users' });
    }

    if (exercisesResponse && isSuccessResponse(exercisesResponse)) {
      setExercises(exercisesResponse.data.exercises);
      setExerciseInterfaceState({
        type: 'success',
        data: exercisesResponse.data.exercises,
      });
    } else {
      setExerciseInterfaceState({
        type: 'error',
        error: 'Failed to fetch exercises',
      });
    }

    if (mealsResponse && isSuccessResponse(mealsResponse)) {
      setMealInterfaceState({
        type: 'success',
        data: mealsResponse.data.meals,
      });
    } else {
      setMealInterfaceState({
        type: 'error',
        error: 'Failed to fetch meals',
      });
    }

    if (adminsResponse && isSuccessResponse(adminsResponse)) {
      setAdmins(adminsResponse.data.admins);
      setAdminInterfaceState({
        type: 'success',
        data: adminsResponse.data.admins,
      });
    } else {
      setAdminInterfaceState({
        type: 'error',
        error: 'Failed to fetch admins',
      });
    }
  };

  const helpfetchUsers = useCallback(async () => {
    try {
      setUserInterfaceState({ type: 'loading' });
      const response = await fetchUsers();
      if (isSuccessResponse(response)) {
        setUsers(response.data.users);
        setUserInterfaceState({ type: 'success', data: response.data.users });
      } else {
        setUserInterfaceState({
          type: 'error',
          error: 'Failed to fetch users',
        });
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setUserInterfaceState({ type: 'error', error: 'Failed to fetch users' });
    }
  }, []);

  const helpfetchAdmins = useCallback(async () => {
    try {
      const response = await fetchAdmins();
      if (isSuccessResponse(response)) {
        setAdmins(response.data.admins);
        setAdminInterfaceState({ type: 'success', data: response.data.admins });
      } else {
        setAdminInterfaceState({
          type: 'error',
          error: 'Failed to fetch admins',
        });
      }
    } catch (err) {
      console.error('Error fetching admins:', err);
      setAdminInterfaceState({
        type: 'error',
        error: 'Failed to fetch admins',
      });
    }
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const handleViewUser = useCallback((u: User) => {
    setSelectedUser(u);
    setIsModalOpen(true);
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
              {userInterfaceState.type === 'success' &&
                users.map((u, index) => (
                  <div key={u.id || index} className="mb-2">
                    {UserCard(
                      u,
                      setSelectedUser,
                      setIsEditing,

                      setIsDeleting,
                      setStateNotifyManager,
                      setUsers,
                      () => handleViewUser(u)
                    )}
                  </div>
                ))}
              {userInterfaceState.type === 'loading' && (
                <div className="flex justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-white"></span>
                </div>
              )}
              {userInterfaceState.type === 'error' && (
                <p className="text-red-500 text-center">
                  {userInterfaceState.error}
                </p>
              )}
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
              {adminInterfaceState.type === 'success' &&
                adminInterfaceState.data.map((a, index) => (
                  <div key={a.id || index} className="mb-2">
                    {AdminCard(a, setIsAdminDeleting, setSelectedAdmin)}
                  </div>
                ))}
              {adminInterfaceState.type === 'loading' && (
                <div className="flex justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-white"></span>
                </div>
              )}
              {adminInterfaceState.type === 'error' && (
                <p className="text-red-500 text-center">
                  {adminInterfaceState.error}
                </p>
              )}
            </div>
          </TemplateCards>

          <TemplateCards title="Statistics Exercises">
            <div className="divider divider-primary">
              Logged Exercises: {exercises.length}
            </div>
            <div className="flex flex-col overflow-y-auto items-center w-full max-h-[20dvh] lg:max-h-[50dvh]">
              {exerciseInterfaceState.type === 'success' &&
                exerciseInterfaceState.data.map((e, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-white text-center text-xs">
                      {e.name} {e.weights.join('kg, ')}kg - Reps:{' '}
                      {e.reps.join(', ')}
                    </p>
                  </div>
                ))}
              {exerciseInterfaceState.type === 'loading' && (
                <div className="flex justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-white"></span>
                </div>
              )}
              {exerciseInterfaceState.type === 'error' && (
                <p className="text-red-500 text-center">
                  {exerciseInterfaceState.error}
                </p>
              )}
            </div>
          </TemplateCards>

          <TemplateCards title="Statistics Meals">
            <div className="divider divider-primary">
              Logged Meals:{' '}
              {mealInterfaceState.type === 'success'
                ? mealInterfaceState.data.length
                : 'No meals logged'}
            </div>
            <div className="flex flex-col  overflow-y-auto items-center w-full max-h-[20dvh] lg:max-h-[50dvh]">
              {mealInterfaceState.type === 'success' &&
                mealInterfaceState.data.map((e, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-white text-center text-xs">
                      {e.name} - {e.calories} kcal P: {e.protein}g, C: {e.carbs}
                      g F: {e.fats}g
                    </p>
                  </div>
                ))}
              {mealInterfaceState.type === 'loading' && (
                <div className="flex justify-center items-center">
                  <span className="loading loading-spinner loading-lg text-white"></span>
                </div>
              )}
              {mealInterfaceState.type === 'error' && (
                <p className="text-red-500 text-center">
                  {mealInterfaceState.error}
                </p>
              )}
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
      {stateNotifyManager && (
        <Notify
          title={stateNotifyManager?.title || ''}
          message={stateNotifyManager?.message || ''}
          type={stateNotifyManager?.type || 'success'}
          duration={NOTIFICATION_DURATION}
          onClose={() => setStateNotifyManager(null)}
        />
      )}
      {isEditing && selectedUser && (
        <ModalPasswordChange
          onClose={() => setIsEditing(false)}
          userid={selectedUser.id}
          onSaved={helpfetchUsers}
          errorPassword={(error) => setPasswordError(error)}
          errorConfirmPassword={(error) => setConfirmPasswordError(error)}
          errorEmail={(error) => setEmailError(error)}
          emailHasError={emailError}
          passwordHasError={passwordError}
          confirmPasswordHasError={confirmPasswordError}
          setStateNotifyManager={setStateNotifyManager}
        />
      )}
      {isDeleting && selectedUser && (
        <ModalAccountDelete
          setDeleting={setIsDeleting}
          selectedUser={selectedUser}
          onSaved={helpfetchUsers}
          setStateNotifyManager={setStateNotifyManager}
        />
      )}
      {isAddingAccount && (
        <ModalAccountAdd
          setIsAddingAccount={setIsAddingAccount}
          onSaved={helpfetchUsers}
          errorPassword={(error) => setPasswordError(error)}
          errorConfirmPassword={(error) => setConfirmPasswordError(error)}
          errorEmail={(error) => setEmailError(error)}
          emailHasError={emailError}
          passwordHasError={passwordError}
          confirmPasswordHasError={confirmPasswordError}
          setStateNotifyManager={setStateNotifyManager}
        />
      )}
      {isAdminView && (
        <ModalforAdmin
          onClose={() => {
            setIsAdminView(false);
            helpfetchAdmins();
          }}
          errorEmail={(error) => setEmailError(error)}
          errorPassword={(error) => setPasswordError(error)}
          emailHasError={emailError}
          passwordHasError={passwordError}
          setStateNotifyManager={setStateNotifyManager}
        />
      )}

      {isAdminDeleting && selectedAdmin && (
        <ModalAdminDelete
          setDeleting={setIsAdminDeleting}
          selectedAdmin={selectedAdmin}
          onSaved={() => {
            setSelectedAdmin(null);
            helpfetchAdmins();
          }}
          setStateNotifyManager={setStateNotifyManager}
        />
      )}
    </div>
  );
}

export default Dashboard;
