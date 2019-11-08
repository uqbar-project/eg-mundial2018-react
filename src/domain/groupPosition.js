export class GroupPosition {

    constructor(group) {
        this.group = group
        this.positionItems = []
    }

    processMatch(match) {
        this.searchPositionItem(match.teamA).processMatch(match.goalsA, match.goalsB)
        this.searchPositionItem(match.teamB).processMatch(match.goalsB, match.goalsA)
    }

    searchPositionItem(team) {
        let result = this.positionItems.find(item => item.team.matches(team))
        if (!result) {
            result = new PositionItem(team)
            this.positionItems.push(result)
        }
        return result
    }

    positions() {
        return this.positionItems.sort((a, b) => b.order - a.order)
    }
}

export class PositionItem {

    constructor(team) {
        this.team = team
        this.won = 0
        this.lost = 0
        this.tied = 0
        this.goalsOwn = 0
        this.goalsAgainst = 0
    }

    processMatch(goalsOwn, goalsAgainst) {
        if (!goalsOwn || !goalsAgainst) return
        this.goalsOwn += goalsOwn
        this.goalsAgainst += goalsAgainst
        if (goalsOwn > goalsAgainst) this.won++
        if (goalsOwn < goalsAgainst) this.lost++
        if (goalsOwn === goalsAgainst) this.tied++
    }

    get points() {
        return this.won * 3 + this.tied
    }

    get order() {
        return this.points * 10000 + this.goalAverage * 100 + this.goalsOwn
    }

    get goalAverage() {
        return this.goalsOwn - this.goalsAgainst
    }

    get key() {
        return 'p' + this.team.key
    }
}