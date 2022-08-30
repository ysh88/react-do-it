import React, { useContext } from 'react';
import { ModalContext2 } from './ModalContext';
import withStyles, { css } from '../04/withStyles';

function Modal({ styles, children }) {
  return (
    <>
      <div {...css(styles.overlay)}>
        <div {...css(styles.wrapper)}>
          <div {...css(styles.container)}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default withStyles(({ color, unit }) => ({
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  wrapper: {
    verticalAlign: 'middle',
  },
  container: {
    margin: '40px auto 0px',
    padding: unit * 4,
    backgroundColor: color.white,
    width: 400,
  },
}))(Modal);
