import {useState} from "react";
import UpdateModal from "./UpdateModal";


const MyToyTable = ({toy}) => {
    console.log(toy);
    const [control, setControl] = useState(false);

    const handleToyUpdate = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/updateToy/${ data?._id }`, {
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
                <td><button ><label htmlFor="my-modal-3" className="btn btn-primary">Update</label></button></td>
                <td><button className="btn btn-primary">Delete</button></td>
            </tr>
            <UpdateModal toy={toy} handleToyUpdate={handleToyUpdate}></UpdateModal>
        </>
    );
};

export default MyToyTable;