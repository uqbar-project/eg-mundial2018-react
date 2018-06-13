export class Country {
    constructor(name, group) {
        this.name = name
        this.group = group
    }

    get flag() {
        return this.name.replace(' ', '-').toLowerCase() + '.png'
    }

    get fullGroup() {
        return "Grupo " + this.group.toUpperCase()
    }

    /** Busquedas */
    prototypeSearch() {
        this.name = this.name || ""
        this.group = this.group || ""
    }

    matches(_country) {
        return this.match("name", _country) && this.match("group", _country)
    }

    match(property, other) {
        return this[property].toLowerCase().includes(other[property].toLowerCase())
    }
}