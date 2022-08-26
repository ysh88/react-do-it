import React from 'react';

function Counter2({count, onAdd}) {
  return (
    <div>
      현재 카운트 : {count}
      <button onClick={onAdd}>+</button>
    </div>
  );
}

export default Counter2;