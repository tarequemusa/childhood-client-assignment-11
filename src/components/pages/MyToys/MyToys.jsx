import {useContext, useEffect, useState} from "react";
import useTitle from "../../../Hooks/useTitle";
import {AuthContext} from "../../../Providers/AuthProviders";
import MyToyTable from "./MyToyTable";


const MyToys = () => {
    useTitle('My Toys');
    const {user} = useContext(AuthContext);
    const [control, setControl] = useState(false);
    console.log(user);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://childhood-server-assignment-11.vercel.app/myToys/${ user?.email }`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                console.log(data);
            });
    }, [user, control]);



    return (
        <div className="overflow-x-auto w-11/12 container mx-auto">
            <h2 className='text-2xl font-bold border-b-4 text-center my-12'><span className='rounded-full outline p-4 bg-pink-700 text-white'>My Toys</span></h2>
            <div className="flex justify-end rounded items center mb-4 gap-4">
                <div><button className="btn btn-primary btn-sm ">Ascending</button></div>
                <div><button className="btn btn-primary btn-sm">Descending</button></div>
            </div>

            <table className="table table-compact w-full text-center">
                <thead>
                    <tr className="text-center">
                        <th>Image</th>
                        <th>Name</th>
                        <th>Seller Email</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {toys.map(toy => <MyToyTable setToys={setToys} toys={toys} toy={toy} key={toy._id}></MyToyTable>)}
                    {/*  */}
                </tbody>
            </table>

        </div>
    );
};

export default MyToys;