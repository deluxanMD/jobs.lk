// import { DevTool } from '@hookform/devtools';
import { Box, BoxProps, Stack } from '@mui/material';
import { FormProvider } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  formMethods: any;
  'data-testid'?: string;
  devTool?: boolean;
} & BoxProps &
  React.HTMLProps<HTMLFormElement>;

const TalentoForm = ({ children, formMethods, 'data-testid': dataTestId = 'TalentoForm', ...rest }: Props) => {
  return (
    <FormProvider {...formMethods}>
      <Stack spacing={2}>
        <Box component="form" data-testid={dataTestId} {...rest}>
          {children}
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default TalentoForm;
