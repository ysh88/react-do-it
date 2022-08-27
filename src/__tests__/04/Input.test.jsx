import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

//jest의 describe 함수 = 테스트들을 묶어주는 역할
describe('<Input>', () => {
  //jest의 it 함수 = 실행하려는 테스트
  it('renders without crashing', () => {
    expect(() => {
      // shallow 함수 = enzyme 객체 반환 => 컴포넌트 출력, 검사할 수 있게 해준다
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });

  it('has one element', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });

  describe('contains <input>', () => {
    it('renders one input', () => {
      const wrapper = shallow(<Input name="test_name" />);
      //find 함수 => 인자로 전달된 엘리먼트가 있는지 검증
      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('label')).toHaveLength(1);
    });
  });

  it('assigns the prop value and type', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    //prop('프로퍼티 이름')=프로퍼티 값, props() = 프로퍼티 객체 => 프로퍼티에 전달된 값 검증
    expect(wrapper.find('input').prop('value')).toBe(expectedValue); //value 프로퍼티의 값을 전달된 값과 비교
    const { value, type } = wrapper.find('input').props(); //props 객체 구조 분해 추출
    expect(value).toBe(expectedValue);
    expect(type).toBe('text');
  });

  it('renders errorMessage', () => {
    const wrapper = shallow(<Input name="test_name" />); //아직 errorMessage state 전달 x
    expect(wrapper.find('.error')).toHaveLength(0);
    const expectedErrorMessage = 'wrong value!';
    //setProps => state를 전달할 상위 컴포넌트 없어도 state 변화 검증 가능
    wrapper.setProps({ errorMessage: expectedErrorMessage }); //errorMessage state 전달
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMessage); //input 요소의 텍스트 영역에 에러메시지 출력됐는지 검증
  });

  it('calls back onChange on input change', () => {
    const changeStub = jest.fn(); //생성된 함수의 호출 감지하는 함수
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
    expect(changeStub).not.toHaveBeenCalled(); //이벤트 실행 이전에 콜백함수가 호출되지 않은 상태 검증
    const expectedTargetValue = 'updated input';
    //simulate 함수 = 가상 이벤트 작동
    wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } }); //target.value = expectedTargetValue
    expect(changeStub).toHaveBeenCalledTimes(1); // 호출 횟수 검증
    expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue); //호출 인자 검증
  });
});
