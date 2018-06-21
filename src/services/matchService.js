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
    MatchService.build('Colombia', 'Japan', 1, 2),
    MatchService.build('Poland', 'Senegal', 1, 2),
    MatchService.build('Russia', 'Egypt', 3, 1),
    MatchService.build('Uruguay', 'Saudi Arabia', 1, 0),
    MatchService.build('Portugal', 'Morocco', 1, 0),
    MatchService.build('Iran', 'Spain', 0, 1),
    MatchService.build('Denmark', 'Australia', 1, 1),
    MatchService.build('France', 'Peru', 1, 0),
    MatchService.build('Argentina', 'Croatia'),
    MatchService.build('Nigeria', 'Iceland'),
    MatchService.build('Brazil', 'Costa Rica'),
    MatchService.build('Serbia', 'Switzerland'),
    MatchService.build('Belgium', 'Tunisia'),
    MatchService.build('England', 'Panama'),
    MatchService.build('South Korea', 'Mexico'),
    MatchService.build('Germany', 'Sweden'),
    MatchService.build('Japan', 'Senegal'),
    MatchService.build('Saudi Arabia', 'Egypt'),
    MatchService.build('Russia', 'Uruguay'),
    MatchService.build('Iran', 'Portugal'),
    MatchService.build('Spain', 'Morocco'),
    MatchService.build('Australia', 'Peru'),
    MatchService.build('Denmark', 'France'),
    MatchService.build('Nigeria', 'Argentina'),
    MatchService.build('Iceland', 'Croatia'),
    MatchService.build('Mexico', 'Sweden'),
    MatchService.build('South Korea', 'Germany'),
    MatchService.build('Switzerland', 'Costa Rica'),
    MatchService.build('Serbia', 'Brazil'),
    MatchService.build('Senegal', 'Colombia'),
    MatchService.build('Japan', 'Poland'),
    MatchService.build('England', 'Belgium'),
    MatchService.build('Panama', 'Tunisia')
]
