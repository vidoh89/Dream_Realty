
import SoldProp from "./SoldProp";
const ClosedHomes = () =>{
    const slides=[
        {
            id:1,
            name:"Closed Home1",
            alt:"This is an image of a closed property",
            url:"/closed_prop_data/image(1).png"
        },
        {
            id:2,
            name:"Closed Home2",
            alt:"This is an image of a closed property",
            url:"/closed_prop_data/image(4).png"
        },
        {
            id:3,
            name:"Closed Home3",
            alt:"This is an image of a closed property",
            url:"/closed_prop_data/image(5).png"
        },
    ];
      
    return(
        <div className="mt-5 m-auto sm:text-2xl">
            <div className="closedProperty-container w-full h-56 text-center">
            <span className="slider_header">
            <h1>Closed Properties</h1>
            </span>
            <div className="w-full h-full block sm:mt-4 sm:mb-4  lg:flex lg:justify-center">
                
                {slides.map((slide,index)=>(
                    <SoldProp key={index} slide={slide.url}/>
                ))}
                
            </div>

            </div>
        </div>
    )
}
export default ClosedHomes;