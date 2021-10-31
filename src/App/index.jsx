import React, { Suspense, lazy, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./routes/Home'))

const App = () => (
  <Fragment>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Suspense>
    </Router>
  </Fragment>
)

export default App
