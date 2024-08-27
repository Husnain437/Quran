/* eslint-disable no-unused-vars */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'
import './components/style/main.css'
import './components/style/main.scss'
import Routing from './components/routes/routes';
import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, ThemeProvider } from 'react-bootstrap';
import UserLayout from './components/layout/layout';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import NavHeader2 from './components/navHeader/navHeader';
import NavHeader from './components/navHeader/navHeader';
function App() {
  const location = useLocation()
  const theme = useSelector((state) => state.themeDart.theme)
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    global.BASEURL = `http://192.168.18.134:5200/api`;
    global.BASEURL2 = `http://192.168.18.134:5200`;
    global.TOKEN = window.localStorage.getItem('react_template_token')
    window.scroll(0, 0)
  }, [location])
  return (
    <>
    
      <ThemeProvider theme={{ mode: theme }}>
        <UserLayout>
        <NavHeader/>
        <Suspense fallback={
            <div className="w-100 vh-100 main_app d-flex justify-content-center align-items-center">
              <Spinner />
            </div>}>
          <Routing />

        </Suspense>
        </UserLayout>
      </ThemeProvider >
    </>
  );
}

export default App;
