import React from 'react'
import { useSelector } from 'react-redux'
// import NavHeader2 from './../navHeader/navHeader2 ';
const UserLayout = ({ children }) => {
    const theme = useSelector((state) => state.themeDart.theme)
    return (
        <>
            {/* <NavHeader2 /> */}
            <main className={`${theme} bg_main`}>
                {children}
            </main>
        </>
    )
}

export default UserLayout