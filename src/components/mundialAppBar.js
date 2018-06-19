import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import FlagIcon from '@material-ui/icons/Flag'
import EditIcon from '@material-ui/icons/Edit'

class MundialAppBar extends Component {

    render() {
        return (
            <AppBar position="static" color='default'>
                <Toolbar>
                    <Button onClick={() => this.props.history.push('/')}>
                        <FlagIcon />
                        Buscar países
                        </Button>
                    <Button onClick={() => this.props.history.push('/fixture')}>
                        <EditIcon />
                        ¡Cargá los resultados y mirá las posiciones!
                        </Button>
                </Toolbar>
            </AppBar>
        )
    }

}

export default withRouter(MundialAppBar)