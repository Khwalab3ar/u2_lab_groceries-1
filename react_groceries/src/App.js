import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AddGrocery from './components/AddGrocery'
import ListOfFood from './components/ListOfFood'
import grocery from './data/grocery'

function App() {
  const [foodList, setFoodList] = useState(grocery)
  const [list, setList] = useState([])

  const handleClick = (value, index) => {
    let oldList = foodList
    let newId = '#list' + index.toString()
    let li = document.querySelector(`${newId}`)
    console.log(li)
    if (value === 'yes') {
      li.style.backgroundColor = '#8a64aa'
      li.style.opacity = '.5'
      oldList[index].isPurchased = false
    } else {
      oldList[index].isPurchased = true
      li.style.backgroundColor = ''
      li.style.opacity = '1'
    }
    setFoodList(oldList)
  }

  const createList = () => {
    let newList = []
    foodList.map((item) => {
      if (item.isPurchased === false) {
        newList.push(item)
      } else {
        return
      }
    })
    setList([...newList])
  }

  const clearList = () => {
    let newList = []
    setList([...newList])
  }
  return (
    <main>
      <h1>Grocery List</h1>
      <div className="grocery-list">
        <AddGrocery list={list} />
      </div>
      <h2>Do you need to buy this?</h2>
      <div className="container">
        <ListOfFood
          list={foodList}
          handleClick={handleClick}
          createList={createList}
          clearList={clearList}
        />
      </div>
    </main>
  )
}

export default App
