import {useLoaderData} from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";


const MyToysDetails = () => {
    useTitle('Toys Details');
    const service = useLoaderData();
    const {title, price, image, description, sellerName, postedBy, rating, quantity} = service;
    return (
        <div className="container px-12 mx-auto mb-14">
            <h2 className='text-4xl font-bold border-b-4 text-center my-12'><span className='rounded-full outline p-4 bg-pink-700 text-white'>Toy Details Information</span></h2>
            <div><img className="flex justify-center" src={image} alt="" /></div>
            <div className="font-bold text-3xl">Title: {title}</div>
            <div>Price: {price} $</div>
            <div>Seller Name: {sellerName}</div>
            <div>Seller Email: {postedBy}</div>
            <div>Rating: {rating}</div>
            <div>Available Quantity: {quantity}</div>
            <div>Description: {description}</div>

        </div>
    );
};

export default MyToysDetails;