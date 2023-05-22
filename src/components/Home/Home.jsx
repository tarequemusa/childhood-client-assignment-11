import {useContext} from 'react';
import useTitle from '../../Hooks/useTitle';
import Hero from '../Hero/Hero';
import HomeTab from '../HomeTab/HomeTab';
import {AuthContext} from '../../Providers/AuthProviders';
import Gallery from '../Gallery/Gallery';
import VideoDoc from './VideoDoc';

const Home = () => {
    useTitle('Home');
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>{user && <span>{user.displayName}</span>}</h2>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/CwQMfCj/Banner-Video.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/jTyh74b/4.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3MkftjZ/1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/f1DvTpP/2.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Kxx7Qs1/3.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-red-600">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-600">❯</a>
                    </div>
                </div>
            </div>
            <VideoDoc></VideoDoc>
            <HomeTab></HomeTab>
            <Hero></Hero>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;