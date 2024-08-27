/* eslint-disable no-unused-vars */
import {
    Route,
    Routes,
} from "react-router-dom";
import Signin from "../pages/login";
import Signup from "../pages/signup";
import PublicRoutes from '../redux/auth/publicRoutes'
import PrivateRoutes from '../redux/auth/privateRoutes'
import React from 'react'
import VerifyCode from "../pages/verifyCode";
import SidebarLayout from "../layout/sidebarLayout";
import Messages from './../pages/chat/message';
import Home from "../pages/home";
// import NoMatch from './../snackbar/nomatch';
import Landing from "../pages/landing";
import Iphone3dView from "../iphone3d/Iphone3dView";
import Prayers from "../pages/prayers";
import Duas from "../pages/duas";
import Names from "../pages/names";
import HajjUmrah from "../pages/hajjUmrah";
import HajjUmrahDetail from "../pages/hajjUmrahDetail";
import LearnQuran from "../pages/learnQuran";
import Learn from "../pages/learn";
import Tasbeeh from "../pages/tasbeeh";
import ReciteTasbeeh from "../pages/reciteTasbeeh";
import ProfileSetting from "../pages/profileSetting";
import CustomCalendar from  '../common/CustomCalendar';
const Routing = () => {
    return (
        <>
            <Routes>
                {/* <Route element={<PrivateRoutes />}> */}
                <Route path="/home" element={<Home />} ></Route>
                <Route path="/" element={<Landing/>} ></Route>
                <Route path="/prayers" element={<Prayers/>} ></Route>
                <Route path="/duas" element={<Duas/>} ></Route>
                <Route path="/hajj" element={<HajjUmrah/>} ></Route>
                <Route path="/detail-page/:id" element={<HajjUmrahDetail/>} ></Route>
                <Route path="/names" element={<Names/>} ></Route>
                <Route path="/learn-Quran" element={<LearnQuran/>} ></Route>
                <Route path="/learn" element={<Learn/>} ></Route>
                <Route path="/tasbeeh" element={<Tasbeeh/>} ></Route>
                <Route path="/recite-tasbeeh" element={<ReciteTasbeeh/>} ></Route>
                <Route path="/sidebar-layout" element={<SidebarLayout />} ></Route>
                <Route path="/chat/:id?" element={<Messages />} ></Route>
                <Route path="/profile-setting" element={<ProfileSetting />} ></Route>
                <Route path="/calender" element={<CustomCalendar />} ></Route>
                

                {/* </Route> */}
                {/* <Route element={<PublicRoutes />}>
                    <Route path="login" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="code-verify" element={<VerifyCode />} />
                </Route> */}
                {/* <Route path="*" element={<NoMatch />} /> */}
                
            </Routes>
        </>
    )
}

export default Routing