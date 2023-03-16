import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { faBars, faX, faHandsPraying, faHome, faJar, faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav() {

  const [visibility, setVisibility] = useState(false)

  const toggle = () => {
    setVisibility(!visibility)
  }

  return (
    <section id="nav">
        <FontAwesomeIcon icon={faBars} onClick={toggle} className={!visibility ? 'show' : 'hidden'} style={{color: '#456990'}} />
        <FontAwesomeIcon icon={faX} onClick={toggle} className={visibility ? 'show': 'hidden'} style={{color: '#456990'}} />

        <nav className={visibility ? 'show' : 'hidden'}>
            <ul>
                <li onClick={toggle}>
                    <Link to="/">
                        <FontAwesomeIcon className='nav-item' icon={faHome} />
                        Home
                    </Link>
                </li>
                <li onClick={toggle}>
                    <Link to="/feed">
                        <FontAwesomeIcon className='nav-item' icon={faRectangleList} /> 
                        Prayer Feed
                    </Link>
                </li>
                <li onClick={toggle}>
                    <Link to="/prayers">
                        <FontAwesomeIcon className='nav-item' icon={faHandsPraying} /> 
                        Praying For
                    </Link>
                </li>
                <li onClick={toggle}>
                    <Link to="/requests">
                        <FontAwesomeIcon className='nav-item' icon={faJar} /> 
                        My Prayer Requests
                    </Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </section>
  )
}
