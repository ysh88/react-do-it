import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../../04/Checkbox';

describe('<Checkbox>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Checkbox name="required">테스트</Checkbox>);
    }).not.toThrow();
  });
  
  it('displays errorMessage', () => {
    const errorMessage='오류 메시지';
    const errorHtml = 
    shallow(<Checkbox name='name' errorMessage={errorMessage}>테스트</Checkbox>)
    .find('span').html();
    expect(errorHtml).toContain(errorMessage);
  })

  it('calls back onChange on clicked', () => {
    const changeStub = jest.fn();
    expect(changeStub).toHaveBeenCalledTimes(0);
    const input = shallow(<Checkbox name='test_name' onChange={changeStub}>테스트</Checkbox>)
    .dive().find('input');
    expect(input).toHaveLength(1);
    input.simulate('click', {target:{checked:true}})
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('test_name', true);
    input.simulate('click', {target:{checked:false}})
    expect(changeStub).toHaveBeenCalledWith('test_name', false);


  })
});
