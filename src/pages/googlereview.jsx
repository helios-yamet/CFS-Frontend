import { Label, SubmitButton, BoxContainer } from "../components";

export const GoogleReviewPage = (props) => {
  const { onSubmit, hasGoogle } = props;

  const onClick = () => {
    window.open(
      "http://search.google.com/local/writereview?placeid=ChIJQU8OXXDYQIYRY7y5o327fiA"
    );
    onSubmit();
  };

  return (
    <BoxContainer>
      <Label text="We appreciate your feedback and 5-star rating! Our team aims to make our customers happy. Thank you. 🙂" />
      <br />
      {hasGoogle && (
        <>
          <Label text="Please also leave a public review on Google, so everyone can hear about what you liked.👇" />
          <SubmitButton onClick={onClick}>Review on Google</SubmitButton>
        </>
      )}
    </BoxContainer>
  );
};
