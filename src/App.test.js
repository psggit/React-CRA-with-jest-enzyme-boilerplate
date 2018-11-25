import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('Increment', () => {
  const wrapper = shallow(<App />)
  const instance = wrapper.instance()

  it('should return default value of the count state', () => {
    expect(wrapper.state().count).toBe(0)
  })
  it('should increment count state', () => {
    instance.increment()
    expect(wrapper.state().count).toBe(1)
  })
  it('should correctly renders count state', () => {
    expect(wrapper.find('#count').text()).toEqual('1')
  })
})

describe('Decrement', () => {
  const wrapper = shallow(<App />)
  const instance = wrapper.instance()

  it('should return default value of the count state', () => {
    expect(wrapper.state().count).toBe(0)
  })
  it('should decrement count state', () => {
    instance.decrement()
    expect(wrapper.state().count).toBe(-1)
  })
  it('should correctly renders count state', () => {
    expect(wrapper.find('#count').text()).toEqual('-1')
  })
})
