export function validateEmail(email: string) {
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailIsValid) {
    throw new Error('Invalid email format');
  }
}
