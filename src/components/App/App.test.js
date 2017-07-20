import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import fetchMock from 'fetch-mock';


import filmStub from '../stubs/filmStub';
import {mockFetchCalls} from '../stubs/testHelper';
import cleanFilmData from '../Film/cleanFilmData';
import App from './App';

describe('App', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);

    fetchMock.restore();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });


  it.skip('should fetch the movie crawl', async () => {
    fetchMock.get('http://swapi.co/api/films/1/', {
      status: 200,
      body: filmStub
    })

    const mockFn = jest.fn()
    const cleanCrawl = cleanFilmData(filmStub)

    const wrapper = mount(<App />);
    expect(fetchMock.called()).toEqual(true)

    expect(fetchMock.called()).toEqual(true)
    expect(wrapper.state('film')).toEqual(cleanCrawl);
  })

  it.skip('should display an error if fetching movie crawl fails', async () => {
    fetchMock.get('http://swapi.co/api/films/1/', {
      status: 500,
      body: filmStub
    });

    const wrapper = mount(<App />);
    await wrapper.update();

    expect(fetchMock.called()).toEqual(true)
    expect(wrapper.find('error')).toHaveLength(1)

  })

  it('should render a div with a className "app"', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('div').hasClass('app')).toEqual(true)
  })


})
