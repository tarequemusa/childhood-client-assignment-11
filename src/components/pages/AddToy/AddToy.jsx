import useTitle from "../../../Hooks/useTitle";
import {useForm} from "react-hook-form";
import "./AddToy.css";
import {useContext, useState} from "react";
import {AuthContext} from "../../../Providers/AuthProviders";



const AddToy = () => {
    useTitle('Add A Toy');
    const {user} = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addToy", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
        console.log(data);
    };

    return (
        <>
            <div>
                <h2 className='text-4xl font-bold border-b-4 text-center my-12'><span className='rounded-full outline p-4 bg-pink-700 text-white'>Add Disney Dolls</span></h2>
            </div>

            <div className="add-toy-container container px-12 mx-auto">
                <div className="add-job row">
                    <div className="flex items-center">
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="flex justify-center">
                                <input
                                    className="text-input outline rounded"
                                    {...register("title")}
                                    placeholder="Dolls Name"
                                />
                                <input
                                    className="text-input outline rounded"
                                    {...register("sellerName")}
                                    placeholder="Seller Name"
                                />
                                <input
                                    className="text-input outline rounded w-12/12"
                                    value={user?.email}
                                    {...register("postedBy")}
                                    placeholder="Your Email"
                                    type="email"
                                />
                            </div>
                            <div className="flex justify-center">
                                <select className="text-input outline rounded" {...register("category")}>
                                    <option value="Disney Princess">Disney Princess</option>
                                    <option value="Disney Frozen">Disney Frozen</option>
                                    <option value="Disney The Little Mermaid">Disney The Little Mermaid</option>
                                </select>
                                <input
                                    className="text-input outline rounded"
                                    {...register("price", {required: true})}
                                    placeholder="Dolls Price"
                                    type="number"
                                />
                                <select className="text-input outline rounded" {...register("rating")}>
                                    <option value="*****">*****</option>
                                    <option value="****">****</option>
                                    <option value="***">***</option>
                                    <option value="**">**</option>
                                    <option value="*">*</option>
                                </select>
                            </div>
                            <div className="flex justify-center">
                                <input
                                    className="text-input outline rounded"
                                    {...register("quantity", {required: true})}
                                    placeholder="Available Quantity"
                                    type="number"
                                />
                                <input
                                    className="text-input outline rounded"
                                    {...register("image")}
                                    placeholder="Picture URL of the toy"
                                    type="url"
                                />
                                <input
                                    className="text-input outline rounded"
                                    {...register("postDate")}
                                    placeholder="Date of Post"
                                    type="date"
                                />
                            </div>
                            <input
                                className="text-input outline rounded"
                                {...register("description")}
                                placeholder="Dolls Description"
                            />
                            <div className="flex justify-center">
                                <input className="submit-btn" value="Add a Toy" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddToy;