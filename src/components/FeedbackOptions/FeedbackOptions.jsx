import { Button, Div } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ handleClick }) => {
  return (
    <>
      <Div>
        <Button
          type="button"
          name="good"
          onClick={e => handleClick(e.currentTarget.name)}
        >
          Good
        </Button>
        <Button
          type="button"
          name="neutral"
          onClick={e => handleClick(e.currentTarget.name)}
        >
          Neutral
        </Button>
        <Button
          type="button"
          name="bad"
          onClick={e => handleClick(e.currentTarget.name)}
        >
          Bad
        </Button>
      </Div>
    </>
  );
};
