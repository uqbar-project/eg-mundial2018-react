import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CountrySearch } from './components/countrySearch'
import Fixture from './components/fixture'

export const MundialRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={CountrySearch} />
            <Route path="/fixture" component={Fixture} />
        </Switch>
    </Router>
)

