import TemplateModal from './TemplateModal.tsx';
import Button from './Button';
import { ModalAccountDeleteProps } from '../types';
import { handleAccountDelete } from '../utils/api';
import isSuccessResponse from '../utils/isSuccessResponse';
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
            console.log(selectedUser.id);
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
export default ModalAccountDelete;
