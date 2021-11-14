import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './routes/Home'
import Food from './routes/Food'
import Traffic from './routes/Traffic'

const App = () => (
  <Router>
    <Layout>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/food' element={<Food />}></Route>
        <Route path='/traffic' element={<Traffic />}></Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      {/* </Suspense> */}
    </Layout>
  </Router>
)

export default App
