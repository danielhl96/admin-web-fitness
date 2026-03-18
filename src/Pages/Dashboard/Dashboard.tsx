import Header from '../../Components/Header';
import TemplateCards from '../../Components/TemplateCards';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import Button from '../../Components/Button';
import AdminCard from '../../Components/AdminCard';
import { UI_STATE } from '../../types.ts';
import { NotifyProps } from '../../Components/notify';
import { Admin, User, Meal, Exercises } from '../../types.ts';
import {
  fetchAdmins,
  fetchExercises,
  fetchMeals,
  fetchUsers,
} from '../../utils/api';
import { FaPlus } from 'react-icons/fa';
import Notify from '../../Components/notify';
import ModalforAdmin from '../../Components/ModalforAdmin.tsx';
import ModalPasswordChange from '../../Components/ModalPasswordChange.tsx';
import UserCard from '../../Components/UserCard';
import isSuccessResponse from '../../utils/isSuccessResponse';
import ModalAccountAdd from '../../Components/ModalAccountAdd';
import ModalAccountDelete from '../../Components/ModalAccountDelete.tsx';
import ModalAdminDelete from '../../Components/ModalAdminDelete.tsx';
import ModalUserView from '../../Components/ModalUserView.tsx';

const NOTIFICATION_DURATION = 2000; // ms
// This is the main dashboard component that displays user management,
// admin overview, and statistics for exercises and meals.
// It fetches data from the API and manages the state for users, admins, exercises, meals, and UI states.
// The component also handles the logic for viewing user details, editing user information, adding new accounts, and deleting accounts.
// It uses various child components to display the data and modals for different actions.
function Dashboard() {
  // State for managing users data and UI state
  const [users, setUsers] = useState<readonly User[]>([]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // Modal visibility states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  // Error states for form validation
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  // Account and admin management states
  const [isAddingAccount, setIsAddingAccount] = useState<boolean>(false);
  const [isAdminView, setIsAdminView] = useState<boolean>(false);

  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [isAdminDeleting, setIsAdminDeleting] = useState<boolean>(false);
  // UI states for different data types
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

  // Notification state for displaying messages
  const [stateNotifyManager, setStateNotifyManager] =
    useState<NotifyProps | null>(null);

  // Function to load all data (users, exercises, meals, admins) from API
  const loadData = async () => {
    const results = await Promise.allSettled([
      fetchUsers(),
      fetchExercises(),
      fetchMeals(),
      fetchAdmins(),
    ]);

    console.log('Data fetch results:', results);
    const usersResponse =
      results[0].status === 'fulfilled' ? results[0].value : null;
    const exercisesResponse =
      results[1].status === 'fulfilled' ? results[1].value : null;
    const mealsResponse =
      results[2].status === 'fulfilled' ? results[2].value : null;
    const adminsResponse =
      results[3].status === 'fulfilled' ? results[3].value : null;

    if (usersResponse && isSuccessResponse(usersResponse)) {
      console.log('Fetched users:', usersResponse.data.users);
      setUsers(usersResponse.data.users);

      setUserInterfaceState({
        type: 'success',
        data: usersResponse.data.users,
      });
    } else {
      setUserInterfaceState({ type: 'error', error: 'Failed to fetch users' });
    }

    if (exercisesResponse && isSuccessResponse(exercisesResponse)) {
      console.log('Fetched exercises:', exercisesResponse.data.exercises);
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
      console.log('Fetched meals:', mealsResponse.data.meals);
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
      console.log('Fetched admins:', adminsResponse.data.admins);
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

  // Helper function to fetch users data
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

  // Load initial data on component mount
  useEffect(() => {
    loadData();
  }, []);

  // Handler to view user details
  const handleViewUser = useCallback((u: User) => {
    setSelectedUser(u);
    setIsModalOpen(true);
  }, []);

  // Render the dashboard UI
  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-gray-900 to-black ">
      <Header
        setIsAdminView={setIsAdminView}
        setIsUserView={setIsAddingAccount}
      />
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
              Registered Users:{' '}
              {userInterfaceState.type === 'success'
                ? userInterfaceState.data.length
                : 0}
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
              Registered Admins:{' '}
              {adminInterfaceState.type === 'success'
                ? adminInterfaceState.data.length
                : 0}
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
              Logged Exercises:{' '}
              {exerciseInterfaceState.type === 'success'
                ? exerciseInterfaceState.data.length
                : 0}
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
      {/* Conditional rendering of modals based on state */}
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
