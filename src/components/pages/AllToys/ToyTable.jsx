

const ToyTable = ({toy}) => {
    console.log(toy);



    return (
        <tr className='text-center text-sm'>
            <td>{toy.sellerName}</td>
            <td>{toy.title}</td>
            <td>{toy.category}</td>
            <td>{toy.price}$</td>
            <td>{toy.quantity}</td>
            <td><button className='btn btn-primary'>View Details</button></td>
        </tr>
    );
};

export default ToyTable;