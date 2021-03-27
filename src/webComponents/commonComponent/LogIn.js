import '../../assets/css/logInSignUp.css';
import Logo from '../../assets/icon/E-Leraning-Logo-White.png'
import {Link} from 'react-router-dom';
function LogInSignUp(props){
    return(
        <div className="flex logInSignUp-container font-ahs br">
            {/* ------------left side container------------ */}
            <div className="flex jtc-sp-around ali-center logo-container">
                <Link to="/">
                    <img 
                        src={Logo}
                        alt="elearning logo"
                    />
                </Link>
            </div>
            {/* -----------right side container ---------------- */}
            <div className="flex flex-col jtc-sp-around ali-center form-container">

                <div>
                    <div className="flex logInSignUp-main-heading">
                        <h1>Login to your</h1><p> &nbsp; Account</p>
                    </div>
                    <div className="logInSignUp-sub-heading">
                        Dont't have an account?<Link to="/signup" style={{color:"#4c1864"}}> Create One Here</Link> 
                    </div>
                </div>
                {/* ------login form container -------------- */}
                <div>
                    <form className="flex flex-col" >
                        <div className="flex jtc-sp-around">
                            <div className="flex jtc-center ali-center">
                                <input type="radio" name="user" className="br" />
                                <label for="Student" className="radio-label">Student</label>
                            </div>
                            <div className="flex jtc-center ali-center">
                                <input type="radio" name="user"/>
                                <label for="Teacher" className="radio-label">Teacher</label>
                            </div>
                        </div>
                        <input type="email" name="email" placeholder="Enter email" required/>
                        <input type="password" name="password" placeholder="Enter Password" required/>
                        <Link to="/forgot_password" className="flex jtc-end forgot-pwd-btn cursor-pointer">Forgot Password?</Link>
                        <button type="submit" className="logIn-signup-btn cursor-pointer">Login</button>
                    </form>
                </div>
                {/* ---------login through social media ---------------- */}
                <div className="social-media-login-sign-up">
                    <h4>Login with social media</h4>
                    <div className="flex jtc-sp-between">
                        <button className="fb-btn cursor-pointer">
                            <i className="fa fa-facebook"></i>
                            &nbsp;I Facebook
                        </button>
                        <button className="google-btn cursor-pointer">
                            <i className="fa fa-google"></i>
                            &nbsp;I Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogInSignUp;