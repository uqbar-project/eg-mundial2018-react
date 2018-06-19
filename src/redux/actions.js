import { UPDATE_MATCH, INIT_MATCHES } from "./store"

export function updateMatch(match) {
    return {
        type: UPDATE_MATCH,
        match
    }
}

export function initMatches() {
    return {
        type: INIT_MATCHES
    }
}
