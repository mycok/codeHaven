import { Request, Response, NextFunction } from 'express';
import { ValidationResult } from './types';

export function isPasswordValid(req: Request, res: Response, next: NextFunction):
Response<ValidationResult> | void {
  const { body: { password } } = req;
  const re = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  );
  if (!re.test(password)) {
    return res.status(400).json({
      message: 'Password must be atleast 8 characters with at least 1 special character, 1 cap letter, and 1 number',
      isValid: false,
    });
  }

  return next();
}
