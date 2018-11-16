import React, { Component } from 'react'
import { CountryService } from '../services/countryService'
import { CountryList } from './countryList'
import { Country } from '../domain/country'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'

export class CountrySearch extends Component {

    constructor(props) {
        super(props)
        this.countryService = new CountryService()
        this.groups = this.countryService.getGroups()
        this.state = {
            search: new Country("", ""),
            countries: this.countryService.getAllCountries()
        }
    }

    handleChange(property, event) {
        event.preventDefault()
        const search = this.state.search
        search[property] = event.target.value
        this.setState({
            search: search,
            countries: this.countryService.getCountries(search)
        })
    }

    render() {
        return (
            <div>
                <div className="search">
                    <FormControl className="formControl">
                        <FormHelperText>País</FormHelperText>
                        <TextField
                            id="country"
                            value={this.state.search.name}
                            onChange={this.handleChange.bind(this, 'name')}
                        />
                        <br/>
                        <FormHelperText>Grupo</FormHelperText>
                        <Select
                            id='group'
                            value={this.state.search.group}
                            onChange={this.handleChange.bind(this, 'group')}
                            inputProps={{
                                name: 'group',
                                id: 'group'
                            }}
                            >
                            <MenuItem value="">
                                <em>Todos</em>
                            </MenuItem>
                            {this.groups.map(group => <MenuItem value={group} key={group}>{`Grupo ${group}`}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <CountryList countries={this.state.countries} />
            </div>
        )
    }

}
