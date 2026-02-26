import { FaTrash } from 'react-icons/fa';
import { Admin } from './types';
import Button from './Button';
function AdminCard(
  admin: Admin,
  setIsAdminDeleting: (deleting: boolean) => void,
  setSelectedAdmin: (admin: Admin) => void
): JSX.Element {
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

export default AdminCard;
