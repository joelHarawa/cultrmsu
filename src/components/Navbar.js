import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from "./Logo";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const {user, getProfile, logout} = useContext(AuthContext);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    return (
        <Container>
            <Wrapper>
                    <LogoItem to={"/"}><Logo/></LogoItem>
                    <MenuItem to="/issues">ISSUES</MenuItem>
                    <MenuItem to="/blog/allposts">BLOG</MenuItem>
                    <MenuItem to="/about">ABOUT US</MenuItem>
                    {user ?
                    <ProfileMenu 
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setTimeout(10000)}
                    >
                    <MenuItem to="/profile">
                        <Profile>
                            <ProfileImage src={user.profilePicture}/>
                        </Profile></MenuItem>
                        {hovering && (
                            <Dropdown
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            >
                                <DropdownItem onClick={logout}>Logout</DropdownItem>
                            </Dropdown>
                        )}
                    </ProfileMenu>     :
                     <MenuItem to="/login">
                        <Profile>
                            <ProfileImage src={"https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"}/>
                        </Profile>
                     </MenuItem>
                    }
            </Wrapper>
        </Container>
    )
}

export default Navbar;

const Container = styled.div`
    height:8vh;
    background-color: white;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Profile = styled.div`
    border-radius: 50%;
    height: 40px;
    width: 40px; 
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const MenuItem = styled(Link)`
    font-size: 18px;
    font-family: 'DM Sans', serif;
    font-weight: 600;
    cursor: pointer;
    margin-left: 30px;
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
`;
const LogoItem = styled(Link)`
    font-size: 18px;
    font-family: 'DM Sans', serif;
    font-weight: 600;
    cursor: pointer;
    margin-left: 30px;
    text-decoration: none;
    color: black;
`;

const ProfileMenu = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 50px;
    right: 10;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    z-index: 10;
`;

const DropdownItem = styled.div`
    font-family: 'DM Sans', serif;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    color: black;
    &:hover {
        background-color: #f0f0f0;
    }
`;
