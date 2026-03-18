import Button from './Button.tsx';
import EmailInput from './emailinput.tsx';
import PasswordInput from './passwordinput.tsx';
import { FaKey } from 'react-icons/fa';
import TemplateModal from './TemplateModal.tsx';
import { ModalAccountAddProps } from '../types.ts';
import { handleCreateUser, handleGeneratePassword } from '../utils/api.ts';
import isSuccessResponse from '../utils/isSuccessResponse.tsx';
import useUserCredential from '../utils/useUserCredential.tsx';
//Break in components to avoid bloating the dashboard component.
// This component is used to add a new account.
// It contains a form with inputs for email, password, and confirm password.
// It also has a button to generate a random password and a button to create the account.
// The component is styled with Tailwind CSS and has a glassmorphism effect.
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
            const generated = await handleGeneratePassword();
            if (isSuccessResponse(generated)) {
              handleChange('password', generated.data.password);
              handleChange('confirmPassword', generated.data.password);
            } else {
              setStateNotifyManager({
                title: 'Error',
                message: 'Password generation failed',
                type: 'error',
              });
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

                if (!isSuccessResponse(response)) {
                  setStateNotifyManager({
                    title: 'Error',
                    message: 'Account creation failed',
                    type: 'error',
                  });

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
                setStateNotifyManager({
                  title: 'Error',
                  message: 'Account creation failed',
                  type: 'error',
                });
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

export default ModalAccountAdd;
