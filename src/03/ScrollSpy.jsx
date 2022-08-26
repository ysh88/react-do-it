import React, { useRef, useEffect } from 'react';

function ScrollSpy(props) {
  const divEl = useRef(null);

  function checkPosition() {
    if (divEl.current.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    checkPosition();
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  });

  return (
    <div>
      <div ref={divEl}></div>
    </div>
  );
}

export default ScrollSpy;
