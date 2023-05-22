import {useLoaderData} from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";


const MyToysDetails = () => {
    useTitle('Toys Details');
    const service = useLoaderData();
    const {title, price, image, description, sellerName, postedBy, rating, quantity} = service;
    return (
        <div className="container px-12 mx-auto mb-14">
            <h2 className='text-2xl font-bold border-b-4 text-center my-12'><span className='rounded-full outline p-4 bg-pink-700 text-white'>Toy Details Information</span></h2>
            <div className=" flex justify-center mb-6"><img className="rounded-full outline w-2/12 p-4 border-spacing-4" src={image} alt="" /></div>
            <div className="text-3xl font-bold border-b-8"><span className="font-bold text-pink-700">Title:</span> {title}</div>
            <div className="text-xl "><span className="font-bold text-pink-700">Price:</span> {price} $</div>
            <div className="text-xl "><span className="font-bold text-pink-700">Seller Name:</span> {sellerName}</div>
            <div className="text-xl "><span className="font-bold text-pink-700">Seller Email:</span> {postedBy}</div>
            <div className="text-xl "><span className="font-bold text-pink-700">Rating:</span> <span className="text-red-500 text-2xl font-bold">{rating}</span></div>
            <div className="text-xl "><span className="font-bold text-pink-700">Available Quantity:</span> {quantity}</div>
            <div className="text-xl "><span className="font-bold text-pink-700">Description:</span> {description}</div>

        </div>
    );
};

export default MyToysDetails;