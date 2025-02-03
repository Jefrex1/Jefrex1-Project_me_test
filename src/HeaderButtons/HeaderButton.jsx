import { useState } from 'react';
import './HeaderButton.css'
import reactLogo from '../assets/react.svg'
import { materialOpacity, temp } from 'three/tsl';
import { useRef } from "react";

function HeaderButton(props) {
    const {icon, main_name, page_redirect} = props;
    const [More_Info, setMore_Info] = useState(true);
    let main_name_length = main_name.length
    const buttonRef = useRef(null);

    const redirect = () => {
        page_redirect ? window.open(page_redirect) : null;
    }

    const change_width = (prop) => {
        if (prop == 'add') {
            buttonRef.current.style.width = `${main_name_length*17}px`;
        } else {
            buttonRef.current.style.width = "30px";
        }

    }
  

    return (
        <>
            <button ref={buttonRef} className="header_button"
                onClick={redirect}
                onMouseEnter={() => {setMore_Info(false); change_width('add')}} 
                onMouseLeave={() => {setMore_Info(true); change_width('remove')}}

                >

                <img src={icon}></img> 

                <p className='more_info'>{More_Info ? null :
                    <p className='main_button_title'>{main_name}</p>}
                </p>

            </button>
            {/*<div className='test_smooth'></div>*/}
        </>
    )
}

export default HeaderButton;