import Iframe from 'react-iframe'

const VideoDoc = () => {
    return (
        <div className='container px-12 mx-auto'>
            <div>
                <h2 className='text-2xl border-b-4 text-start my-12'><span className='font-bold text-pink-700 border-r-4'>Explore the World of Disney!!!</span></h2>
            </div>
            <div className="flex flex-col flex-col-md flex-row-lg bg-pink-100 rounded-xl">
                <div data-aos="zoom-in" data-aos-duration="3000" className='flex justify-center items-center p-8'>
                    <Iframe url="https://www.youtube.com/embed/FVDOdfdRSaY?rel=0"
                        width="840px"
                        height="320px"
                        id=""
                        className="rounded-xl"
                        display="block"
                        position="relative" />
                </div>
            </div>

        </div>
    );
};

export default VideoDoc;