import React from 'react';
import userDefault from '../../assets/icons/userDefault.svg';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header className="header">
      <div className='header-user-info'>
        <img src={userDefault} alt="user default" />
        <div className='header-user-info-text'>
          <span>boa tarde, Emilly!</span>
          <span>olha só o que separei para você hoje</span>
        </div>
      </div>
      <FontAwesomeIcon className="header-menu" icon={faBars} />
    </header>
  )
}

export default Header

