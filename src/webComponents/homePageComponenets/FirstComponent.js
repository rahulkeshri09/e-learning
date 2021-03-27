
function FirstComponent(){
    return(
        <div className="firstComponent flex ali-center color-wh">
            <div>
                <p className="main-heading font-ahs">Online Courses To Learn</p>
                <p className="flex jtc-center main-subheading font-ahs">Dream Big ! Dream progressive</p>
            </div>
            {/*---------container of brief information-------------- */}
            <div className="flex jtc-center jtc-sp-between" id="main-info-container">
                <div className="short-info-container">
                    <div className="flex jtc-center">
                        <i className="fa fa-user-o icon-size" aria-hidden="true"></i>
                        <p className="short-info-size font-ahs">1</p>
                    </div>
                    <div>
                        <p className="flex jtc-center info-paragraph font-ahs">Over 1 thousand student</p>
                    </div>
                </div>
                <div className="short-info-container">
                    <div className="flex jtc-center">
                            <i class="fa fa-book icon-size"></i>
                            <p className="short-info-size font-ahs">10k</p>
                        </div>
                        <div>
                            <p className="flex jtc-center info-paragraph font-ahs">100 courses</p>
                        </div>
                    </div>
                <div className="short-info-container">
                    <div className="flex jtc-center">
                        <i className="fa fa-align-left icon-size" aria-hidden="true"></i>
                        <p className="short-info-size font-ahs">46</p>
                    </div>
                    <div>
                        <p className="flex jtc-center info-paragraph font-ahs">Learn anything online</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FirstComponent;