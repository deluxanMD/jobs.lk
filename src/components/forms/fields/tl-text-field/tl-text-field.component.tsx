import { InputLabel, Stack, TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type Props = TextFieldProps;

const TlTextField = ({ name, label, ...rest }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack spacing={1}>
          <InputLabel>{label}</InputLabel>
          <TextField {...field} {...rest} error={!!error} size="small" helperText={error?.message} />
        </Stack>
      )}
    />
  );
};

export default TlTextField;
