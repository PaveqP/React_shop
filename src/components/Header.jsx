import React from "react";
import './styles.css'

function Header(props) {

    const {setMode = Function.prototype} = props;

    return  <nav className='#8e24aa purple darken-1'>
                <div className="nav-wrapper">
                    <a href="#" className="logo">shop</a>
                    
                    <ul id="nav-mobile" className="right">
                        <li className="separator"></li>
                        <li onClick={() => setMode('fortnite')}><a href="https://paveqp.github.io/React_shop/#">fortnite</a></li>
                        <li onClick={() => setMode('csgo')}><a href="https://paveqp.github.io/React_shop/#">csgo</a></li>
                        <li><a href="https://github.com/PaveqP/React_shop">info</a></li>
                    </ul>
                </div>
            </nav>
}

export {Header}