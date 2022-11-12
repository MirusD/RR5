import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from "./pages/homePage"
import AppLayout from "./layouts/appLayout"
import UsersLayout from "./layouts/usersLayout"
import UsersListPage from "./pages/usersListPage"
import UserPage from "./pages/userPage"
import EditUserPage from "./pages/editUserPage"
import Redirect from "./components/redirect"

function App() {
    return (
        <AppLayout>
            <Routes>
                <Route index element={<HomePage/> }/>
                <Route path="users" element={<UsersLayout/>}>
                    <Route index element={<UsersListPage/>}/>
                    <Route path=":userId">
                        <Route index element={<Redirect to="profile"/>}/>
                        <Route path="profile" element={<UserPage/>}/>
                        <Route path="edit" element={<EditUserPage/>}/>
                        <Route path="*" element={<Redirect to="profile"/>}/>
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </AppLayout>
    )
}

export default App
