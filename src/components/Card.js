export default function Card(props) {

    const path= require('../../src/assets/' + ((props.img==="pointer") ? 
      ('car.png')
      : (props.img=== "blogging") ?
      ('blogging.png')
      :(props.img=== "personalWeb") ?
      ('personalWeb.png')
      : (props.img=== "hobbyWeb") ?
      ('hobbyWeb.png')
      :
      ('cursor.png')
    ));


    return (
    <a href={props.link} className="group relative block h-80 lg:h-96 cursor-drawn">
        <span className="absolute bg-pastelStongTeal rounded-3xl inset-0 border-4 border-black"></span>

        <div className="relative bg-pastelTeal flex h-full w-80 lg:max-w-60 xl:max-w-96 rounded-3xl transform items-end border-4 border-black -translate-x-2 -translate-y-2 transition-transform group-hover:-translate-x-4 group-hover:-translate-y-4">
          
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <img src={path} alt={props.img + ` Card`}></img>
            <h2 className="mt-4 text-xl font-semibold sm:text-2xl"> {props.title} </h2>
          </div>


          <div className="absolute h-full w-80 lg:max-w-60 xl:max-w-96  lg:w-fit p-4 rounded-3xl opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-semibold sm:text-2xl"> {props.header} </h3>

            <p className="mt-4 text-sm sm:text-base"> {props.description} </p>

            <p className="mt-8 font-bold">read more</p>
          </div>
        </div>
      </a>
    )
  }
  