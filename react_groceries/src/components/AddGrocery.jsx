const AddGrocery = (props) => {
  return(
    <div className="need-food">
      <ul>
        {props.list.map((item => (
          <li>
            <h4>Item: {item.item}</h4>
            <p>Brand: {item.brand} Quantity: {item.quantity}</p>
          </li>
        )))}
      </ul>
    </div>
  )
  }
export default AddGrocery