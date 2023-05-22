import {Link} from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <img src="https://i.ibb.co/PD5mPVk/Yellow-Playful-Kids-Toy-Instagram-Post.png" className="max-w-xs rounded-lg shadow-2xl" />
                <div className="mx-10">
                    <h1 className="text-5xl text-green-800 font-bold">A New Diverse Disney Dolls Collection Is Coming</h1>
                    <div className="flex items-baseline justify-between py-6">
                        <p className="text-3xl font-semibold my-2">Being a child is being happy... </p>
                    </div>
                    <div className="py-4"><Link to="/blogs"><button className="btn btn-primary">Explore our blog</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;