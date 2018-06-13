import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export class CountryRow extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <p>
                        <img className="flag" src={'/assets/' + this.props.country.flag} alt={this.props.country.name}/>
                        &nbsp;
                        &nbsp;
                        {this.props.country.name}
                        </p>
                    </CardContent>
                </Card>
            </div>
        )
    }

}