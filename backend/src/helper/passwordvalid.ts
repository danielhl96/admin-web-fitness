import { PASSWORD_MIN_LENGTH } from '../constants';
export function validatePassword(password: string) {
  const passwordIsValid = new RegExp(
    `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*'])[A-Za-z\\d!@#$%^&*']{${PASSWORD_MIN_LENGTH},}$`
  ).test(password);
  if (!passwordIsValid) {
    throw new Error(
      `Password must be at least ${PASSWORD_MIN_LENGTH} characters long and contain at least one letter, one number, and one special character (!@#$%^&*')`
    );
  }
}
