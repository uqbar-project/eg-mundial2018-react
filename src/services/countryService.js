import { Country } from "../domain/country"

const countries = [
    new Country('Argentina', 'D'),
    new Country('Australia', 'C'),
    new Country('Belgium', 'G'),
    new Country('Brazil', 'E'),
    new Country('Costa Rica', 'E'),
    new Country('Colombia', 'H'),
    new Country('Croatia', 'D'),
    new Country('Denmark', 'C'),
    new Country('Egypt', 'A'),
    new Country('England', 'G'),
    new Country('France', 'C'),
    new Country('Germany', 'F'),
    new Country('Iceland', 'D'),
    new Country('Iran', 'B'),
    new Country('Japan', 'H'),
    new Country('South Korea', 'F'),
    new Country('Mexico', 'F'),
    new Country('Morocco', 'B'),
    new Country('Nigeria', 'D'),
    new Country('Panama', 'G'),
    new Country('Peru', 'C'),
    new Country('Poland', 'H'),
    new Country('Portugal', 'B'),
    new Country('Russia', 'A'),
    new Country('Saudi Arabia', 'A'),
    new Country('Senegal', 'H'),
    new Country('Serbia', 'E'),
    new Country('Spain', 'B'),
    new Country('Sweden', 'F'),
    new Country('Switzerland', 'E'),
    new Country('Tunisia', 'G'),
    new Country('Uruguay', 'A')
]

export class CountryService {

    getAllCountries() { return countries }

    getCountries(_country) {
        return countries.filter(country => country.matches(_country))
    }

    getCountry(name) {
        return countries.find(country => country.name.toLowerCase() === name.toLowerCase())
    }

    getGroups() {
        const groups = countries.map(country => country.group)
        return [...new Set(groups)].sort()
    }
}