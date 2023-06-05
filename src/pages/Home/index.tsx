import Base from 'layouts/Base'
import DecryptForm from 'blocks/DecryptForm'
import { Fragment } from 'react'
import RecentDecodeLog from 'blocks/RecentDecodeLog'

const Home = () => {
  return (
    <Fragment>
      <Base>
        <DecryptForm/>
      </Base>
      <RecentDecodeLog/>
    </Fragment>
  )
}

export default Home