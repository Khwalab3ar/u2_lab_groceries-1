const AddGrocery = (props) => {
  return(
    <div className="need-food">
      <ul>
        {props.list.map((item => (
          <li>
            <h4 class="g-list">{item.item}</h4>
            <p class="g-list">Brand: {item.brand}</p>
            <p class="g-list">Quantity: {item.quantity}</p>
          </li>
        )))}
      </ul>
    </div>
  )
  }
export default AddGrocery