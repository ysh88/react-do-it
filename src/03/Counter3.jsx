import React, { useState } from 'react';

function Counter3(props) {
  const[count, setCount]=useState(0);
  function increaseCount() {
    setCount(count+1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <>
      <div>
      현재카운트 : {count}
      <button onClick={increaseCount} onMouseOut={resetCount}>+</button>

      </div>
      버튼 밖으로 커서가 움직이면 0으로 초기화
    </>
  );
}

export default Counter3;