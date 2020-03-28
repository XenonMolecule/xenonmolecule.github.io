import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Header = () => (
  <Navbar bg={'dark'} variant={'dark'} className={'justify-content-end'}>
    <Nav className={'justify-content-end'}>
      <Nav.Item>
        <Link className={'nav-link'} to={'/wip/'}>About</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={'nav-link'} to={'/wip/'}>Projects</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={'nav-link'} to={'/wip/'}>Experience</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={'nav-link'} to={'/wip/'}>Resume</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className={'nav-link'} to={'/wip/'}>Contact</Link>
      </Nav.Item>
    </Nav>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
