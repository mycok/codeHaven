import { ValidationTestResult } from './validationType';

export function isEmailValid(email: string): ValidationTestResult {
  const emailTestResult: ValidationTestResult = {
    message: '',
    isValid: true,
  };

  const re = /^[\w.+]+@\w+\.\w+$/;

  if (!re.test(email)) {
    emailTestResult.message = 'Please provide a valid email';
    emailTestResult.isValid = false;
  }

  return emailTestResult;
}
