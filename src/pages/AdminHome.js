import React, {useEffect} from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import EditHome from "../components/EditHome";

const AdminHome = () => {
    const {admin, getAdminProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        getAdminProfile();
        console.log(admin)
        if (!admin) {
            navigate("/admin/login");
        }
    });

    if (!admin) {
        return null;
    }

    return (
        <div>
            <AdminNavbar/>
            <EditHome/>
        </div>
    );
}

export default AdminHome;