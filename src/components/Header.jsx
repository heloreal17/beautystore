import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img from '../image/BS.png'


function Header() {
  return (
    <>
         
    <div className="top">

    <div className="caixa">
      <span className="navbar-brand">
          <img src={img} alt="Logo" style={{ width: '150px', marginRight: '10px' }} />
      </span>
    </div>

    <Navbar>
        
      <NavLink className="navbar-brand fw-bold md-auto" to="/"><img src="" alt="" width="80px"/></NavLink>
       
      <Container className="container">
          <div>
            <Link to="/home" className='beauty'>BeautyStore</Link>
          </div>
          <Nav className="cabecalho">
            {/*<NavLink className="nav-link" to="/home">Home</NavLink>*/}
            <NavLink  className='store' to="/produtobeleza">Cadastrar produto</NavLink>
            <NavLink  className='store' to="/usuario">Entrar</NavLink>
          </Nav>
        </Container>
        

      </Navbar>
            </div>
                    
            
                
        </>
    )
}

export default Header;