import React, { Component } from 'react'
import MatchRow from '../components/matchRow'

export class Results extends Component {
    
    render() {
        return (
            <div>
                {this.props.matches.map(match => <MatchRow id={match.key} match={match} key={match.key}/>)}
            </div>
        )
    }
}