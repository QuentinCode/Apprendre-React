import { useState } from "react";
import Item from "./Item";
import {v4 as uuidv4} from 'uuid'

export default function Form() {

  const [dataArr, setDataArr] = useState([
    {txt: "Promener le chien", id: uuidv4()},
    {txt: "Sport", id: uuidv4()},
    {txt: "Coder avec React", id: uuidv4()},
  ])  
  const [stateInput, setStateInput] = useState();
  
    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
        return item.id !== id;
        })
        setDataArr(filteredState)
    }

const addTodo = e => {
    e.preventDefault();
    const newArr = [...dataArr]
    const newTodo = {};
    newTodo.txt = stateInput;
    newTodo.id = uuidv4();
    
    newArr.push(newTodo);
    setDataArr(newArr);
    setStateInput('')
}
const linkedInput = e => {
   setStateInput(e); 
}

  return (
    <div className="form-container">
        <form onSubmit={e => addTodo(e)}>
            <label htmlFor="todo">
                Chose à faire :
            </label>
            <input
            value={stateInput}
            onChange={e => linkedInput(e.target.value)}
            type="text" 
            id="todo" 
            />
            <button>Envoyez</button>
        </form>
        <h2>Liste des choses à faire :</h2>
        <ul className="list-group">
            {dataArr.map(item => {
                return (
                    <Item
                    txt={item.txt}
                    key={item.id}
                    id={item.id}
                    delFunc={deleteElement}
                    />
                )
            })}
        </ul>
    </div>
  )
}
