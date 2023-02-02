import { LazyLoadImage } from "react-lazy-load-image-component"; import img from '../images/KammunLogo.svg'; import { BsPlayFill, BsForwardFill } from "react-icons/bs"; import ReactPlayer from 'react-player/youtube'; import { useState } from "react"; const Overview = () => { const [On, setOn] = useState(false); function Off() { setOn(v=>!v) }; function ON() { setOn(v=>!v) }; return ( <div className='Overview' id='لمحة عامة'> <h1>لمحة عن التطبيق</h1> <p>تجربة تسوق سهلة و بأسعار منافسة تناسب إحتياجات العائلة</p> {On ? <> <div className="exit" id="exit" onClick={Off}> <BsForwardFill /> </div> <ReactPlayer url='https://youtu.be/qFtpsiAd870' className="Video" id="Video" width='80%' height='70%' playing vimeoConfig={{ iframeParams: { fullscreen: 0 } }} controls /> </> : '' } <div className='Overview_Sec'> <LazyLoadImage width='auto' height='auto' className='Overview_Logo' alt='Overview' src={img} title="" /> <div className='Btn' onClick={ON} > <BsPlayFill /> </div> </div> </div> ) } ; export default Overview