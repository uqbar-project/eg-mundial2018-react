import { CountryService } from './countryService'
import { Match } from '../domain/match'

const countryService = new CountryService()

export class MatchService {
    
    static build(teamA, teamB, goalA, goalB) {
        return new Match(MatchService.getTeam(teamA), goalA, MatchService.getTeam(teamB), goalB)
    }

    static getTeam(teamName) {
        return countryService.getCountry(teamName)
    }

    getMatches() {
        return matches
    }

}

const matches = [ 
    MatchService.build('Russia', 'Saudi Arabia', 5, 0),
    MatchService.build('Egypt', 'Uruguay', 0, 1),
    MatchService.build('Morocco', 'Iran', 0, 1),
    MatchService.build('Portugal', 'Spain', 3, 3),
    MatchService.build('France', 'Australia', 2, 1),
    MatchService.build('Argentina', 'Iceland', 1, 1),
    MatchService.build('Croatia', 'Nigeria', 2, 0),
    MatchService.build('Peru', 'Denmark', 0, 1),
    MatchService.build('Costa Rica', 'Serbia', 0, 1),
    MatchService.build('Germany', 'Mexico', 0, 1),
    MatchService.build('Brazil', 'Switzerland', 1, 1),
    MatchService.build('Sweden', 'South Korea', 1, 0 ),
    MatchService.build('Belgium', 'Panama', 3, 0),
    MatchService.build('Tunisia', 'England', 1, 2),
    MatchService.build('Colombia', 'Japan'),
    MatchService.build('Poland', 'Senegal'),
    MatchService.build('Russia', 'Egypt'),
    MatchService.build('Portugal', 'Morocco'),
    MatchService.build('Uruguay', 'Saudi Arabia'),
    MatchService.build('Iran', 'Spain'),
]
