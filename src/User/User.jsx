import { useState } from 'react';
import './User.css'
import ShinyText from '../ShinyText/ShinyText';

function User(props) {
    const {user_name, img} = props;
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count+1);
    }

    return (
        <div className='user'>
        <img src={img}></img>
        <p>{user_name}</p>
        <p>Підписників: {count}</p>
        <button onClick={handleClick}><ShinyText text="Підписатися" disabled={false} speed={3} className='custom-class' /></button>
      </div>
    )
}

export default User;