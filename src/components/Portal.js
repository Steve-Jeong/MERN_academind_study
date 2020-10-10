import React from 'react'
import GoalList from './GoalList'
import NewGoal from './NewGoal';

const Portal = (props) => {
  return (
    <div>
      <h2>Course Goals</h2>

      <NewGoal onAddGoal={(newGoal)=>{
        props.onAddGoal(newGoal)
      }}></NewGoal>

      <GoalList goals={props.goals}></GoalList>
    </div>
  )
}

export default Portal;