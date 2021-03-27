import '../assets/css/homePage.css';
import FirstComponent from './homePageComponenets/FirstComponent';
import SecondComponent from './homePageComponenets/SecondComponent';
import ThirdComponent from './homePageComponenets/ThirdComponent';
import FourthComponent from './homePageComponenets/FourtComponent';
import FifthComponent from './homePageComponenets/FifthComponent';
import SixthComponent from './homePageComponenets/SixthComponent';
function Home(){
    return(
       <div className="background-img">
         <FirstComponent />
         <SecondComponent />
         <ThirdComponent />
         <FourthComponent />
         <FifthComponent />
         <SixthComponent />
       </div>
)
}
export default Home;