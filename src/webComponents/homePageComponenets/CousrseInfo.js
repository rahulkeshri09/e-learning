import '../../assets/css/homePage.css';
function CourseInfo(props){
    console.log("test",props);
    return(
        <div className="flex flex-col bg-color-wh box-shadow">
            <div className="img-container">
                <img
                    style={styles.imgStyle}
                    src={props.courseData.img}
                    alt="course name"
                />
                {/* -----------visible when hover on component----------- */}
                <div className="read-more-btn font-ahs">
                    <div>
                        Read More
                    </div>
                </div>
            </div>
            <div>
                <h2 className="flex jtc-center font-ahs hover-color-purple cursor-pointer"style={{margin:"5px"}}>
                    {props.courseData.courseName}
                </h2>
            </div>
            <div>
                <p className="flex jtc-center font-ahs" style={styles.para}>
                    {props.courseData.type}
                </p>
            </div>
            <div className="flex flex-col ali-center font-ahs" style={{borderTop:"1px solid lightgray",padding:10}}>
                <div style={styles.price}>
                    <i className="fa fa-rupee"></i>
                    {props.courseData.price}
                </div>
                <div>
                    <h4 style={{margin:10}}>
                        <i className="fa fa-rupee"></i>
                        1000
                    </h4>
                </div>
            </div>
        </div>
    )
}
const styles={
    container:{
        boxShadow:"-2px 5px 20px 10px #dbdbdb, 0px -2px 20px 10px #dbdbdb"
    },
    imgStyle:{
        width:"100%",
        height:150,
    },
    para:{
        color:"#6b6659",
        fontSize:13,
        margin:5,
        marginBottom:20
    },
    price:{
        color:"#6b6659",
        fontSize:14,
        textDecoration: "line-through",
    }
}
export default CourseInfo;