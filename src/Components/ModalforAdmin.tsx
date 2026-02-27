import Button from './Button.tsx';
import EmailInput from './emailinput.tsx';
import PasswordInput from './passwordinput.tsx';
import { FaKey } from 'react-icons/fa';
import TemplateModal from './TemplateModal.tsx';
import { ModalforAdminProps } from '../types.ts';
import { handleAdminCreate, handleGeneratePassword } from '../utils/api.ts';
import isSuccessResponse from '../utils/isSuccessResponse.tsx';
import useUserCredential from '../utils/useUserCredential.tsx';

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

export default ModalforAdmin;
