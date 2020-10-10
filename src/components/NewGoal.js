import React, {useState} from 'react'
import './NewGoal.css'

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState('')
  const newGoal = 
  {
    id:Math.random().toString(),
    text:enteredText
  }
  return (
    <div className='newGoal'>
      <form onSubmit={(e) => {
          e.preventDefault();
          newGoal.text = enteredText
          props.onAddGoal(newGoal)
          setEnteredText('')
        }} method='post'>
        <input type='text' value={enteredText} placeholder='new goal' onChange={e=>
          setEnteredText(e.target.value) }></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NewGoal
