import {useState} from "react";
import {useLoaderData} from "react-router-dom";



const UpdateToy = () => {
    const toy = useLoaderData();
    const [control, setControl] = useState(false);
    const {title, price, image, description, sellerName, postedBy, rating, quantity} = toy;


    const handleToyUpdateInfo = (data) => {
        console.log(data);

        const form = data.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {price, quantity, description};
        console.log(updatedToy);
        fetch(`https://childhood-server-assignment-11.vercel.app/updateToyInfo/${ toy?._id }`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedToy),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if(result.modifiedCount > 0) {
                    alert('Toy Updated Successfully');
                    setControl(!control);
                }
                console.log(result);
            });
    };


    return (
        <div className="container mx-auto px-12">
            <div>
                <h2 className='text-2xl font-bold border-b-4 text-center my-12'><span className='rounded-full outline p-4 bg-pink-700 text-white'>Update Toy Info</span></h2>
                <div>
                    <h3 className="text-xl text-center">Toy Name: {title} </h3>
                    <img className="mx-auto border-4 rounded-xl w-1/5" src={image} alt="" />
                </div>
                <form onSubmit={handleToyUpdateInfo} className="card mx-auto items center text-center sm:w-8/12 lg:w-6/12 border-4 my-12 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" name="price" defaultValue={price} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" placeholder="quantity" name="quantity" defaultValue={quantity} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <textarea type="text" placeholder="description" name="description" defaultValue={description} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Toy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;