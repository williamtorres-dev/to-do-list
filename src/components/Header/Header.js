import React from 'react';
import HeaderStyle from './Header.module.css';
import { MdMenu } from 'react-icons/md';
import LogoToDo from '../SVGs/LogoToDo';

const Header = () => {
  return (
    <header>
      <nav>
        <MdMenu className={HeaderStyle.menu} />
      </nav>
      <LogoToDo className={HeaderStyle.logo} />
    </header>
  );
};

export default Header;
