import React from 'react'

const GoalList = (props) => {
    var lists=[];
    let data = props.goals
    for(let i=0;i<data.length; i++) {
      lists.push(<li key={data[i].id}>{data[i].text}</li>);
    }
    console.log(data)
    return (

      <div>
        <ul className='goal-list'>
          {lists}
        </ul>
      </div>
    )
}

export default GoalList

