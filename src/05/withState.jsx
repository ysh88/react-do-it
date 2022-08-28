import React from 'react';
import withState from 'recompose/withState';
import Button from '../04/Button';


function Counter({ count, setCount }) {
  const increaseCount = () => setCount(count => count + 1);

  return (
    <>
      <div>
        현재카운트:{count}
        <Button onPress={increaseCount}>+</Button>
      </div>
    </>
  );
}

export const withCountState = withState('count', 'setCount', 0);
export const CounterWithCountState = withCountState(Counter);