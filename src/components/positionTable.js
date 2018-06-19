import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { GroupPosition } from '../domain/groupPosition'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { CountryRow } from './countryRow';

export class PositionTable extends Component {

    render() {
        const positions = new Map()
        this.props.matches.forEach(match => {
            const group = match.group()
            const groupPosition = positions.get(group) || new GroupPosition(group)
            groupPosition.processMatch(match)
            positions.set(group, groupPosition)
        })

        if (positions.size === 0) {
            return (<div/>)
        }

        return (
            <Card key={'cardPosiciones'}>
                <CardContent key={'contentPosiciones'}>
                    <h3>Tabla de posiciones</h3>
                    {[...positions].map((itemGroup) => {
                        const group = itemGroup[0]
                        const positions = itemGroup[1].positions()
                        return <PositionGroupTable group={group} positions={positions} key={'positions_group_' + group} />
                    }
                    )}
                </CardContent>
            </Card>
        )
    }

}

export class PositionGroupTable extends Component {

    render() {
        return (
            <div>
                <h4>Grupo {this.props.group}</h4>
                <Table style={{ width: "auto", tableLayout: "auto" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Equipo&nbsp;Participante&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                            <TableCell>G</TableCell>
                            <TableCell>E</TableCell>
                            <TableCell>P</TableCell>
                            <TableCell>GF</TableCell>
                            <TableCell>GC</TableCell>
                            <TableCell>Puntos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...this.props.positions].map((item) => <PositionRow value={item} key={item.key} />)}
                    </TableBody>
                </Table>
                <br/>
            </div>
        )
    }
}

export class PositionRow extends Component {

    render() {
        return (
            <TableRow>
                <TableCell>
                    <CountryRow country={this.props.value.team} />
                </TableCell>
                <TableCell numeric={true}>
                    {this.props.value.won}
                </TableCell>
                <TableCell numeric={true}>
                    {this.props.value.tied}
                </TableCell>
                <TableCell numeric={true}>
                    {this.props.value.lost}
                </TableCell>
                <TableCell numeric={true}>
                    {this.props.value.goalsOwn}
                </TableCell>
                <TableCell numeric={true}>
                    {this.props.value.goalsAgainst}
                </TableCell>
                <TableCell numeric={true}>
                    <b>
                    {this.props.value.points}
                    </b>
                </TableCell>
            </TableRow>
        )
    }
}