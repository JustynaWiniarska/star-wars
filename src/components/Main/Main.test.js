import React from 'react';
import {shallow, mount} from 'enzyme';
import fetchMock from 'fetch-mock';

import Main from './Main';
import peopleStub from '../stubs/peopleStub.json';

describe('Main', () => {

  it('should have one "View Favorites button"', () => {
  const wrapper = shallow(<Main />)

  expect(wrapper.find('.favorites-btn')).toHaveLength(1)
})

  it.skip('"View Favorites" button should redirect to "Favorites" page when clicked', () => {
  const wrapper = mount(<Main />)

    wrapper.find('.favorites-btn').simulate('click')
  })


  it.skip('should render Router', () => {

  expect(wrapper.find('Router')).toHaveLength(1)
  })


  it('should render five Routes', () => {
    const wrapper = shallow(<Main />)

    expect(wrapper.find('Route')).toHaveLength(5)
  })

})


describe('Main, API Calls', () => {

  const resolveAfter2Seconds = () => {
    return new Promise (resolve => {
      setTimeout(() =>{
        resolve();
      }, 2000)
    })
  }

  afterEach(() => {
    // if (fetchMock.calls().umatched.length) {
    //   console.warn(fetchMock.calls().unmatched)
    // }
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });


  it.skip('fetches people', async () => {
    fetchMock.get('http://swapi.co/api/people/', {
      status: 200,
      body: peopleStub,
    });

    const mockFn = jest.fn()

    const wrapper = mount(<Main callPeople={mockFn}/>)
    await resolveAfter2Seconds();

    // expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/people/');
    // expect(wrapper.state('people')).toEqual(peopleStub)
  })

})
