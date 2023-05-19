
import banner1 from '../../assets/banner/1.jpg'
import Hero from '../Hero/Hero';
import HomeTab from '../HomeTab/HomeTab';

const Home = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <HomeTab></HomeTab>
            <Hero></Hero>

        </div>
    );
};

export default Home;