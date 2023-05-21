import {Link} from "react-router-dom";


const ToyTable = ({toy}) => {
    const {_id} = toy;
    console.log(toy);



    return (
        <tr className='text-center text-sm'>
            <td>{toy.sellerName}</td>
            <td>{toy.title}</td>
            <td>{toy.category}</td>
            <td>{toy.price}$</td>
            <td>{toy.quantity}</td>
            <td><Link to={`/login/${ _id }`}><button className='btn btn-primary'>View Details</button></Link></td>
        </tr>
    );
};

export default ToyTable;