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

    changeGoal(team, goals) {
        const { match } = this.state
        match.updateScore(team.name, goals)
        this.setState({
            match
        })
    }

    render() {
        const { match } = this.state
        return (
            <Card data-testid={match.key}>
                <CardContent>
                    <Grid container spacing={8}>
                        <MatchTeam team={match.teamA} goal={match.goalA} changeGoal={this.changeGoal} />
                        <MatchTeam team={match.teamB} goal={match.goalB} changeGoal={this.changeGoal} />
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

function MatchTeam({ team, goal, changeGoal }) {
    return <>
        <Grid item xs={6} sm={3}>
            <CountryRow country={team} />
        </Grid>
        <Grid item xs={6} sm={3}>
            <TextField
                required
                id={`${team.key}_goles`}
                type="number"
                style={{ width: '2.5rem' }}
                value={goal}
                onChange={(event) => changeGoal(team, event.target.value)}
                margin="normal"
            />
        </Grid>
    </>
}