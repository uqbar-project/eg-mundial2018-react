import React, { Component } from 'react'
import MundialAppBar from './mundialAppBar'
import { Results } from './results'
import { PositionTable } from './positionTable'
import Grid from '@material-ui/core/Grid'
import { initMatches } from '../redux/actions'
import { connect } from 'react-redux'

class Fixture extends Component {

    componentWillMount() {
        this.props.initMatches()
    }
    
    render() {
        return (
            <div>
                <MundialAppBar />
                <Grid container spacing={0}>
                    <Grid item xs={7}>
                        <Results matches={this.props.matches} />
                    </Grid>
                    <Grid item xs={5}>
                        <PositionTable matches={this.props.matches} />
                    </Grid>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        matches: state.matches
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initMatches: () => dispatch(initMatches())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fixture)