import { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map(option => {
          return (
            <button
              className={css.button}
              type="button"
              key={option}
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          );
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
