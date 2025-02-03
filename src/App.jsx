import { useEffect, useState, useRef } from "react";
import axios from "axios";
import reactLogo from './assets/react.svg'

import discord_ from './assets/discord_.png';
import git_ from './assets/git_.png';
import home_ from './assets/home_.png';
import telegram_ from './assets/telegram_.png';
import youtube_ from './assets/youtube_.png';
import pfp_ from './assets/myfigma_pfp.jpg';

import './App.css'
import { USERS } from './users';
import User from './User/User';
import HeaderButton from './HeaderButtons/HeaderButton';

//setTimeout(() => {
  //console.error("ZZZ");
  document.getElementById('root').classList.add("visible");
//}, 2000);


function App() {
  const [More_Info, setMore_Info] = useState(true);
  const UserName = "Orest"
  const [usersDb, setUsersDb] = useState([]);
  const [users_find, setUsers_find] = useState([]);

  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const usernameRef = useRef(null);

  /*useEffect(() => {
      axios.get("http://localhost:5000/users")
          .then(response => setUsersDb(response.data))
          .catch(error => console.error("Помилка:", error));
  }, []);*/

  const id_input = () => {
    axios.get("http://localhost:5000/users")
    .then(response => setUsers_find(response.data))
    .catch(error => console.error("Помилка:", error));

    const user_id = inputRef.current.value;
    const foundUser = users_find.find(user => user.ID == user_id); // Знаходимо користувача
  
    if (foundUser) {
      console.log(`\nID: ${foundUser.ID} \nUsername: ${foundUser.username}\n`);
      usernameRef.current.textContent = `Name: ${foundUser.username}`

    } else {
      console.log("Користувача не знайдено");
    }
  };

  const show_all_db = () => {
    axios.get("http://localhost:5000/users")
    .then(response => setUsersDb(response.data))
    .catch(error => console.error("Помилка:", error));
  }

  return (
    <>
      {/*{USERS.map((users) => (
        <User key={users.key} user_name={users.name} img={reactLogo} ></User>
      ))}*/}


      <input ref={inputRef} type="text" placeholder="Input your ID" className="test_id_input"></input>
      <button onClick={id_input}>Confirm</button>
      <button onClick={show_all_db}>Show All Data Base</button>


      <div className='header'>
        <HeaderButton icon={home_} main_name='Main menu' />
        <HeaderButton icon={git_} main_name='Github' page_redirect='https://github.com/Jefrex1'/>
        <HeaderButton icon={youtube_} main_name='Youtube' page_redirect='https://www.youtube.com/@jefrex0'/>
        <HeaderButton icon={discord_} main_name='Discord' page_redirect='https://discord.com/users/dababik'/>
        <HeaderButton icon={telegram_} main_name='Telegram' page_redirect='https://github.com/Jefrex1/Project-m.e.'/>
      </div>

      <div className='user_container'>

       <div className='icon_holder'>
        <input ref={imgRef} type='image' src={pfp_} className='avatar' ></input>
        <p ref={usernameRef} className='username'>Name: {UserName}</p>
       </div>

       <div className='project_holder'>

       </div>

       <div className='updatelog_me_holder'>
         <div className='updatelog_holder'></div>
         <div className='me_holder'></div>
       </div>

      </div>

      <div className='main_container'>
      <h2>Користувачі</h2>
        <ul>
          {usersDb.map(user => (
            <p key={user.ID}>{user.ID} - {user.username} - {user.password}</p>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
