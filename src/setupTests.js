import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImport from 'aphrodite/no-important';

//아프로디테 DOM 함수 호출 과정 중지
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImport.StyleSheetTestUtils.suppressStyleInjection()

configure({ adapter: new Adapter() }); //테스트 환경에 생명주기 함수와 함께 enzyme 추가

// 경고메시지를 오류로 인식하도록 설정
afterEach(() => {
  console.error.mockClear();
});
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(e => {
    throw new Error(e);
  });
});
