export class Match {

    constructor(teamA, goalsA, teamB, goalsB) {
        if (!teamA) {
            throw new Error('Debe ingresar el primer equipo')
        }
        if (!teamB) {
            throw new Error('Debe ingresar el segundo equipo')
        }
        if (teamA.group !== teamB.group) {
            throw new Error('Los equipos son de diferentes grupos')
        }
        this.teamA = teamA
        this.teamB = teamB
        this.goalsA = goalsA
        this.goalsB = goalsB
    }

    get key() {
        return this.teamA.key + "_" + this.teamB.key
    }

    group() {
        return this.teamA.group
    }

    updateScore(teamName, goals) {
        if (this.teamA.name === teamName) {
            this.goalsA = goals
        } else {
            this.goalsB = goals
        }
    }
}