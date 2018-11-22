export class Country {
    constructor(name, group) {
        this.name = name
        this.group = group
    }

    get flag() {
        return this.key + '.png'
    }

    get key() {
        return this.name.replace(' ', '-').toLowerCase()
    }

    /** Funciones auxiliares para búsquedas */
    matches(_country) {
        return this.match("name", _country) && this.match("group", _country)
    }

    match(property, other) {
        return this[property].toLowerCase().includes(other[property].toLowerCase())
    }
}