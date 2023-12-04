import {
  InputBox,
  InputBoxPhone,
  Label,
  SubmitButton,
  BoxContainer,
} from "../components";

export const InfoPage = ( props ) => {
  const { name, setName, email, setEmail, phone, setPhone, onSubmit, button, logo } = props;
  const onClick = () => {
    onSubmit();
  }

  return (
    <BoxContainer>
      <br />
      {logo !== null && <img src={logo} style={{width: '350px'}} alt="logo" />}
      <br />
      <br />
      <Label text="If you want the manager to follow up with you, please leave your contact information. (optional)" />
      <Label text="" />

      <Label text="Name" />
      <InputBox value={name} func={setName} regexp={/^[a-zA-Z ]+$/} />

      <Label text="Email" />
      <InputBox value={email} func={setEmail} regexp={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/} />

      <Label text="Phone" />
      <InputBoxPhone value={phone} func={setPhone} regexp={/^[+\-() \d]{10,}$/} />

      <SubmitButton onClick={onClick} color={button}>
        DONE
      </SubmitButton>
    </BoxContainer>
  );
};