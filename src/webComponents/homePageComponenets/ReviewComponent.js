function ReviewComponent(props){
    return(
        <div className="flex">
            <div className="student-image">
                <img
                    src={props.reviewData.img}
                    alt="student-image" 
                />
            </div>
            <div className="flex flex-col review-data">
                <div className="flex jtc-sp-between">
                    <div>
                        <h3 style={{margin:0}}>{props.reviewData.studentName}</h3>
                        <p style={{marginTop:5,color:"gray"}}>-{props.reviewData.type}</p>
                    </div>
                    <i class="fa fa-quote-right color-lightgray icon-size"></i>
                </div>
                <div>
                    <p className="review-para">{props.reviewData.review}</p>
                </div>
            </div>
        </div>
    )
}
export default ReviewComponent;