import '../../assets/css/logInSignUp.css';
import Logo from '../../assets/icon/E-Leraning-Logo-White.png'
import {Link} from 'react-router-dom';
function SignUp(){
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
                <div style={{marginLeft:"-125px"}}>
                    <div className="flex logInSignUp-main-heading">
                        <h1>Sign Up</h1><p> &nbsp; Now</p>
                    </div>
                    <div className="logInSignUp-sub-heading">
                        Login Your Account <Link to="/login" style={{color:"#4c1864"}}> Click Here</Link> 
                    </div>
                </div>
                {/* ---------signup form container -------------- */}
                <div>
                    <form className="flex flex-col" >
                        <input type="text" name="name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your email" required/>
                        <input type="password" name="password" placeholder="Your Password" required/>
                        {/* <div className="flex jtc-sp-around">
                            <div>
                                <input type="radio" name="user"/>
                                <label for="Student">Student</label>
                            </div>
                            <div>
                                <input type="radio" name="user"/>
                                <label for="Teacher">Teacher</label>
                            </div>
                        </div>
                        <Link to="/forgot_password" className="flex jtc-end forgot-pwd-btn cursor-pointer">Forgot Password?</Link> */}
                        <button type="submit" className="logIn-signup-btn cursor-pointer">Sign Up</button>
                    </form>
                </div>
                {/* ------------sign up through social media ---------------- */}
                <div className="social-media-login-sign-up">
                    <h4>Sign Up with social media</h4>
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
export default SignUp;