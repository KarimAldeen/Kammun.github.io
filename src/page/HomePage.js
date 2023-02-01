import { LazyLoadImage } from 'react-lazy-load-image-component'; import img from '../images/Home.png'; import { BsApple } from "react-icons/bs"; import { FaGooglePlay } from "react-icons/fa"; import Navbar from '../components/Home/Navbar/Navbar'; import img2 from '../images/Home2.png'; const HomePage = () => { return ( <div className='HomePage' id='الرئيسية'> <Navbar/> <div className='HomePage_Left'> <h1>كمّون لتوصيل<br/> منتجات السوبر ماركت</h1> <h2>غيّر للأسهل</h2> <p>حمل تطبيق كمّون اليوم و أحصل على تجربة تسوق مريحة و سهلة و بأسعار مناسبة تصل إلى باب منزلك</p> <div className='Home_Btn'> <button> <BsApple/> متجر آبل </button> <button> <FaGooglePlay/> متجر غوغل</button> </div> </div> <div className='HomePage_Right'> <picture> <source media='(max-width : 724px)' srcSet={img2} alt='' /> <LazyLoadImage className='HomePage_Right_img' alt='' src={img} /> </picture> </div> </div> ) } ; export default HomePage