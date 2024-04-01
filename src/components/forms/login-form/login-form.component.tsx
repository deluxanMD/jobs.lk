import { Stack } from '@mui/material';
import TlTextField from '../fields/tl-text-field/tl-text-field.component';

const LoginForm = () => {
  return (
    <Stack spacing={1}>
      <TlTextField name="email" label="Email Address" data-testid="Login.Email" />
      <TlTextField name="password" label="Password" data-testid="Login.Password" />
    </Stack>
  );
};

export default LoginForm;
