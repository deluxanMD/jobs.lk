import { Grid, Stack, Typography } from '@mui/material';
import AuthWrapper from '../AuthWrapper';
import { Link } from 'react-router-dom';
import LoginForm from 'components/forms/login-form/login-form.component';
import TalentoForm from 'components/forms/talento-form/talento-form.component';
import { useLoginForm } from 'components/forms/login-form/login-form.hooks';
import { LoadingButton } from '@mui/lab';

const LoginPage = () => {
  const formMethods = useLoginForm();

  const submit = async (formData) => {
    console.log(formData, formMethods.formState.errors);
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <TalentoForm formMethods={formMethods}>
            <LoginForm />
            <LoadingButton variant="contained" fullWidth type="submit" sx={{ mt: 2 }} onClick={formMethods.handleSubmit(submit)}>
              Sign In
            </LoadingButton>
          </TalentoForm>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default LoginPage;
