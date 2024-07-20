import Lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import Card from './components/Card';
import studentFeedback from './assets/studentFeedback.png'
import { Reveal } from './components/Reveal';

function App() {
  const [displayStatus, setStatus]= useState("lottieStart")
  const containerInto= useRef(null)
  const containerTeaching= useRef(null)
  const containerArrow= useRef(null)



  useEffect(() => {

    const instance= Lottie.loadAnimation({
      container: containerInto.current,
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


  useEffect(() => {
    const instance= Lottie.loadAnimation({
      container: containerTeaching.current,
      loop: true,
      renderer: `svg`,
      autoplay: true,
      animationData: require("./assets/lotties/teachingAnime.json")
    })

    // implemented Cleanup function to destroy the animation instance, in order to
    // remove lottie's ui library bug on react that renders more than one animation on the DOM
    return () => instance.destroy();
  }, [displayStatus])

  useEffect(() => {
    const instance= Lottie.loadAnimation({
      container: containerArrow.current,
      loop: true,
      renderer: `svg`,
      autoplay: true,
      animationData: require("./assets/lotties/arrowAnime.json")
    })

    // implemented Cleanup function to destroy the animation instance, in order to
    // remove lottie's ui library bug on react that renders more than one animation on the DOM
    return () => instance.destroy();

  }, [displayStatus])


  return (<div className='bg-pastelSkin cursor-drawn'>
  
    {displayStatus=== "lottieStart" ?

      <div className='grid h-screen place-items-center' ref={containerInto}></div>
    
    :
      
    <div className='p-4 md:px-20 xl:px-32 pt-24'>
      <Reveal><h1 className='flex justify-center text-center font-Patrick-Hand font-bold text-6xl pb-56'>Students Website Showcase</h1></Reveal>

      <div className='grid gap-y-72 place-items-center'>

          <div className='grid lg:order-2 gap-4 gap-y-72 lg:grid-cols-2 lg:justify-self-start' >
            <Reveal><Card img={"pointer"} title={"Exotic Car Shop"} header={"Card Header"} description={"Card Description"} link={"https://github.com/TwinkieMan22/Exotic-car-Market"} ></Card></Reveal>
            <Reveal><Card img={"blogging"} title={"Blog Website"} header={"Card Header"} description={"Card Description"} link={"https://github.com/Chase-Nickel/react-blog"}></Card></Reveal>
          </div>

          <div className='grid lg:order-1 lg:justify-self-end lg:max-w-[55%] xl:max-w-[40%]'>
            <Reveal>
              <div className='bg-pastelBeige justify-self-center p-4 lg:p-6 rounded-3xl'><img src={studentFeedback} style={{borderRadius:"1.5rem"}}></img></div>
              <div className='w-40 md:w-52 -rotate-45' ref={containerArrow}></div>
            </Reveal>
          </div>
            
          
          <div className='grid order-3 gap-y-72 lg:grid-cols-2 gap-4 lg:justify-self-end'>
            <Reveal><Card img={"personalWeb"} title={"Personal Website"} header={"Card Header"} description={"Card Description"} link={"https://github.com/NachoWizard64/2024SummerProject"}></Card></Reveal>
            <Reveal><Card img={"hobbyWeb"} title={"Hobby Website"} header={"Card Header"} description={"Card Description"} link={"https://github.com/MUINarku/jenkin"}></Card></Reveal>
          </div>

          <div className='order-4 lg:justify-self-start lg:max-w-[50%]'>
            <Reveal><div ref={containerTeaching}></div></Reveal>
          </div>

      </div>
    </div>
    }
    
  </div>);
}

export default App;
