export function validatePassword(password: string) {
  const passwordIsValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*'])[A-Za-z\d!@#$%^&*']{8,}$/.test(
      password
    );
  if (!passwordIsValid) {
    throw new Error(
      "Password must be at least 8 characters long and contain at least one letter, one number, and one special character (!@#$%^&*')"
    );
  }
}
