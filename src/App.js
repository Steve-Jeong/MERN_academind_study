import React, {useState} from 'react';
import './App.css';
import Portal from './components/Portal'

function App() {
  const [courseGoals, setCourseGoals] = useState([
    {id:'cg1', text:'Finish the Course'},
    {id:'cg2', text:'Learn all about the Course Main Topic'},
    {id:'cg3', text:'Help other students in the Course Q&A'}
  ])
  return (
    <div className='course-goals'>
      <Portal goals={courseGoals} onAddGoal={(newGoal)=>{
        // setCourseGoals(courseGoals.concat(newGoal))
        setCourseGoals(iamaboy=>iamaboy.concat(newGoal))
      }}></Portal>
    </div>
  );
}

export default App;
