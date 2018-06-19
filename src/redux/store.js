import { createStore } from 'redux'
import { MatchService } from '../services/matchService'

export const INIT_MATCHES = 'INIT_MATCHES'
export const UPDATE_MATCH = 'UPDATE_MATCH'

const reducer = (state, action) => {
    if (action.type === INIT_MATCHES) {
        return {
            matches: new MatchService().getMatches()
        }
    }
    if (action.type === UPDATE_MATCH) {
        const matchesClone = [...state.matches]
        const matchToFind = matchesClone.find((match) => match.key === action.match.key)
        matchToFind.goalsA = action.match.goalsA
        matchToFind.goalsB = action.match.goalsB
        return {
            matches: matchesClone
        }
    }
    return state
}

export default createStore(reducer, { 
    matches: [] 
})