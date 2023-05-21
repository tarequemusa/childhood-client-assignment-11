import {useContext} from "react";
import {AuthContext} from "../../../Providers/AuthProviders";
import {useForm} from "react-hook-form";


const UpdateModal = (props) => {
    const {user} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const {handleToyUpdate} = props;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="font-bold text-lg">Update Toy Info!</h3>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className="flex flex-col" onSubmit={handleSubmit(handleToyUpdate)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="flex justify-center">
                            <input
                                className="text-input outline rounded"
                                defaultValue={props?.toy?.title}
                                {...register("title")}
                                placeholder="Dolls Name"
                            />
                            <input
                                className="text-input outline rounded"
                                defaultValue={props?.toy?._id}
                                {...register("_id")}

                            />
                            <input
                                className="text-input outline rounded"
                                defaultValue={props?.toy?.sellerName}
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
                                defaultValue={props?.toy?.price}
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
                                defaultValue={props?.toy?.quantity}
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
                            defaultValue={props?.toy?.description}
                            {...register("description")}
                            placeholder="Dolls Description"
                        />
                        <div className="flex justify-center">
                            <input className="submit-btn" value="Update Toy Info" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;

