import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import HelloWorld from './HelloWorld';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('HelloWorld ', () => {
  console.log('working');
  const text = 'testing_testing'
  const wrapper = shallow(<HelloWorld text={text} />);

  it('it should render an h1 ', () => {
    expect(wrapper.find('h1').text()).to.equal(text);
  });
});
