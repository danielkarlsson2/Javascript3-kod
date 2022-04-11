
const AddProduct = ({ product}) => {
  return (
    <tr className="border">
      {/* <td>{ product.id }</td> */}
      <td>{ product.name }</td>
      <td className='text-end'>
        <button className='btn btn-success btn-sm me-1'>Klar</button>
        <button className='btn btn-danger btn-sm'>Ta bort</button>
      </td>
    </tr>
  )
}

export default AddProduct