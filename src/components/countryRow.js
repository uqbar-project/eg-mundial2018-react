import React, { Component } from 'react'

export class CountryRow extends Component {

    render() {
        return (
            <div className="inline">
                <img className="flag" src={'/assets/' + this.props.country.flag} alt={this.props.country.name} />
                &nbsp;
                &nbsp;
                {this.props.country.name}
            </div>
        )
    }

}