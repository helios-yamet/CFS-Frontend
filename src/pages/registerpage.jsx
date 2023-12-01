import { useEffect, useState } from "react";
import LogoIcon from "../assets/images/logo.png";
import {
  BoxContainer,
  DrawerHeader,
  InputBox,
  Label,
  LinkItem,
  PageBox,
  PageContainer,
  SubmitButton,
} from "../components";
import { SignIn, SignUp } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const company = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRePass] = useState("");

  const getValue = () => {
    return {
      name: name,
      email: email,
      pass: pass,
    };
  };
  const onSignin = () => {
    if (state) setState(false);
    else dispatch(SignIn(getValue()));
  };
  const onSignup = () => {
    if (!state) setState(true);
    else {
      if (pass === repass) dispatch(SignUp(getValue()));
      else alert("Please input password correctly.");
    }
  };

  useEffect(() => {
    if (company.length) {
      navigate("/" + company + "/admin");
    }
  }, [navigate, company]);

  useEffect(() => {
    setState(false);
  }, []);

  return (
    <PageContainer>
      <PageBox>
        <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/admin">
            <img src={LogoIcon} alt="Logo" />
          </LinkItem>
        </DrawerHeader>
        <BoxContainer>
          <Label text="Company Name" />
          <InputBox value={name} func={setName} />
          <Label text="Email" />
          <InputBox value={email} func={setEmail} />
          <Label text="Password" />
          <InputBox value={pass} func={setPass} password />
          {state === true && (
            <>
              <Label text="Password Confirm" />
              <InputBox value={repass} func={setRePass} password />
            </>
          )}
          {state === false && (
            <SubmitButton onClick={onSignin}> SignIn </SubmitButton>
          )}
          <SubmitButton onClick={onSignup}> SignUp </SubmitButton>
          {state === true && (
            <SubmitButton onClick={onSignin}> SignIn </SubmitButton>
          )}
        </BoxContainer>
      </PageBox>
    </PageContainer>
  );
};
