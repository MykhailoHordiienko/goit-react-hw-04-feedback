import PropTypes from 'prop-types';
import { Button, Div } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ handleClick, options }) => {
  return (
    <>
      <Div>
        {options.map(el => {
          return (
            <Button
              key={el}
              type="button"
              name={el}
              onClick={e => handleClick(e.currentTarget.name)}
            >
              {el}
            </Button>
          );
        })}
      </Div>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
