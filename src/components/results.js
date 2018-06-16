import React, { Component } from 'react'
import MundialAppBar from './mundialAppBar'
import { MatchRow } from '../components/matchRow'
import { MatchService } from '../services/matchService'

const matches = new MatchService().getMatches()

export class Results extends Component {
    
    render() {
        return (
            <div>
                <MundialAppBar/>
                {matches.map(match => <MatchRow match={match} key={match.key}/>)}
            </div>
        )
    }
}