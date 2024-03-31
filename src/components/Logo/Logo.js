// material-ui
import { Typography, Stack } from '@mui/material';

// icon
import logo from 'assets/images/icons/suitcase.png';

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <img src={logo} alt="Mantis" width="30" />
      <Typography variant="h4">Talento</Typography>
    </Stack>
  );
};

export default Logo;
