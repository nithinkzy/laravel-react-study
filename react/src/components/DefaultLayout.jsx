import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();

    if (!token) {
        <Navigate to="/login" />;
    }

    const onLogout = () => {};
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <div>Header</div>
                <div>
                    {user.name}
                    <a href="#" onClick={onLogout} className="btn-logout">
                        Logout
                    </a>
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
