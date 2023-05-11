import React from "react";


function Header(props) {

    const {setMode = Function.prototype} = props;

    return  <nav className='#8e24aa purple darken-1'>
                <div className="nav-wrapper #8e24aa purple darken-1">
                    <a href="#" className="brand-logo">shop</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li onClick={() => setMode('fortnite')}><a href="sass.html">fortnite</a></li>
                        <li onClick={() => setMode('csgo')}><a href="#">csgo</a></li>
                        <li><a href="https://github.com/PaveqP/React_shop">info</a></li>
                    </ul>
                </div>
            </nav>
}

export {Header}