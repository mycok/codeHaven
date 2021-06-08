import bcrypt from 'bcryptjs';

import { User } from '../schema';

const saltRounds = 10;

export type UserResult = {
    user?: Pick<User, 'username' | 'email' | 'confirmed' | 'isDisabled'>
    validationErrors?: Array<string>
}

export type RegisterUserParams = {
    username: string
    email: string
    password: string
}

export async function register(registerUserParams: RegisterUserParams): Promise<UserResult> {
  const { username, email, password } = registerUserParams;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ username, email, password: hashedPassword }).save();

  return { user };
}
