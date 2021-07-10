import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import renderer from 'react-test-renderer'

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
 
});