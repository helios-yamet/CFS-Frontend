import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { detailReviewRating } from "../constants";
import { modify, send } from "../redux/actions";
// import LogoIcon from "../assets/images/logo.png"
import {
  Homepage,
  GoogleReviewPage,
  ReviewPage,
  InfoPage,
  ConfirmPage,
} from "./";
import {
  // LinkItem,
  // DrawerHeader,
  PageContainer,
  PageBox,
  Label,
  SubmitButton,
} from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { exists } from "../redux/actions/user";

export const ClientPage = () => {
  const navigate = useNavigate();

  const params = useParams();
  const status = useSelector((state) => state.status);
  // const company = useSelector(state => state.company);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [exist, setExist] = useState(0);
  const [google, setGoogle] = useState("");

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [drating, setDRating] = useState(detailReviewRating);
  const [dreview, setDReview] = useState("");

  const [infoID, setInfoID] = useState("");
  const [sign, setSign] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmitReview = () => {
    send(
      {
        company: params.id,
        rating: rating,
        review: review,
        review_score: drating,
        review_text: dreview,
      },
      (id) => {
        setInfoID(id);
        dispatch({ type: "Status", payload: 3 });
      }
    );
  };
  const onSubmitConfirm = () => {
    dispatch({
      type: "Status",
      payload: 0,
    });
  };
  const onSubmitInfo = () => {
    modify(
      {
        id: infoID,
        name: sign,
        email: email,
        phone: phone,
      },
      () => {
        dispatch({ type: "Status", payload: 4 });
      }
    );
  };

  useEffect(() => {
    console.log(status);
  }, [status]);

  useEffect(() => {
    exists(
      params.id,
      (result) => setExist(result + 1),
      (result) => setGoogle(result)
    );
  }, [params.id]);

  return (
    <PageContainer>
      <PageBox>
        {/* <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/"><img src={LogoIcon} alt="Logo" /></LinkItem>
        </DrawerHeader> */}
        {status === 0 && exist === 2 && (
          <Homepage
            rating={rating}
            setRating={setRating}
            review={review}
            setReview={setReview}
          />
        )}
        {status === 1 && exist === 2 && (
          <GoogleReviewPage hasGoogle={google} onSubmit={onSubmitReview} />
        )}
        {status === 2 && exist === 2 && (
          <ReviewPage
            rating={drating}
            setRating={setDRating}
            review={dreview}
            setReview={setDReview}
            onSubmit={onSubmitReview}
          />
        )}
        {status === 3 && exist === 2 && (
          <InfoPage
            name={sign}
            setName={setSign}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            onSubmit={onSubmitInfo}
          />
        )}
        {status === 4 && exist === 2 && (
          <ConfirmPage onSubmit={onSubmitConfirm} />
        )}
        {exist === 1 && (
          <>
            <Label text="Oops ! Cannot find page" />
            <SubmitButton
              onClick={() => {
                navigate("/");
              }}
            >
              Go to homepage
            </SubmitButton>
          </>
        )}
      </PageBox>
    </PageContainer>
  );
};
