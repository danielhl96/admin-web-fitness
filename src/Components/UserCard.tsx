import { FaEdit, FaEye, FaLock, FaTrash, FaUnlock } from 'react-icons/fa';
import { User } from '../types';
import Button from './Button';
import { handleLockToggle } from '../utils/api';
import isSuccessResponse from '../utils/isSuccessResponse';
// This is a card component that displays user information and provides buttons for viewing, editing, deleting, and locking/unlocking the user account.
// It accepts props for the user object, functions to set the selected user, editing state, deleting state, notification manager state,
// and a function to update the users list.
function UserCard(
  user: User,
  setSelectedUser: (user: User) => void,
  setIsEditing: (editing: boolean) => void,
  setIsDeleting: (deleting: boolean) => void,
  setStateNotifyManager: (state: {
    title: string;
    message: string;
    type: 'success' | 'error';
  }) => void,
  setUsers: React.Dispatch<React.SetStateAction<readonly User[]>>,
  onView: () => void
): JSX.Element {
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
            setSelectedUser(user);
            setIsEditing(true);
          }}
          w="w-11"
          border="#3B82F6"
        >
          <FaEdit size={20} />
        </Button>
        <Button
          onClick={() => {
            setSelectedUser(user);
            setIsDeleting(true);
          }}
          w="w-11"
          border="#3B82F6"
        >
          <FaTrash size={20} />
        </Button>
        <Button
          onClick={async () => {
            const updatedLockedStatus = !user.locked;

            const response = await handleLockToggle(
              user.id,
              updatedLockedStatus
            );

            if (!isSuccessResponse(response)) {
              console.error('Failed to toggle lock status:', response.message);
              return;
            }

            setStateNotifyManager({
              title: 'Success',
              message: response.data.message,
              type: 'success',
            });

            // Update the users list to reflect the change immediately
            setUsers((prevUsers) =>
              prevUsers.map((u) =>
                u.id === user.id ? { ...u, locked: updatedLockedStatus } : u
              )
            );
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

export default UserCard;
