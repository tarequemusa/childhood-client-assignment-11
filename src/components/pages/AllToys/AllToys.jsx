import {useEffect, useState} from 'react';
import useTitle from '../../../Hooks/useTitle';
import Toy from '../../Toy/Toy';


const AllToys = ({toys}) => {
    useTitle("All Toys");

    const [alltoys, setAllToys] = useState([])

    const {
        title, image, price, rating
    } = toys || {};

    useEffect(() => {
        fetch("http://localhost:5000/alltoys/")
            .then((res) => res.json())
            .then((result) => {
                setAllToys(result);
            });
    }, []);

    return (
        <div className="overflow-x-auto w-full container mx-auto">
            <h2 className='text-4xl font-bold border-b-4 text-center my-12'><span className='rounded-full outline p-4 bg-pink-700 text-white'>All Toys</span></h2>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>{title}</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td><button className='btn btn-primary'>View Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
