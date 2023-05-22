import {useContext, useEffect, useState} from 'react';
import useTitle from '../../../Hooks/useTitle';
import Toy from '../../Toy/Toy';
import {AuthContext} from '../../../Providers/AuthProviders';
import ToyTable from './ToyTable';


const AllToys = () => {
    useTitle("All Toys");

    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(data => {
                setToys(data)
                console.log(data);
            });
    }, []);

    const handleSearch = () => {
        fetch(`http://localhost:5000/getToysByText/${ searchText }`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };

    return (
        <div className="overflow-x-auto w-10/12 container mx-auto">
            <h2 className='text-2xl font-bold border-b-4 text-center my-12'><span className='rounded-full outline p-4 bg-pink-700 text-white'>All Toys</span></h2>
            <div className="search-box p-2 text-center mb-6">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-3 border-4 rounded-xl"
                />{" "}
                <button onClick={handleSearch} className='btn btn-primary'>Search</button>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr className='text-center'>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map(toy => <ToyTable toy={toy} key={toy._id}></ToyTable>)}
                    {/*  */}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
