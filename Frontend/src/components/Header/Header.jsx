import React from 'react';
import { Link } from 'react-router-dom';
import { headerStyles } from './Header.styles';
import "./Header.scss";
import HomeIcon from '@mui/icons-material/Home';
import MemoryIcon from '@mui/icons-material/Memory';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsIcon from '@mui/icons-material/Settings';
import CompareIcon from '@mui/icons-material/Compare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  function activeHandler(){

  }

  return (
    <header className={`${headerStyles.header}`}>
      <div className={headerStyles.container}>
        <div className={headerStyles.logoContainer}>
            <Link to="/" className={`${headerStyles.btnMainPage}`}>
              <MemoryIcon sx={{fontSize: 30}} />
              <span className={headerStyles.logoText}>PCBuilder</span>
            </Link>
        </div>
        
        <nav className={headerStyles.nav}>
          <Link to="/" className={headerStyles.navLink}><HomeIcon sx={{fontSize: 20}}/>Home</Link>
          <Link to="/components" className={headerStyles.navLink}><MemoryIcon sx={{fontSize: 20}} />Components</Link>
          <Link to="/builds" className={headerStyles.navLink}><ComputerIcon sx={{fontSize: 20}} />Builds</Link>
          <Link to="/configurator" className={headerStyles.navLink}><SettingsIcon sx={{fontSize: 20}} />Configurator</Link>
          <Link to="/compare" className={headerStyles.navLink}><CompareIcon sx={{fontSize: 20}} />Compare</Link>
          <Link to="/profile" className={headerStyles.navLink}><AccountCircleIcon sx={{fontSize: 20}} />Profile</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link to="/signin" className={headerStyles.authButton}>
          <AccountCircleIcon sx={{fontSize: 20}} className="mr-1" />Sign In
          </Link>
        </div>
        
        
      </div>
    </header>
  );
};

export default Header;

