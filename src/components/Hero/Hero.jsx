import {Link} from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <img src="https://i.ibb.co/PD5mPVk/Yellow-Playful-Kids-Toy-Instagram-Post.png" className="max-w-xs rounded-lg shadow-2xl" />
                <div className="mx-10">
                    <h1 className="text-5xl text-green-800 font-bold">Being a child is being happy...</h1>
                    <div className="flex items-baseline justify-between">
                        <img className="w-3/6" src="https://i.ibb.co/rb5RvRT/Chlidhood-Logo.png" alt="" />
                        <Link to="/blogs"><button className="btn btn-primary">Explore our blog</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;