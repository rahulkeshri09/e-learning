import TrophyIcon from '../../assets/icon/trophy.png';
import {Link} from 'react-router-dom'
function FourthComponent(){
    return(
        <div className="flex flex-wrap fourthComponent font-ahs">
            <div id="fourthComponent-container1" className="flex flex-col">
                <div>
                    <h1>
                        Learn a new skill online
                    </h1>
                    <p style={{color:"#4c1864",fontSize:30,marginTop:-10,}}>on your time</p>
                </div>
                <div>
                    <p style={{fontSize:25,fontWeight:"bold"}}>2 Online Courses</p>
                </div>
                <div>
                    <p className="font-ahs info-paragraph2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type.
                    </p>
                </div>
                <div>
                    {/* sign up button */}
                    <button className="join-btn font-ahs">
                        <Link to="/signup" className="rm-decoration">Join Now</Link>
                    </button>
                </div>
            </div>
            {/* ------------motive-container------------- */}
            <div className="flex flex-wrap jtc-sp-around" id="fourthComponent-container2">
                <div className="motive">
                    <div className="trophyIcon">
                        <img
                            src={TrophyIcon}
                            alt="trophy-icon"
                        />
                    </div>
                    <div>
                        <h3>Our Philosphy</h3>
                    </div>
                    <div>
                        <p className="info-paragraph2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </p>
                    </div>
                </div>
                <div className="motive">
                    <div className="trophyIcon">
                        <img
                            src={TrophyIcon}
                            alt="trophy-icon"
                        />
                    </div>
                    <div>
                        <h3>Our Philosphy</h3>
                    </div>
                    <div>
                        <p className="info-paragraph2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </p>
                    </div>
                </div>
                <div className="motive">
                    <div className="trophyIcon">
                        <img
                            src={TrophyIcon}
                            alt="trophy-icon"
                        />
                    </div>
                    <div>
                        <h3>Our Philosphy</h3>
                    </div>
                    <div>
                        <p className="info-paragraph2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </p>
                    </div>
                </div>
                <div className="motive">
                    <div className="trophyIcon">
                        <img
                            src={TrophyIcon}
                            alt="trophy-icon"
                        />
                    </div>
                    <div>
                        <h3>Our Philosphy</h3>
                    </div>
                    <div>
                        <p className="info-paragraph2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FourthComponent;