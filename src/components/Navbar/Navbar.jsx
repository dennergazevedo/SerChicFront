import React, { useState } from 'react';

//COMPONENTES
import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
// CSS
import './navbar.css';

//LOGO
import logo from '../../assets/img/logohorizontal.png';

// ICONS
import {
  IoIosHome,
  IoIosMail,
  IoMdCart,
  IoMdPerson,
} from 'react-icons/io';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src={logo} height="50px" alt="LOGO" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {
            !isOpen ?
              <>
                <Nav className="mr-auto" navbar>
                  <NavItem className="navItem">
                    <Input placeholder="Pesquisar" color="navSearch" type="text" />
                  </NavItem>
                </Nav>

                <Nav className="mr-auto" navbar>
                  <NavItem className="navItem">
                    <NavLink href="/"><IoIosHome className="iconNav" /></NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/contact"><IoIosMail className="iconNav" /></NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/cart"><IoMdCart className="iconNav" /></NavLink>
                  </NavItem>

                  {
                    props.signed ?
                      <NavItem className="navItem">
                        <NavLink href="/profile"><IoMdPerson className="iconNav" /></NavLink>
                      </NavItem>
                      : //LOGADO
                      <>
                        <NavItem className="navItem">
                          <Input placeholder="Email" color="navTransparent" type="email" />
                        </NavItem>

                        <NavItem className="navItem">
                          <Input placeholder="Senha" color="navTransparent" type="password" />
                        </NavItem>

                        <NavItem className="navItem">
                          <Button color="rosa" label="Entrar" />
                        </NavItem>

                        <NavItem className="navItem">
                          <Label color="cursorBranco" text="Cadastrar-se" />
                        </NavItem>
                      </>
                  }
                </Nav>
              </>
              : //isOpen
              <>
                <Nav className="mr-auto" navbar>
                  <NavItem className="navItem">
                    <Input placeholder="Pesquisar" color="navSearchOpen" type="text" />
                  </NavItem>
                </Nav>

                <Nav className="mr-auto" navbar>
                  <NavItem className="navItem">
                    <NavLink href="/"><IoIosHome className="iconNav" /></NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/contact"><IoIosMail className="iconNav" /></NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/cart"><IoMdCart className="iconNav" /></NavLink>
                  </NavItem>

                  {
                    props.signed ?
                      <NavItem className="navItem">
                        <NavLink href="/profile"><IoMdPerson className="iconNav" /></NavLink>
                      </NavItem>
                      : //LOGADO
                      <>
                        <NavItem className="navItem">
                          <Input placeholder="Email" color="navTransparentOpen" type="email" />
                        </NavItem>

                        <NavItem className="navItem">
                          <Input placeholder="Senha" color="navTransparentOpen" type="password" />
                        </NavItem>

                        <NavItem className="navItem">
                          <Button color="rosa" label="Entrar" />
                        </NavItem>

                        <NavItem className="navItem">
                          <Label color="cursorBranco" text="Cadastrar-se" />
                        </NavItem>
                      </>
                  }
                </Nav>
              </>
          }

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;