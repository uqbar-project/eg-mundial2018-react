import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { CountryRow } from "./countryRow"
import TextField from '@material-ui/core/TextField'

export class MatchRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            match: props.match
        }
    }

    changeGoal(match, team, goals) {
        match.updateScore(team.name, goals)
        this.setState({
            match: match
        })
    }

    render() {
        const match = this.state.match
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
                                id={match.teamA.key + '_goles'}
                                type="number"
                                style = {{width: '2rem'}}
                                value={match.goalA}
                                onChange={(event) => this.changeGoal(match, match.teamA, event.target.value)}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <CountryRow country={match.teamB} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                required
                                id={match.teamB.key + '_goles'}
                                type="number"
                                style = {{width: '2.5rem'}}
                                onChange={(event) => this.changeGoal(match, match.teamB, event.target.value)}
                                value={match.goalB}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}