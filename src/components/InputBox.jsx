import { TextField } from "@mui/material";

export const InputBox = (props) => {
  const { value, func, multiline, password, placeholder } = props;

  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label=""
        placeholder={placeholder}
        multiline={multiline}
        type={password ? "password" : "text"}
        rows={5}
        fullWidth
        defaultValue=""
        value={value}
        color="primary"
        onChange={(event) => {
          func(event.target.value);
        }}
      />
    </>
  );
};
