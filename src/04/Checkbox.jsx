import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

function Checkbox({ name, autoFocus, checked, errorMessage, label, styles, children, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  });
  function handleClick(e) {
    onChange(name, e.target.checked);
  }
  return (
    <>
      <label>
        {label}
        <div>
          <input ref={ref} type="checkbox" checked={checked && 'checked'} onClick={handleClick} />
          {children}
        </div>
        {errorMessage && (
          <div>
            <span {...css(styles.errorText)}>{errorMessage}</span>
          </div>
        )}
      </label>
    </>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(Checkbox);
