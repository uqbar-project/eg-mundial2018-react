import React, { Component } from 'react'
import MatchRow from '../components/matchRow'
import { CountryService } from '../services/countryService'
import { Select, MenuItem, FormHelperText, FormControl } from '@material-ui/core'

export class Results extends Component {

    constructor(props) {
        super(props)
        this.countryService = new CountryService()
        this.groups = this.countryService.getGroups()
        this.state = {
            group: ''
        }
    }

    filterGroup(group) {
        this.setState({
            group: group
        })
    }

    render() {
        return (
            <div>
                <FormControl className="formControl">
                    <FormHelperText>Grupo</FormHelperText>
                    <Select
                        id='group'
                        value={this.state.group}
                        onChange={(event) => this.filterGroup(event.target.value)}
                        inputProps={{
                            name: 'group',
                            id: 'group'
                        }}
                    >
                        <MenuItem value="">
                            <em>Todos</em>
                        </MenuItem>
                        {this.groups.map(group => <MenuItem value={group.split(' ')[1]} key={group}>{group}</MenuItem>)}
                    </Select>
                </FormControl>
                {this.props.matches.filter((match) => match.matchesGroup(this.state.group)).map(match => <MatchRow id={match.key} match={match} key={match.key} />)}
            </div>
        )
    }
}