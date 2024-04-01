import { object, string } from 'yup';

export const loginFormSchema = object().shape({
  email: string().email().default('').required(),
  password: string().min(8).default('')
});
