import styled from "styled-components"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { selectUserEmail, selectUserPassword, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/userSlice";
import { useEffect } from "react";

const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userEmail = useSelector(selectUserEmail)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        const user = localStorage.getItem('user')

        if(user){
            dispatch(setUserLoginDetails(JSON.parse(user)))
        }
    }, [])

    const handleAuth = () =>{
        if(userEmail){
            dispatch(setSignOutState())
            localStorage.clear()
            history.push('/')
        }
    }


    return (
        <Nav>
            <Logo>
                <img src='https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg' alt='Disney+'/>
            </Logo>
            {userEmail 
                ?  
                    <>
                        <NavMenu>
                            <a href='/home'>
                                <HomeIcon/>
                                <span>HOME</span>
                            </a>
                            <a>
                                <SearchIcon/>
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <AddIcon/>
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <StarIcon/>
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <TheatersIcon/>
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <LiveTvIcon/>
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto}/>
                            <DropDown>
                                <span onClick={handleAuth}>Sign out</span>
                            </DropDown>
                        </SignOut>
                        
                    </>
                : <Login href='/login'>LOGIN</Login>
            }
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    transition: opacity .5s ease-out;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    transition: all .2s ease 0s;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            margin-left: 8px;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: '';
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media (max-width: 768px){
        display: none;
    }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 114px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }

`;

export default Header
