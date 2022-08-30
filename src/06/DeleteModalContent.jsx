import React, { useContext } from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import { Consumer2 } from './ModalContext';

function DeleteModal() {
  // 상위 요소인 모달을 조건문에 따라 실행해야 하는 상황
  // 훅스 사용 조건을 위배하기 때문에 렌더 프로퍼티를 사용해야 한다
  return (
    <Consumer2>
      {({ actions }) => (
        <div>
          <div>
            <Text>정말로 삭제하시겠습니까?</Text>
          </div>
          <Button primary>예</Button>
          <Button onPress={actions.closeModal}>닫기</Button>
        </div>
      )}
    </Consumer2>
    /* p.295
      Consumer 구현 방식
      function Consumer({children}, context){
        return children(context);
      }
    */
  );
  
}

export default DeleteModal;
