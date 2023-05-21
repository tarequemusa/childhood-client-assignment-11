import {Link} from "react-router-dom";


const Toy = ({toy}) => {
    const {_id} = toy;
    const {
        title, image, price, rating,
    } = toy || {};


    return (
        <div className="card w-full bg-base-100 shadow-xl my-5">
            <figure className="px-10 pt-10">
                <img src={image} alt="Dolls" className="rounded-xl p-2 border-4" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-xl card-title">{title}</h2>
                <div className="flex justify-between items-center">
                    <div className="font-bold outline px-2 rounded mx-2">Price:{' '}<span className="font-bold text-red-600">{price}$</span></div>
                    <div className="font-bold outline px-2 rounded mx-2 flex items-center">Rating: <span className="text-3xl font-bold text-red-600">{rating}</span></div>
                </div>
                <div className="card-actions">
                    <Link to={`/login/${ _id }`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;