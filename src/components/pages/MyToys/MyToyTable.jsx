

const MyToyTable = ({toy}) => {
    console.log(toy);
    return (
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
            <td><button className="btn btn-primary">Update</button></td>
            <td><button className="btn btn-primary">Delete</button></td>
        </tr>
    );
};

export default MyToyTable;