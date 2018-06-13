import React from 'react'
import ReactDOM from 'react-dom'

import 'jest-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import App from './App'

configure({ adapter: new Adapter() })

it('app levanta ok', () => {
  shallow(<App />)
})

