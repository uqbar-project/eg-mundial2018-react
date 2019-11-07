import React from 'react'
import { MatchRow } from '../components/matchRow'
import { MatchService } from '../services/matchService'

const matches = new MatchService().getMatches()

export function Results() {
    return (
        <div>
            {matches.map(match => <MatchRow id={match.key} match={match} key={match.key} />)}
        </div>
    )
}