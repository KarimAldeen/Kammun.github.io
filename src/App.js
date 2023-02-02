import { lazy } from 'react';
const HomePage = lazy(() => import("./page/HomePage"));
const Contact = lazy(() => import("./page/Contact"));
const Download = lazy(() => import("./page/Download"));
const Features = lazy(() => import("./page/Features"));
const Footer = lazy(() => import("./page/Footer"));
const Overview = lazy(() => import("./page/Overview"));
const Screen = lazy(() => import("./page/Screen"));

function App() {
  return (
    <div className='App'>
      <HomePage />
      <Features />
      <Overview />  
      <Screen/>
      <Download/>
      <Contact/>
      <Footer/>
    </div>

  );
};
export default App;
