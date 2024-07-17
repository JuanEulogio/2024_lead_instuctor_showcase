import Lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';

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
        <div className='grid h-screen place-items-center'>

            <h1>hello</h1>

        </div>
      </div>
    

    }</div>);
}

export default App;
