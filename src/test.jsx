import { useState } from 'react'
import reactLogo from './assets/react.svg'
import pfp_ from './assets/myfigma_pfp.jpg';
import './test.css'
import { USERS } from './users';
import User from './User/User';
import HeaderButton from './HeaderButtons/HeaderButton';
import MainPage from './test';

function Ape() {
  const [OpenMain, setOpenMain] = useState(false);
  const UserName = "Orest"

  return (
    <>
      <input className='open_avatar' 
        type='image'
        src={pfp_}
        onClick={() => setOpenMain(true)} 
      >
      </input>
      <>
        {OpenMain ? <MainPage /> :
        null}
      </>
    </>
  )
}

export default Ape
