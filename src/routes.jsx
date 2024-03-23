import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Root from './components/Root.jsx'
import Home from './components/Home.jsx'
import Coin from './components/Coin.jsx'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/coin/:id" component={Coin} />
      </Switch>
    </Router>
  )
}

export default Routes
