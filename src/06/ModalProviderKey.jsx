import createModalProvider from './createModalProvider';
import DeleteModalContent from './DeleteModalContent';
import MemberModalContent from './MemberModalContent';

export const CONFIRM_DELETE_MODAL = 'confirm_delete_modal'; //컴포넌트를 구분하기 위한 키
export const CREATE_MEMBER_MODAL = 'create_member_modal';

const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
  [CREATE_MEMBER_MODAL]: MemberModalContent,
};

export default createModalProvider(CONTENT_MAP);
