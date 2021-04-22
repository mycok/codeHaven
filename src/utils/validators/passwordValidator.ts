import { ValidationTestResult } from './validationType';

export function isPasswordValid(password: string): ValidationTestResult {
  const passwordTestResult: ValidationTestResult = {
    message: '',
    isValid: true,
  };

  const strongPassword = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  );
  if (!strongPassword.test(password)) {
    passwordTestResult.message = 'Password must be atleast 8 characters with at least 1 special character, 1 cap letter, and 1 number';
    passwordTestResult.isValid = false;
  }

  return passwordTestResult;
}
