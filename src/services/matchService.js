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
    MatchService.build('Costa Rica', 'Serbia'),
    MatchService.build('Germany', 'Mexico'),
    MatchService.build('Brazil', 'Switzerland'),
    MatchService.build('Sweden', 'South Korea'),
    MatchService.build('Belgium', 'Panama'),
    MatchService.build('Tunisia', 'England'),
    MatchService.build('Colombia', 'Japan'),
    MatchService.build('Poland', 'Senegal'),
    MatchService.build('Russia', 'Egypt'),
    MatchService.build('Portugal', 'Morocco'),
    MatchService.build('Uruguay', 'Saudi Arabia'),
    MatchService.build('Iran', 'Spain'),
]
