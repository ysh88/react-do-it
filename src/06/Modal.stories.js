import React, { useContext } from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import Modal from './Modal';
import ButtonWithModal from './ButtonWithModal';
import ModalProvider from './ModalProvider';
import ModalProviderKey, { CONFIRM_DELETE_MODAL, CREATE_MEMBER_MODAL } from './ModalProviderKey';
import { ModalContext1, ModalContext2 } from './ModalContext';

export default {
  title: 'Modal',
  component: Modal,
};

function DeleteContent(props) {
  return (
    <>
      <div>
        <Text>정말로 삭제하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </>
  );
}
function ModalProviderContent(props) {
  const { openModal } = useContext(ModalContext1);
  return (
    <>
      <div>
        <Text>다음 버튼을 눌러 모달을 실행합니다.</Text>
        <Button onPress={() => openModal()}>삭제</Button>
      </div>
    </>
  );
}

function ModalProviderKeyContent(props) {
  const {
    actions: { openModal }
  } = useContext(ModalContext2);
  return (
    <>
      <div>
        <Text>다음 버튼을 눌러 모달을 실행합니다.</Text>
        <Button onPress={() => openModal(CONFIRM_DELETE_MODAL, {id:0, name:'상품1'})}>
          모달 열기
        </Button>
        <Button onPress={() => openModal(CREATE_MEMBER_MODAL)}>회원가입</Button>
      </div>
    </>
  );
}

const ModalTemplate = args => <Modal {...args} />;
const ButtonWithModalTemplate = args => <ButtonWithModal {...args} />;
const ModalProviderTemplate = args => <ModalProvider {...args} />;
const ModalProviderKeyTemplate = args => <ModalProviderKey {...args} />;

export const story = ModalTemplate.bind({});
story.storyName = '기본 설정';
story.args = {
  children: <DeleteContent />,
};

export const story2 = ButtonWithModalTemplate.bind({});
story2.storyName = 'ButtonWithModal';

export const story3 = ModalProviderTemplate.bind({});
story3.storyName = 'ModalProvider';
story3.args = {
  children: <ModalProviderContent />,
};

export const story4 = ModalProviderKeyTemplate.bind({});
story4.storyName = 'ModalProviderKey';
story4.args = {
  children: <ModalProviderKeyContent />,
};
