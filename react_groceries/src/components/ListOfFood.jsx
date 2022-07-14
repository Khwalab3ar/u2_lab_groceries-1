const ListOfFood =(props) =>{

  return(
    <div className="food">
    <button className="btn" id="create-list" onClick={props.createList}>Make List</button>
    <button className="btn" id="clear-list" onClick={props.clearList}>Clear List</button>
    <div className="list-of-food">
      <ul>
        {props.list.map((item,index)=>(
          <li className='food-item' key={index} id={('list' +index)}>
              <img src="https://64.media.tumblr.com/25029dee5d735e25dc1de421fa8b13a7/ef0ad357e6a17c83-21/s400x600/20778d4e275222d0c7372b7f9510f875f435baf7.png"/>
              <h4 className="f-list">{item.item} </h4>
              <p className="f-list">Brand: {item.brand}</p><p className="f-list"> Quantity: {item.quantity}</p>
              <div className="y-n-btn">
              <button className="choice-btn" onClick={()=>props.handleClick('yes',index)}>Yes</button>
              <button className="choice-btn" onClick={()=>props.handleClick('no',index)}>No</button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default ListOfFood