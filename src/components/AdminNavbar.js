import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import Logo from "./Logo";
import { AuthContext } from "../context/AuthContext";


const AdminNavbar = () => {
    const {admin, getAdminProfile, adminLogout} = useContext(AuthContext);
    const [hovering, setHovering] = useState(false);
    const navigate = useNavigate();

    const clear = () => {
        adminLogout();
        navigate("/admin/login");
    }    
    useEffect(() => {
        getAdminProfile();
    }, []);

    return (
        <Container>
            <Wrapper>
                    <LogoItem to={"/admin"}><Logo/></LogoItem>
                    <MenuItem to="/admin/about">EDIT ABOUT US</MenuItem>
                    <MenuItem to="/admin/home">EDIT HOME</MenuItem>
                    <MenuItem to="/admin/issues">ADD ISSUE</MenuItem>
                    <MenuItem to="/admin/blog">ADD BLOG POST</MenuItem>
                    <MenuItem to="/admin/login/edit">EDIT LOGIN</MenuItem>
                    <MenuItem to="/admin/signup/edit">EDIT SIGN UP</MenuItem>
                    {admin ? 
                    <ProfileMenu 
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setTimeout(10000)}
                    >
                    <MenuItem to="/admin/profile">
                    <Profile>
                        <ProfileImage src={admin.profilePicture}/>
                    </Profile></MenuItem>
                    {hovering && (
                        <Dropdown
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            >
                                <DropdownItem onClick={clear}>Logout</DropdownItem>
                            </Dropdown>
                    )} 
                    </ProfileMenu> :
                     <MenuItem to="/admin/login">
                     <Profile>
                         <ProfileImage src={"https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"}/>
                     </Profile></MenuItem>
                      }
            </Wrapper>
        </Container>
    )
}

export default AdminNavbar;

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
