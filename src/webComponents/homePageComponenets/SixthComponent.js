import Img from '../../assets/images/student.jpg';
import ReviewComponent from '../homePageComponenets/ReviewComponent';
import {useEffect} from 'react';
function SixthComponent(){
    // reviews data
    const reviews=[
        {
            studentName:"Rahul1",
            type:"student",
            img:Img,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
        },
        {
            studentName:"Rahul2",
            type:"student",
            img:Img,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
        },
        {
            studentName:"Rahul3",
            type:"student",
            img:Img,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
        },
        {
            studentName:"Rahul4",
            type:"student",
            img:Img,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type..."
        }
    ];
    useEffect(()=>{
        var i=0;
        var slider=document.getElementsByClassName("review-main-container");
        var backSlideBtn=document.getElementById("back-slide-btn");
        //forward slide
        var forwardSlideBtn=document.getElementById("forward-slide-btn");
        //backslide
        forwardSlideBtn.addEventListener('click',slide);
        backSlideBtn.addEventListener('click',backSlide);
        var screenWidth=window.screen.width;
        //sliding pixel
        var j=580;
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
            if(screenWidth>1100 && i>1160){
                i=0
            }
            //check width more than 800px to 1100px (large size tablet devices) for comlete slide
            if(screenWidth>800 && screenWidth<1100 && i>1720){
                i=0
            }
            //check width more than 600 to 1100px (tablet devices ) for comlete slide
            if(screenWidth>600 && screenWidth<800 && i>2300){
                i=0
            }
            //check width less than 600px (mobile devices) for comlete slide
            if(screenWidth<600 && i>2800){
                i=0
            }
            slider[0].scrollTo(i,0);
        }
        var autoSlide=setInterval(slide,4000); 
        //clear interval when component destroy
        return(()=>{
            clearInterval(autoSlide);
        })          
    })
    return(
        <div className="secondComponent font-ahs">
            <div className="" id="secondComponent-heading-container">
                <div>
                    <div className="hr-style">
                        <b>WHAT PEOPLE</b> 
                        <span>  SAY</span>
                    </div>
                    <p className="font-ahs container-paragraph">
                        It is long established fact that a reader will be distracted by the readable content of the page
                    </p>
                </div>
            </div>
            {/**----------container for slider------------------ */}
            <div className="courses-container flex ">

                {/* button for back and forward slide */}
                <div className="flex jtc-end" id="scroll-btn">
                     {/* back slide button */}
                    <button style={{transform:"rotate(90deg)",marginRight:"20px"}} className="secondComponent-button" id="back-slide-btn">
                        V 
                    </button>
                     {/* forward slide button */}
                    <button style={{transform:"rotate(-90deg)"}} className="secondComponent-button" id="forward-slide-btn">
                        V 
                    </button>
                </div>
                <div className="review-main-container flex">
                    {
                        reviews.map((data)=>{
                            {/**------------review info container---------- */}
                            return <div className="review-container cursor-pointer"><ReviewComponent reviewData={data} /></div>
                        })
                    } 
                </div>
            </div>
        </div>
    )
}
export default SixthComponent;