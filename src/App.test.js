import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import Comments from './Comments'
import NewComment from './NewComment'
import { EventEmitter } from 'events'

describe('<App />', () => {
  it('renders without crashing', () => {
    const database = {
      ref: jest.fn()
    }
    database.ref.mockReturnValue({
      on: jest.fn()
    })
    const wrapper = shallow(<App database={database} />)
    expect(wrapper.find(Comments).length).toBe(1)
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  }) 
  it('adds anew comment', () => {
    const database = {
      ref: jest.fn()
    }
    const child = jest.fn()
    const update = jest.fn()
    database.ref.mockReturnValue({
      on: jest.fn(),
      child,
      update
    })
    const push = jest.fn()
    child.mockReturnValue({
      push
    })
    push.mockReturnValue({
      key: '1'
    })
    const wrapper = shallow(<App database={database} />)
    wrapper.instance().sendComment('new comment')
    // console.log(child.mock.calls)
    expect(child).toBeCalledWith('comments')
    // console.log(update.mock.calls)
    expect(update).toBeCalledWith({
      'comments/1': {
        comment: 'new comment'}
    })
  }) 
  it('renders comments from firebase', () => {
    const database = {
      ref: jest.fn()
    }
    const eventEmmiter = new EventEmitter()
    database.ref.mockReturnValue(eventEmmiter)

    const wrapper = shallow(<App database={database} />)
    
    // não recebeu comments
    expect(wrapper.find(Comments).length).toBe(1)
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)

    // recebendo o value
    const comments = {
      a: { comment: 'comment 1' },
      b: { comment: 'comment 2' }
    }
    const val = jest.fn()
    val.mockReturnValue(comments)
    eventEmmiter.emit('value',{
      val
    })

    wrapper.update()

    //testes
    // console.log(wrapper.state())
    expect(wrapper.state().isLoading).toBeFalsy()
    expect(wrapper.state().comments).toBe(comments)
    // console.log(wrapper.text())
    expect(wrapper.find(NewComment).get(0).props.sendComment).toBe(wrapper.instance().sendComment)
    expect(wrapper.find(Comments).get(0).props.comments).toBe(comments)
    expect(wrapper.find('p').length).toBe(0)
  }) 
})

