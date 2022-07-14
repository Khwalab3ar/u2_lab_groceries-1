const ListOfFood =(props) =>{

  return(
    <div className="food">
    <div className="list-of-food">
      <h2>Do you need to buy this?</h2>
      <ul>
        {props.list.map((item,index)=>(
          <li className='food-item' key={index}>
            <div className='food-img'>
              <h4>Item : {item.item} </h4>
              <p>Brand: {item.brand} Quantity: {item.quantity}</p>
              <button className="btn" onClick={()=>props.handleClick('yes',index)}>Yes</button>
              <button className="btn" onClick={()=>props.handleClick('no',index)}>No</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <button className="btn" id="create-list" onClick={props.createList}>Make List</button>
    <button className="btn" id="clear-list" onClick={props.clearList}>Clear List</button>
  </div>
  )
}

export default ListOfFood