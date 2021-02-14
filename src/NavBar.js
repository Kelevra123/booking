import React, {useEffect, useRef, useState} from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../src/img/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBag, faBullhorn, faBookmark, faBars} from '@fortawesome/free-solid-svg-icons'
import SwapsContainer from "./SwapsContainer";
import {gsap} from 'gsap'

const ShopingIcon = (<FontAwesomeIcon icon={faShoppingBag} size={'lg'} className='navbar-item-icon'/>)
const BullhornIcon = (<FontAwesomeIcon icon={faBullhorn} size={'lg'} className='navbar-item-icon'/>)
const BookMarkIcon = (<FontAwesomeIcon icon={faBookmark} size={'lg'} className='navbar-item-icon'/>)
const BarsIcon = (<FontAwesomeIcon icon={faBars} size={'lg'} className='navbar-item-icon text-dark'/>)

function NavBar() {
    const [isShow, setIsShow] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const spanTitle = useRef(null)
    const dropdown = useRef(null)

    const toggleVis = (e) => {
        if (dropdown.current) {
            if(e.target.classList.contains('dropdown-toggle') || e.target.classList.contains('fa-bars') || e.target.nodeName === 'path') {
                setIsOpen(!isOpen)
            }
        }
    }

    useEffect(() => {
        gsap.from('.dropdown-menu', {left: '30%', opacity: 0 , duration: 0.5, ease: 'ease-in-out'})
        gsap.to('.dropdown-menu', {left: 0 , opacity: 1, duration: 0.5, ease: 'ease-in-out'})
    }, [visible])

    const getClass = (e) => {
        if (spanTitle.current) {
            if (e._reactName === "onMouseLeave") {
                spanTitle.current.classList.remove('text-white')
            } else {
                spanTitle.current.classList.add('text-white')
            }
        }
    }


    const trigger = () => {
        setVisible(!visible)
    }

    const homeChildrens = [
        'PARALLAX IMAGE',
        'SLIDER',
        'CAROUSEL',
        'SLIDESHOW',
        'VIDEO',
        'ONE PAGE'
    ]
    const menuChildrens = ['MENU 1', 'MENU 2', 'MENU 3']
    const pages = ['SHOP', 'PRODUCT SINGLE', 'CART', 'GALLERY', "BLOG SINGLE", '404', 'COMING SOON']

    const navItems = [
        {title: 'HOME', children: homeChildrens, visible: true},
        {title: 'MENU', children: menuChildrens, visible: true},
        {title: 'ABOUT', children: [], visible: true},
        {title: 'CONTACTS', children: [], visible: true},
        {title: 'NEWS', children: [], visible: true},
        {title: 'PAGES', children: pages, visible: true}
    ]




    return (
        <>
                <Container fluid className='header-container'>
                    <Navbar expand='xl' className='py-0 pr-0 navbar-container-navbar'>

                        <Navbar.Brand href="#home"><img className=' text-center' src={logo} alt=""/></Navbar.Brand>
                        <NavDropdown
                            children={<SwapsContainer trigger={() => trigger()} arr={navItems}/>}
                            className='text-dark navbar-toggler-icon-main'
                            title={BarsIcon}
                            show={isOpen}
                            onClick={(e) => toggleVis(e)}
                            ref={dropdown}
                            id='nav-menu-dd'
                        />
                        <Nav className="font-weight-bold text-dark flex-row navbar-main-nav">
                            <NavDropdown
                                show={isShow === 'HOME'}
                                onMouseEnter={() => setIsShow('HOME')}
                                onMouseLeave={() => setIsShow('')}
                                title="HOME"
                                id="basic-nav-dropdown-home"
                            >

                                <NavDropdown.Item href="#action/3.1">PARALLAX IMAGE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">SLIDER</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">CAROUSEL</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">SLIDESHOW</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">VIDEO</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">ONE PAGE</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                show={isShow === 'MENU'}
                                onMouseEnter={() => setIsShow('MENU')}
                                onMouseLeave={() => setIsShow('')}
                                title="MENU"
                                id="basic-nav-dropdown-menu"
                            >
                                <NavDropdown.Item href="#action/4.1">MENU 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.2">MENU 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4.3">MENU 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link  href="#home">ABOUT</Nav.Link>
                            <Nav.Link href="#link">CONTACT</Nav.Link>
                            <Nav.Link  href="#home">NEWS</Nav.Link>
                            <NavDropdown
                                show={isShow === 'PAGES'}
                                onMouseEnter={() => setIsShow('PAGES')}
                                onMouseLeave={() => setIsShow('')}
                                title="PAGES"
                                id="basic-nav-dropdown-pages"
                            >
                                <NavDropdown.Item href="#action/3.1">SHOP</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">PRODUCT SINGLE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">CART</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">GALLERY</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">BLOG SINGLE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">404</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">COMING SOON</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <div className='d-flex justify-content-end align-items-center nav-icon-container'>
                            <a className='p-sm-2 ss'  href="#home">{ShopingIcon}</a>
                            <a className='p-sm-2 ss'  href="#home">{BullhornIcon}</a>
                            <div
                                className='nav-link-res res-1 d-lg-block d-md-none d-sm-none d-none'
                                onMouseEnter={(e) => getClass(e)}
                                onMouseLeave={(e) => getClass(e)}
                            >
                                <a href="#home">
                                  <span
                                      ref={spanTitle}
                                      className='nav-link-res__title'
                                  >
                                      RESERVATION
                                  </span>
                                </a>
                            </div>
                            <a className="p-sm-2 d-sm-block d-md-block d-lg-none ss">{BookMarkIcon}</a>
                        </div>
                    </Navbar>
                </Container>
        </>
    );
}

export default NavBar;
