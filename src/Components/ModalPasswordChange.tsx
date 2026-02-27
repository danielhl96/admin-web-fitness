import Button from './Button';
import TemplateModal from './TemplateModal.tsx';
import { ModalPasswordChangeProps } from '../types';
import {
  handleEmailChange,
  handleGeneratePassword,
  handlePasswordChange,
} from '../utils/api';
import isSuccessResponse from '../utils/isSuccessResponse';
import { FaKey } from 'react-icons/fa';
import EmailInput from './emailinput.tsx';
import PasswordInput from './passwordinput.tsx';
import useUserCredential from '../utils/useUserCredential.tsx';

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
export default ModalPasswordChange;
