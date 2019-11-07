import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import FlagIcon from '@material-ui/icons/Flag'
import EditIcon from '@material-ui/icons/Edit'

function MundialAppBar({ history }) {
    return (
        <AppBar position="static" color='default'>
            <Toolbar>
                <Button onClick={() => history.push('/')}>
                    <FlagIcon />
                    Buscar países
                        </Button>
                <Button onClick={() => history.push('/resultados')}>
                    <EditIcon />
                    ¡Cargá los resultados!
                        </Button>
            </Toolbar>
        </AppBar>
    )
}


export default withRouter(MundialAppBar)