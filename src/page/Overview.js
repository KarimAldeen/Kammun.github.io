import { LazyLoadImage } from "react-lazy-load-image-component"; import img from '../images/KammunLogo.svg'; const Overview = () => { return ( <div className='Overview' id='لمحة عامة'> <h1>لمحة عن التطبيق</h1> <p>تجربة تسوق سهلة و بأسعار منافسة تناسب إحتياجات العائلة</p> <div className='Overview_Sec'> <LazyLoadImage className='Overview_Logo' alt='' src={img} /> </div> </div> ) } ; export default Overview