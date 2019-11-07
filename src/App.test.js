import React from 'react'
import ReactDOM from 'react-dom'

import 'jest-enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount } from 'enzyme'
import { Country } from './domain/country'
import { CountryRow } from './components/countryRow'
import { CountrySearch } from './components/countrySearch'
import { Results } from './components/results'

import App from './App'

configure({ adapter: new Adapter() })

it('app levanta ok', () => {
  shallow(<App />)
})

it('countryRow devuelve el país dentro de un div inline', () => {
  const wrapper = shallow(<CountryRow country={new Country("South Korea", "F")} />)
  const p = wrapper.find('div.inline')
  expect(p.text().trim()).toBe('South Korea')
})

it('countryRow devuelve la bandera del pais', () => {
  const wrapper = shallow(<CountryRow country={new Country("South Korea", "F")} />)
  const img = wrapper.find('img')
  expect(img.prop("src")).toBe('/assets/south-korea.png')
})
it('buscar F devuelve la lista con un solo país, Francia', () => {
  const wrapper = shallow(<CountrySearch />)
  const txtName = wrapper.find('#country')
  const fakeEventChange = {
    name: txtName,
    value: 'F'
  }
  txtName.simulate('change', {
    target: fakeEventChange,
    preventDefault: () => { }
  })
  const result = wrapper.state('countries')
  expect(result.length).toBe(1)
  const france = result[0].name
  expect(france).toBe('France')
})
it('buscar el grupo A devuelve 4 países y uno de ellos es Rusia', () => {
  const wrapper = shallow(<CountrySearch />)
  const cbGroup = wrapper.find('#group')
  const fakeEventChange = {
    name: cbGroup,
    value: 'A'
  }
  cbGroup.simulate('change', {
    target: fakeEventChange,
    preventDefault: () => { }
  })
  const result = wrapper.state('countries')
  expect(result.length).toBe(4)
  const countryNames = result.map(country => country.name)
  expect(countryNames).toContain('Russia')
})
/* it('results show Russia made 5 goals against Saudi Arabia', () => {
  const wrapper = shallow(<Results />)
  console.log(wrapper.debug())
  const russia_arabia = wrapper.find('#russia_saudi-arabia')
  const goals = russia_arabia.render().find('#russia_goles')
  expect(goals.props().value).toBe(5)
}) */