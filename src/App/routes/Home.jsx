import React, { Fragment } from 'react'

import { Banner, PopularCity } from 'components'

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <div className='w-8/12 mx-auto pb-10 overflow-hidden'>
        <PopularCity />
      </div>
    </Fragment>
  )
}

export default Home
