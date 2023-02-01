import { LazyLoadImage } from 'react-lazy-load-image-component'; import img from '../images/ScreenF.png'; import { LeftData, RightData } from '../components/FeaturesData'; const Features = () => { return ( <div className='Features' id='الميزات'> <div className="Features_Top"> <h1>الميزات</h1> <div className='Features_Top_p'> <p> تم تطوير تطبيق كمّون بواسطة فريق إحترافي بحيث يضمن سهولة شراء </p><p>مثل هذا النوع من المنتجات</p> </div> </div> <div className="Features_Mid"> <div className='Features_Mid_Left'> {LeftData?.map((item, index) => ( <div className='Features_Box' key={index}> <div className='Box_img'> <div className='Box_Icon'> {item.icon} </div> </div> <div className='Box_data'> <h1>{item.h1}</h1> <p>{item.p}</p> </div> </div> ))} </div> <div className='Features_Mid_Mid'> <LazyLoadImage className='HomePage_Right_img' alt='' src={img} /> </div> <div className='Features_Mid_Right'> {RightData?.map((item, index) => ( <div className='Features_Box' key={index}> <div className='Box_img'> <div className='Box_Icon'> {item.icon} </div> </div> <div className='Box_data'> <h1>{item.h1}</h1> <p>{item.p}</p> </div> </div> ))} </div> </div> </div> ) } ; export default Features