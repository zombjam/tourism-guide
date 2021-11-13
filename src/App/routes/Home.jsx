import React, { Fragment } from 'react'

import {
  Banner,
  PopularCity,
  PopularActivity,
  PopularRestaurant,
} from 'components'

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <div className='lg:w-8/12 w-10/12 mx-auto space-y-10 pb-10'>
        <PopularCity />
        <PopularActivity />
        <PopularRestaurant />
      </div>
    </Fragment>
  )
}

export default Home
