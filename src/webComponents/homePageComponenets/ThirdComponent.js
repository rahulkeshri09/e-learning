import {Link} from 'react-router-dom';
function ThirdComponent(){
    return(
        <div className="flex thirdComponent color-wh font-ahs ali-center">
            <div>
                {/* ---------- component heading -------- */}
                <p className="main-heading2">
                    Learn a new skill online on <br/>your time
                </p>
            </div>
            <div>
                <p className="flex jtc-center main-subheading font-ahs">2 Online Courses</p>
            </div>
            <div className="flex jtc-center">
                <p className="flex font-ahs info-paragraph2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div>
                {/* --------button for signup------------ */}
                <button className="join-btn font-ahs">
                    <Link to="/signup" className="rm-decoration">Join Now</Link>
                </button>
            </div>
        </div>
    )
}
export default ThirdComponent;