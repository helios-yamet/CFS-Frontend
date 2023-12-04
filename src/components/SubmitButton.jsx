import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ClickButton = styled(Button)`
  padding: 0.6rem 0;
  margin-top : 8px;
  color : #FFF; 
  font-weight: 500;
  // background: red !important;
  border-radius: 10px;
  transition: null;
`;

export const SubmitButton = ( props ) => {
  const { onClick, children, color } = props;
  return (
    <>
      <ClickButton
        sx={{
          background: color, 
          ":hover":{
            backgroundColor: color
          }
        }}
        variant="contained"
        fullWidth
        disableElevation
        onClick={onClick}
      >
        { children }
      </ClickButton>
    </>
  )
}