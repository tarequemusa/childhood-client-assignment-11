import Hero from '../Hero/Hero';
import HomeTab from '../HomeTab/HomeTab';

const Home = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/jTyh74b/4.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3MkftjZ/1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/f1DvTpP/2.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Kxx7Qs1/3.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
            </div>
            <HomeTab></HomeTab>
            <Hero></Hero>
        </div>
    );
};

export default Home;