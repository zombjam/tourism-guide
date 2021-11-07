import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './routes/Home'
import Traffic from './routes/Traffic'
// const Home = lazy(() => import('./routes/Home'))

const App = () => (
  <Router>
    <Layout>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/traffic' element={<Traffic />}></Route>
      </Routes>
      {/* </Suspense> */}
    </Layout>
  </Router>
)

export default App
