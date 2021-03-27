import {useEffect} from 'react';
import Img from'../../assets/images/austin-distel-wD1LRb9OeEo-unsplash\ \(1\).jpg';
import CourseInfo from "./CousrseInfo";
function SecondComponent(){
    //slider courses data 
    const courses=[{
                        courseName:"course1",
                        type:"Programming",
                        price:1200,
                        review:4,
                        star:3,
                        img:Img
                    },
                    {
                        courseName:"course2",
                        type:"Programming",
                        price:1200,
                        review:4,
                        star:3,
                        img:Img
                    },
                    {
                        courseName:"course3",
                        type:"Programming",
                        price:1200,
                        review:4,
                        star:3,
                        img:Img
                    },
                    {
                        courseName:"course4",
                        type:"Programming",
                        price:1200,
                        review:4,
                        star:3,
                        img:Img
                    },
                    {
                        courseName:"course5",
                        type:"Programming",
                        price:1200,
                        review:4,
                        star:3,
                        img:Img
                    },
                    
                ]
    useEffect(()=>{
        var i=0;
        var slider=document.getElementsByClassName("courses-info-container");
        var slideBtn=document.getElementsByClassName("secondComponent-button");
        //forward slide 
        slideBtn[1].addEventListener('click',slide);
        //back slide
        slideBtn[0].addEventListener('click',backSlide);
        //get device screen width 
        var screenWidth=window.screen.width;
        //pixel for slide
        var j=292;
        function backSlide(){
            i=i-j;
            if(i<=0){
                i=0;
            }
            slider[0].scrollTo(i,0);
        }
        function slide(){
            i+=j;
            //check width more than 1100px (laptop) for comlete slide
            if(screenWidth>1100 && i>=((courses.length*j)-3*j)){
                i=0;
            }
            //check width more than 800px to 1100px (large size tablet devices) for comlete slide
            if(screenWidth>800 && screenWidth<1100 && i>=((courses.length*j)-2*j)){
                i=0;
            }
            //check width more than 600 to 1100px (tablet devices ) for comlete slide
            if(screenWidth>600 && screenWidth<800 && i>=((courses.length*j)-j)){
                i=0;
            }
            //check width less than 600px (mobile devices) for comlete slide
            if(screenWidth<600 && i>=courses.length*j){
                i=0;
            }
            slider[0].scrollTo(i,0);
        }
        var autoSlide=setInterval(slide,4000);   
        return (()=>{
            clearInterval(autoSlide);
        })        
    })
    return(
        <div className="secondComponent font-ahs">
            <div className="" id="secondComponent-heading-container">
                <div>
                    <div className="hr-style">
                        <b>Popular</b> 
                        <span>  Courses</span>
                    </div>
                    <p className="font-ahs container-paragraph">
                        It is long established fact that a reader will be distracted by the readable content of the page
                    </p>
                </div>
            </div>
            {/**----------container for slider------------------ */}
            <div className="courses-container flex">
                {/* button for back and forward slide */}
                <div className="flex jtc-end" id="scroll-btn">
                    {/* back slide button */}
                    <button style={{transform:"rotate(90deg)",marginRight:"20px"}} className="secondComponent-button"> V </button>
                    {/* forward slide button */}
                    <button style={{transform:"rotate(-90deg)"}} className="secondComponent-button"> V </button>
                </div>
                
                <div className="courses-info-container flex">
                    {
                        courses.map((data)=>{
                            {/**------------courses info container---------- */}
                            return <div className="courses-info cursor-pointer"><CourseInfo courseData={data} /></div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default SecondComponent;