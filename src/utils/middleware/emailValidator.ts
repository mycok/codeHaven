import { Request, Response, NextFunction } from 'express';
import { ValidationResult } from './types';

export function isEmailValid(req:Request, res: Response, next: NextFunction):
Response<ValidationResult> | void {
  const { body: { email } } = req;
  const re = /^[\w.+]+@\w+\.\w+$/;

  if (!re.test(email.trim())) {
    return res.status(400).json({
      message: 'Please provide a valid email',
      isValid: false,
    });
  }

  return next();
}
