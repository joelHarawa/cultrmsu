import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AddPost from "../components/AddPost";
import styled from "styled-components";
import AdminNavbar from "../components/AdminNavbar";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const AddBlogPost = () => {
    const {admin, getAdminProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect (() => {
        getAdminProfile();
        if (!admin) {
            navigate("/admin/login");
        }
    })
    return (
        <>
        <AdminNavbar/>
        <Container>
            <AddPost/>
        </Container>
        </>
    )
}

export default AddBlogPost;