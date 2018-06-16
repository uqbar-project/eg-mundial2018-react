import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { CountryRow } from "./countryRow"
import TextField from '@material-ui/core/TextField'

export class MatchRow extends Component {

    render() {
        const match = this.props.match

        return (
            <Card>
                <CardContent>
                    <Grid container spacing={8}>
                        <Grid item xs={6} sm={3}>
                            <CountryRow country={match.teamA} key={match.teamA.name} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                required
                                id="required"
                                type="number"
                                style = {{width: '2rem'}}
                                value={this.props.match.goalA}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <CountryRow country={match.teamB} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                required
                                id="required"
                                type="number"
                                style = {{width: '2.5rem'}}
                                value={this.props.match.goalB}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}