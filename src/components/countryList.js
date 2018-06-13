import React, { Component } from 'react'
import { CountryRow } from './countryRow'

export class CountryList extends Component {

    render() {
        return (
            this.props.countries.map(country =>
                <CountryRow country={country} key={country.name}/>
            )
        )
    }

}