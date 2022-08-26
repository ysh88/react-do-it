import React, { useState } from 'react';
import Counter from './Counter';

function App(props) {
  const [{ count }, setData] = useState({ count: 1 });
  function increaseCount() {
    setData({ count: count + 1 });
  }
  return (
    <div>
      <Counter count={count} />
    </div>
  );
}

export default App;
