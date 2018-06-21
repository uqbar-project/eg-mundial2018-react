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
        const indexMatchToReplace = state.matches.findIndex((match) => match.key === action.match.key)
        state.matches[indexMatchToReplace] = action.match 
        return {
            matches: [...state.matches]
        }
    }
    return state
}

export default createStore(reducer, { 
    matches: [] 
})