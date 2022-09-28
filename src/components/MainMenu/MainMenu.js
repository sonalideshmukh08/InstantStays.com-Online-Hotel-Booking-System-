import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./menu.css"
import FadeIn from 'react-fade-in';
import { GlobalContext } from '../../utils/Context';
import styled from "styled-components"

const NameText = styled.p`
    font-size: 26px;
    font-weight: 600;
    color: grey;
    margin-bottom: 10px;
    &.small{
        font-size: 18px;
        margin-bottom: 26px
    }
`

const MenuContent = styled.div`
    display: block;
    max-width: 576px;
    margin: auto;
    @media (max-width: 600px) {
        width: calc(100vw - 32px);
    }
`

const ListItems = styled.ul`
    padding: 0;
    li{
        font-size: 25px;
        font-weight: 700;
        transition: 0.5s;
        cursor: pointer;
        :hover a{
            background-color: #ff6e29;
            padding: 8px 6px;
            transform: scale(1.05);
            border-radius: 4px;
            color: #fff
        }
        a{
            padding: 8px 0;
            display: block;
            transition: 0.5s;
            width: 100%;
            color: #ff6e29;
        }
    }
`


const menu = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Bookings',
        path: '/bookings'
    },
    {
        name: 'Edit Account',
        path: '/profile'
    },
    {
        name: 'Dashboard',
        path: '/dashboard'
    },
    {
        name: 'Log Out',
        path: '/logout'
    }
]

const MainMenu = () => {

    const { menuOpen, setMenuOpen } = useContext(GlobalContext)
    const [user, setUser] = useState()
    const [menuOptions, setMenuOptions] = useState()

    useEffect(() => {
        if(menuOpen){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'visible'
        }
        if (localStorage.getItem('user')) {
          const userData = JSON.parse(localStorage.getItem('user'))
          setUser(userData)
          if(userData.isManager) {
              const temp = menu.filter(x => x.path !== '/bookings')
              setMenuOptions(temp)
          } else {
              const temp = menu.filter(x => x.path !== '/dashboard')
              setMenuOptions(temp)
          }
        } else {
          setMenuOptions([{
            name : 'Login',
            path : '/login'
          },{
            name : 'Register',
            path : '/register'
          }])
        }
    }, [menuOpen])

    return (
        <div className={`main-menu-container ${menuOpen ? 'open' : ''}`}>
            {menuOpen && (
                <MenuContent>
                    <FadeIn delay={200}>
                        <div className="user-details">
                            <div className="details">
                                <NameText>{user?.name ? `Hi, ${user?.name}` : ''}</NameText>
                                <NameText className="small">{user?.email ? `${user?.email}` : ''}</NameText>
                            </div>
                        </div>
                    </FadeIn>
                    <ListItems>
                        {menuOptions.map((mp, i) => (
                            <li>
                                <FadeIn delay={300 * (i + 1)}>
                                    <Link onClick={() => setMenuOpen(false)}
                                    to={`${mp.path}`}>{mp.name}</Link>
                                </FadeIn>
                            </li>
                        ))}
                    </ListItems>
                </MenuContent>
            )}
        </div>
    )
}

export default MainMenu
