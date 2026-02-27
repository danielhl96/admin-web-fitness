import Button from './Button';
import TemplateModal from './TemplateModal.tsx';
import { ModalAdminDeleteProps } from '../types';
import { handleAdminDelete } from '../utils/api';
import isSuccessResponse from '../utils/isSuccessResponse';

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
export default ModalAdminDelete;
