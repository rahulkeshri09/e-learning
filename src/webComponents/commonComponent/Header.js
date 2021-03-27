import {Link} from 'react-router-dom';
import Logo from '../../assets/icon/E-Learning-Logo.png';
import '../../assets/css/header.css';
function Header(){
    //open mobile view Navbar function
    const openMViewNavBar=()=>{
        const mNavbar=document.getElementById("m-navbar");
        const mainHeader=document.getElementById("main-header");
        const backBtn=document.getElementById("back-btn-mView-header")
        mNavbar.style.width="60vw";
        mainHeader.style.display="none";
        backBtn.style.display="block";
    }
    //close mobile view Navbar function
    const closeMViewNavBar=()=>{
        const mNavbar=document.getElementById("m-navbar");
        const mainHeader=document.getElementById("main-header");
        const backBtn=document.getElementById("back-btn-mView-header")
        mNavbar.style.width="0vw";
        mainHeader.style.display="flex";
        backBtn.style.display="none";
    }  
    return(
        <div>
            {/* desktop view */}
            <header className="flex jtc-sp-between ali-center" id="dView-header">
                {/* logo container */}
                <div className="flex" id="logo-container">
                    <img
                        className="logo" 
                        src={Logo}
                        alt="e-learing logo" 
                    />
                </div>
                {/* navbar container */}
                <div id="navbar" className="flex">
                    <ul className="flex jtc-sp-around">
                        <li>
                            <Link to="/" className="rm-decoration ">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about" className="rm-decoration">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/achievements" className="rm-decoration">ACHIEVEMENTS</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="rm-decoration">GALLERY</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="rm-decoration">BLOG</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="rm-decoration">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
                {/* log in sign up button container */}
                <div className="flex log-in-btn jtc-center">
                    <div>
                        <Link to="/login" className="rm-decoration btn-login-sign-up font-ahs cursor-pointer">
                            Log In
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/signup" className="rm-decoration btn-login-sign-up font-ahs cursor-pointer">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>
            {/* mobile view */}
            <header id="mView-header" className="jtc-sp-between ali-center">
                        <div className="flex jtc-sp-between ali-center" id="main-header">
                            <div className="flex" id="logo-container-mView-1">
                                <img
                                    className="logo" 
                                    src={Logo} 
                                    alt="logo" 
                                />
                            </div>
                            <i className="fa fa-bars" id="hamburger-icon" onClick={openMViewNavBar}></i>
                        </div>
                        <div>
                            {/* mobile view navbar-container */}
                            <div id="m-navbar" className="flex">
                                <div id="back-btn-mView-header" className="flex jtc-end" onClick={closeMViewNavBar}>x</div>
                                <ul className="flex jtc-sp-around">
                                    {/* logo container */}
                                    <div className="flex" id="logo-container-mView-2">
                                        <img
                                            className="logo" 
                                            src={Logo}
                                            alt="logo" 
                                        />
                                    </div>
                                    {/* log in sign up button container */}
                                    <div className="flex log-in-btn jtc-center">
                                        <div>
                                            <Link to="/login" className="rm-decoration btn-login-sign-up">Log In</Link>
                                        </div>
                                        <div>
                                            <Link to="/signup" className="rm-decoration btn-login-sign-up">Sign Up</Link>
                                        </div>
                                    </div>
                                    {/* navlinks */}
                                    <li>
                                        <Link to="/home" className="rm-decoration">HOME</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="rm-decoration">ABOUT</Link>
                                    </li>
                                    <li>
                                        <Link to="/achievements" className="rm-decoration">ACHIEVEMENTS</Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery" className="rm-decoration">GALLERY</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" className="rm-decoration">BLOG</Link>
                                    </li>
                                    <li>
                                        <Link t0="/contact-us" className="rm-decoration">CONTACT US</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </header>
            </div>
    )
}
export default Header;