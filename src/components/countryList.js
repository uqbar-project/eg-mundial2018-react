import React from 'react'
import { CountryRow } from './countryRow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export function CountryList({ countries }) {
    return (
        countries.map(country =>
            <Card key={`card_${country.name}`}>
                <CardContent>
                    <CountryRow country={country} />
                </CardContent>
            </Card>
        )
    )

}