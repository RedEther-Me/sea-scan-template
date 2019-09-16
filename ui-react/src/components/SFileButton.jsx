import React from 'react';
import PropTypes from 'prop-types';

const SFileButton = props => {
  const { id, label, accept, multiple, onChange, disabled } = props;

  return (
    <label
      htmlFor={id}
      tabIndex="0"
      className="btn btn-primary btn-lg"
      aria-label={label}
      role="button"
    >
      {label}
      <input
        id={id}
        type="file"
        accept={accept}
        hidden
        multiple={multiple}
        onChange={onChange}
        disabled={disabled} />
    </label>
  );
};

SFileButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

SFileButton.defaultProps = {
  accept: '*',
  multiple: false,
  disabled: false,
};

export default SFileButton;
