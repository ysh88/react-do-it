import React, { useEffect, useState } from 'react';

function Counter({count}) {
  const [numA, setNumA] = useState(count);
  const [numB, setNumB] = useState(count);

  // p.124 클래스 컴포넌트 getDerivedStateFromProps 함수 구현
  useEffect(()=>{
    if (count===numB) {
      setNumB(numB)
    } else{
      setNumB(count);
    }
  },[count])
  
  return (
    <>
      <div>
        카운트A: {numA}
        <button onClick={()=>setNumA(numA+1)}>+</button>
      </div>
      <div>
        카운트B: {numB}
        <button onClick={()=>setNumB(numB+1)}>+</button>
      </div>
    </>
  );
}

export default Counter;
