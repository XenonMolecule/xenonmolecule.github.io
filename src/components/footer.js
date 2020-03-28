import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Nav from "react-bootstrap/Nav"

const Footer = () => (
  <Navbar className = {'justify-content-center'} fixed={'bottom'} bg={'dark'} variant={'dark'}>
    <Nav style={{'fontSize':'24px'}}>
      <Nav.Item>
        <Nav.Link href={'https://github.com/XenonMolecule'}>
          <FontAwesomeIcon icon={faGithub} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={'https://www.linkedin.com/in/michael-ryan-207/'}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={'https://www.facebook.com/michaelryan207'}>
          <FontAwesomeIcon icon={faFacebook} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
)

export default Footer
