import {
  Label,
  SubmitButton,
  BoxContainer,
} from "../components";

export const ConfirmPage = ( props ) => {
  const { onSubmit } = props;
  const onClick = () => {
    onSubmit();
  }
  return (
    <BoxContainer>
      <Label text="Successed! 🙂" />
      <Label text="We appreciate your feedback and 5-star rating! Our team aims to make our customers happy. Thank you. 🙂" />

      <SubmitButton onClick={onClick}>
      Confirm
      </SubmitButton>
    </BoxContainer>
  );
};