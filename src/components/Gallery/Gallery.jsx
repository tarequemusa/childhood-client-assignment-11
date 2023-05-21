import useTitle from "../../Hooks/useTitle";
import {Gallery1} from "react-grid-gallery";


const Gallery = () => {
    useTitle('Gallery');


    return (
        <><h2 className="text-center font-bold text-6xl text-pink-700 border-b-4 my-5">Gallery</h2>
            <div className="flex justify-center p-16" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="grid grid-cols-3 gap-3 my-5" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <div className="card bg-base-100 shadow-xl rounded-full w-80 ">
                        <figure><img src="https://i.ibb.co/wdmFmKk/1.png" alt="Shoes" /></figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl text-center w-80">
                        <figure><img src="https://i.ibb.co/4dQVRhn/2.png" alt="Shoes" /></figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl rounded-full text-center w-80">
                        <figure><img src="https://i.ibb.co/G7fZ3bY/3.png" alt="Shoes" /></figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl text-center w-80">
                        <figure><img src="https://i.ibb.co/Bfk7FkV/4.png" alt="Shoes" /></figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl rounded-full text-center w-80">
                        <figure><img src="https://i.ibb.co/gRfZYc3/5.png" alt="Shoes" /></figure>
                    </div>
                    <div className="card bg-base-100 shadow-xl text-center w-80">
                        <figure><img src="https://i.ibb.co/34QVyWF/6.png" alt="Shoes" /></figure>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;