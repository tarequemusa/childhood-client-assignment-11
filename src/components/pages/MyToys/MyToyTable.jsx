import {useState} from "react";
import UpdateModal from "./UpdateModal";
import {Link} from "react-router-dom";
import UpdateToy from "./updateToy";
// import {useLoaderData} from "react-router-dom";


const MyToyTable = ({toy, toys, setToys}) => {
    console.log(toy);
    const [control, setControl] = useState(false);
    // const loadedUsers = useLoaderData();
    const [singleToy, setSingleToy] = useState();

    const handleToyUpdate = (data) => {
        console.log(data);
        fetch(`https://childhood-server-assignment-11.vercel.app/updateToy/${ data?._id }`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.modifiedCount > 0) {
                    setControl(!control);
                }
                console.log(result);
            });
    };

    const handleDelete = _id => {
        console.log('Delete', _id);
        fetch(`https://childhood-server-assignment-11.vercel.app/singleToy/${ _id }`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    alert('Toy Deleted Successfully');
                    const remaining = toys.filter(toy => toy._id !== _id);
                    setToys(remaining);
                }
            })
    }

    return (
        <>
            <tr className="text-cener text-sm">
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={toy.image} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {toy.title}
                </td>
                <td>{toy.postedBy}</td>
                <td>{toy.category}</td>
                <td>{toy.price}$</td>
                <td>{toy.rating}</td>
                <td>{toy.quantity}</td>
                <td>{toy.description}</td>
                <td><Link to={`/updateToy/${ toy._id }`}><button ><label className="btn btn-primary">Update</label></button></Link></td>
                {/* <td><button ><label htmlFor="my-modal-3" className="btn btn-primary">Update</label></button></td> */}
                <td><button className="btn btn-warning text-3xl text-red-600 font-bold"
                    onClick={() => handleDelete(toy._id)}
                >X</button></td>
            </tr>
            {/* <UpdateToy toy={toy} handleToyUpdate={handleToyUpdate}></UpdateToy>
            <UpdateModal toy={toy} handleToyUpdate={handleToyUpdate}></UpdateModal> */}
        </>
    );
};

export default MyToyTable;