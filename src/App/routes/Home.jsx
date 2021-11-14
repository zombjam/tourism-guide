import React, { Fragment } from 'react'

import { Banner, PopularCity, PopularActivity, Cards } from 'components'

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <div className='xl:w-8/12 w-10/12 mx-auto space-y-10 pb-10'>
        <PopularCity />
        <PopularActivity />
        <Cards />
      </div>
    </Fragment>
  )
}

export default Home
