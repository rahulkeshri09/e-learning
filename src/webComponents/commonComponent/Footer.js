import FooterLogo from '../../assets/icon/E-Leraning-Logo-White.png';
import '../../assets/css/footer.css';
function Footer(){
    return(
        <div>
            <footer className="flex jtc-sp-around font-ahs">
                <div className="flex flex-col color-darkgray" id="address">
                    {/* footer logo and address*/}
                    <div>
                        <img
                            className="cursor-pointer"
                            src={FooterLogo}
                            alt="e-learning logo"
                        />
                        <hr className="hr-bottom"/>
                    </div>
                    <div>
                        ranchi ,pin-825301 ,jharkhand,<br /> (india)
                    </div>
                    <div style={{marginTop:15}}>
                        contact@mindtimemoney.com
                    </div>
                    {/* social media links */}
                    <div className="flex jtc-sp-around social-icon">
                        <i className="fa fa-facebook cursor-pointer"></i>
                        <i className="fa fa-twitter cursor-pointer"></i>
                        <i className="fa fa-linkedin cursor-pointer"></i>
                        <i className="fa fa-google-plus cursor-pointer"></i>
                    </div>
                </div>
                {/* nav links */}
                <div id="footer-menu-items" className="flex jtc-sp-around">
                    <div>
                        <ul>
                            <li>
                                <h4 className="color-wh">Company</h4>
                                <hr className="hr-bottom" />
                            </li>
                            <li className="color-darkgray">    
                                Home
                            </li>
                            <li className="color-darkgray">
                                About
                            </li>
                            <li className="color-darkgray">
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h4 className="color-wh">Get In Touch</h4>
                                <hr className="hr-bottom"/>
                            </li>
                            <li className="color-darkgray">    
                                Blog
                            </li>
                            <li className="color-darkgray">
                                Events
                            </li>
                            <li className="color-darkgray">
                                Gallery
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h4 className="color-wh">Courses</h4>
                                <hr className="hr-bottom"/>
                            </li>
                            <li className="color-darkgray">    
                                Courses
                            </li>
                            <li className="color-darkgray">
                                Membership
                            </li>
                            <li className="color-darkgray">
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}
export default Footer;