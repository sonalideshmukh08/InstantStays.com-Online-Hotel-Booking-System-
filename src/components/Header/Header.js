import React, { useContext } from 'react'
import "./header.css"
import { GlobalContext } from '../../utils/Context'
import styled from 'styled-components'
import { PageTitle } from '../GlobalStyles/PageStyles'
import HotelLogo from "../../assets/logo.png"
import {Link} from 'react-router-dom'

const FixedHeader = styled.div`
    padding: 12px 16px;
    backdrop-filter: blur(42px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
    justify-content: space-between
`

const Logo = styled.div`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 105px;
        width: 160px;
    }
`

const Header = (props) => {
    const { setMenuOpen, menuOpen } = useContext(GlobalContext)
    let pageName = "InstantStays"

    const user = {}

    const homeStyles = {
        backgroundColor: '#0000009c', 
        backdropFilter: 'none'
    }

    return (
        <FixedHeader
            style={menuOpen ? { backgroundColor: '#fff', 
            backdropFilter: 'blur(0px)' } : {}}>
            <Content>
                <div className="brand">
                    <Link to="/"><Logo><img src={HotelLogo} alt="/" /></Logo></Link>
                    {/* <PageTitle>{pageName}</PageTitle> */}
                </div>
                {user && (
                    <div className="collection" style={{display: 'flex', alignItems: 'center'}}>
                        <p className='user-name' 
                        style={{display: `${pageName === 'Home' && !menuOpen ? 'block' : 'none'}`}}>
                        Hello, {user.name}
                        </p>
                        <div className={`menu-icon ${menuOpen ? 'close-icon' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}>
                            <div className="leftright"></div>
                            <div className="rightleft"></div>
                        </div>
                    </div>
                )}
            </Content>

        </FixedHeader>
    )
}

export default Header

