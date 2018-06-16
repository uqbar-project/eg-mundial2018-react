import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CountrySearch } from './components/countrySearch'
import { Results } from './components/results'

export const MundialRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={CountrySearch} />
            <Route path="/resultados" component={Results} />
        </Switch>
    </Router>
)

