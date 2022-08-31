import React, { useContext } from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import { ModalContext2 } from './ModalContext';

//상위 컴포넌트가 조건에 따라 렌더링 되는 상황이지만,
//useContext는 현재 컴포넌트 최상단(return) 이전에 호출되었기 때문에 문제 없다.
//이전에 오류가 났던 것은 다른 부분에서 실수를 했던 것 같고, 아직 그 원인은 모르겠다.
function DeleteModalContent({ id, name }) {
  const { actions } = useContext(ModalContext2);//렌더 프로퍼티 대신 훅스 사용
  return (
    <div>
      <div>
        <Text>{name}을 정말로 삭제하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button onPress={actions.closeModal}>닫기</Button>
    </div>
  );
}

export default DeleteModalContent;

/* render props
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
*/
