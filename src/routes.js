import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CountrySearch } from './components/countrySearch'
import Fixture from './components/fixture'
import MundialAppBar from './components/mundialAppBar'

export const MundialRoutes = () => (
    <Router>
        <div>
            <MundialAppBar />
            <Switch>
                <Route exact path="/" component={CountrySearch} />
                <Route path="/fixture" component={Fixture} />
            </Switch>
        </div>
    </Router>
)

