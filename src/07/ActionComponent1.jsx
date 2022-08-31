import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button'

function ActionComponent({setAge}) {
  return (
    <>
     <Button onPress={()=>setAge(2,19)}>아이디 2번의 나이 19세로 변경</Button> 
    </>
  );
}

ActionComponent.propTypes = {
  setAge:PropTypes.func,
};

export default ActionComponent;