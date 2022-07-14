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
    if (value === 'yes') {
      oldList[index].isPurchased = false
    } else {
      oldList[index].isPurchased = true
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
      <div className="container">
        <ListOfFood
          list={foodList}
          handleClick={handleClick}
          createList={createList}
          clearList={clearList}
        />
      </div>
      <AddGrocery list={list} />
    </main>
  )
}

export default App
