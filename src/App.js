import Lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import Card from './components/Card';

function App() {
  const [displayStatus, setStatus]= useState("lottieStart")
  const container= useRef(null)


  useEffect(() => {

    const instance= Lottie.loadAnimation({
      container: container.current,
      loop: false,
      renderer: `svg`,
      autoplay: true,
      animationData: require("./assets/lotties/startingAnime.json")
    })

    //on animation complete event
    instance.addEventListener('complete', function(e) {
      setStatus("menu");
      instance.destroy()
    });

    // implemented Cleanup function to destroy the animation instance, in order to
    // remove lottie's ui library bug on react that renders more than one animation on the DOM
    return () => instance.destroy();
  }, [])


  return (<div className='bg-pastelSkin cursor-drawn'>
  
    {displayStatus=== "lottieStart" ?

      <div className='grid h-screen place-items-center' ref={container}></div>
    :
      
      <div className='animate-fadeIn'>
        <h1>Students Website Showcase</h1>
        <div className='grid h-screen place-items-center'>

          <Card img={"pointer"} title={"Exotic Car Shop"} header={"Card Header"} description={"Card Description"} link={"https://github.com/TwinkieMan22/Exotic-car-Market"} ></Card>
          <Card img={"blogging"} title={"Blog Website"} header={"Card Header"} description={"Card Description"} link={"https://github.com/Chase-Nickel/react-blog"}></Card>


        </div>
      </div>
    

    }</div>);
}

export default App;
