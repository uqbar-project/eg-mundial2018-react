import React, { Component } from 'react'
import { CountryRow } from './countryRow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export class CountryList extends Component {

    render() {
        return (
            this.props.countries.map(country =>
                <Card>
                    <CardContent>
                        <CountryRow country={country} key={country.name} />
                    </CardContent>
                </Card>
            )
        )
    }

}