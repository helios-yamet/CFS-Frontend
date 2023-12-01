
import { detailReviewKey } from "../constants";
import {
  Label,
  FaceRating,
  SubmitButton,
  InputBox,
  BoxContainer,
} from "../components";

export const ReviewPage = ( props ) => {
  const { rating, setRating, review, setReview, onSubmit, button, logo} = props;

  const onClick = () => {
    if(
      rating.cleanliness &&
      rating.friendliness &&
      rating.price &&
      rating.quality &&
      rating.wait
    ) {
      onSubmit();
    } else {
      alert("Please rate the services.");
    }
  }

  return (
    <BoxContainer>
      <br />
      {logo !== null && <img src={logo} style={{width: '350px'}} alt="logo" />}
      <br />
      <br />
      <Label text="We will use your valuable feedback to improve our service and make the overall experience better." />
      <Label text="Please show us how you feel about each part of our service by selecting an expression:" />
      
      { detailReviewKey.map(val => 
        <FaceRating
          text={val.text}
          rkey={val.rkey}
          value={rating}
          func={setRating}
        />
      )}

      <InputBox value={review} func={setReview} multiline placeholder="Additional comments or suggestions"/>

      <SubmitButton onClick={onClick} button={button} >
        Submit
      </SubmitButton>
    </BoxContainer>
  );
};