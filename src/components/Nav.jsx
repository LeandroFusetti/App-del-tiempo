import Searchbar from "./SearchBar"
import Logo from '../images/tiempo_icon.png'
import {Link} from 'react-router-dom'
import React from "react"

export default function Nav (props){
    return(
        <div>
        <Link to='/'>
        <span >
          <img src={Logo} width="30" height="30"  alt="logo" />
          
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
            <Searchbar onSearch={props.onSearch}/>
        </div>
    )
}