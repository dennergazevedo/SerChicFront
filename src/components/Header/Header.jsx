import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import history from '../../services/history';

//COMPONENTES
import Label from '../../components/Label';

// CSS
import './header.css';


// ICONS
import {
  GiHamburgerMenu,
  GiLargeDress,
  GiSkirt,
  GiTShirt,
  GiSleevelessJacket,
  GiDiscGolfBag,
  GiEarrings,
  GiStarsStack,
  GiRoundStar
} from 'react-icons/gi';

import {
  FiChevronRight,
}from 'react-icons/fi';

import shortIcon from '../../assets/icons/short.png';


// REACTSTRAP
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="headerDiv">
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="headerItem">
                <Link to="/" className="headerItem">
                  <GiLargeDress className="imgHeader"/>
                  <Label color="labelHeader">Vestido</Label>
                </Link>
            </NavItem>

            <NavItem className="headerItem">
                <Link to="/" className="headerItem">
                  <img src={shortIcon} alt="Short" className="imgHeader" />
                  <Label color="labelHeader">Short</Label>
                </Link>
            </NavItem>

            <NavItem className="headerItem">
                <Link to="/" className="headerItem">
                  <GiSkirt className="imgHeader" />
                  <Label color="labelHeader">Saia</Label>
                </Link>
            </NavItem>

            <NavItem className="headerItem">
                <Link to="/" className="headerItem">
                  <GiTShirt className="imgHeader" />
                  <Label color="labelHeader">Blusas</Label>
                </Link>
            </NavItem>
            
            <NavItem className="headerItem">
                <Link to="/" className="headerItem">
                  <GiSleevelessJacket className="imgHeader" />
                  <Label color="labelHeader">Jaqueta</Label>
                </Link>
            </NavItem>
            
            <NavItem className="headerItem">
                <Link to="/" className="headerItem">
                  <GiDiscGolfBag className="imgHeader" />
                  <Label color="labelHeader">Bolsas</Label>
                </Link>
            </NavItem>
            
            <NavItem className="headerItem">
                <Link to="/" className="headerItem">
                  <GiEarrings className="imgHeader" />
                  <Label color="labelHeader">Acessórios</Label>
                </Link>
            </NavItem>
            
            <NavItem className="headerItem">
                <Link to="/" className="headerItem">
                  <GiStarsStack className="imgHeader" />
                  <Label color="labelHeader">Promoções</Label>
                </Link>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default Header;