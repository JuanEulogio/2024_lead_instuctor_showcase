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
    console.log("passing 1.1")

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
    console.log("passing 1.2")
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
    console.log("passing 1.3")

    return () => instance.destroy();

  }, [displayStatus])


  return (<div className='bg-pastelSkin cursor-drawn'>
  
    {displayStatus=== "lottieStart" ?

      <div className='grid h-screen place-items-center' ref={containerInto}></div>
    :
      
    <div className='animate-fadeIn p-4 pt-24'>
      <Reveal><h1 className='flex justify-center text-center font-Patrick-Hand font-bold text-6xl pb-56 lg:pb-0'>Students Website Showcase</h1></Reveal>

      <div className='grid gap-y-96 lg:grid-cols-4 grid-rows-2 place-items-center'>

          <div className='lg:order-2 2xl:pt-44' >
            <Reveal><Card img={"pointer"} title={"Exotic Car Shop"} header={"Card Header"} description={"Card Description"} link={"https://github.com/TwinkieMan22/Exotic-car-Market"} ></Card></Reveal>
          </div>

          <div className='lg:order-1 grid justify-items-center lg:col-start-3 lg:col-span-2 lg:row-span-2 lg:-translate-y-36 lg:max-w-[80%]'>
            <Reveal>
              <div className='bg-pastelBeige p-4 lg:p-8 rounded-3xl'><img src={studentFeedback} style={{borderRadius:"1.5rem"}}></img></div>
              <div className='w-56 -rotate-45 lg:-translate-x-32 2xl:-translate-x- translate-y-20' ref={containerArrow}></div>
            </Reveal>
          </div>

          
          <div className='order-3 2xl:pt-44' >
            <Reveal><Card img={"blogging"} title={"Blog Website"} header={"Card Header"} description={"Card Description"} link={"https://github.com/Chase-Nickel/react-blog"}></Card>
            </Reveal>
          </div>
            
          
          <div className='order-4 grid lg:col-span-2 lg:row-span-2 lg:pt-56 md:max-w-[60%] 2xl:max-w-[50]'>
            <Reveal><div ref={containerTeaching}></div></Reveal>
          </div>

          <div className='order-5 lg:col-start-3 lg:pt-44'>
            <Reveal><Card img={"personalWeb"} title={"Personal Website"} header={"Card Header"} description={"Card Description"} link={"https://github.com/NachoWizard64/2024SummerProject"}></Card></Reveal>
          </div>
            
          <div className='order-6 lg:pt-44'>
            <Reveal><Card img={"hobbyWeb"} title={"Hobby Website"} header={"Card Header"} description={"Card Description"} link={"https://github.com/MUINarku/jenkin"}></Card></Reveal>
          </div>

      </div>
    </div>  
    

    }</div>);
}

export default App;
