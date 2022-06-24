import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import About from "./components/About";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "text": "Walk the dog",
      "day": "6/23/2022",
      "reminder": false,
      "id": 1
    },
    {
      "text": "Dinner with friends",
      "day": "6/25/2022",
      "reminder": false,
      "id": 2
    },
    {
      "text": "Party",
      "day": "6/28/2022",
      "reminder": false,
      "id": 3
    }
  ])
  
  // useEffect(() => {
  //   const getTasks = async() => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }

  //   getTasks()
 
  // },[])
  
  // const fetchTasks = async  () => {
  //   const res = await  fetch('http://localhost:5000/tasks')
  //   const data = await res.json()
  //   return data
  // }
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data= await res.json()
  //   console.log(data)
  //   return data
  // }

  //on back end, it creates an id on its own ...means copy
  const addTask =  (task) => {
    // const res = await fetch('http://localhost:5000/tasks', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // })
    // //data returned is the new task added
    // const data =await res.json()
    
    // setTasks([...tasks, data])

    const id = Math.floor(Math.random()*1000)+1
    const newTask={id, ...task }
    setTasks([...tasks, newTask])
  };

  //delete task
  //const delete takes a function (id)  ?==then
  //takes in an id and brings it to task
  // 
  const deleteTask = (id) => {
    // await fetch(`http://localhost:5000/tasks/${id}`,{
    //   method: 'DELETE',
    // })
    setTasks(tasks.filter((task) => task.id !== id));
  };//.filter is a high order array method. doesnt show the task with the id.

  //toggle reminder
  //... == copy
  // sets tasks, maps through the task.id. if its equal to the id passed in. change reminder.
  const toggleReminder =(id) => {
    // const taskToToggle  =  fetchTask(id)
    // const  updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    // const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    //   method: 'PUT',
    //   headers:{
    //     'Content-type': 'application/json'
    //   },
      
    //   body:JSON.stringify(updTask)
    // })
    // const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <Router>
    <div className="container  "><style>{"body { background-color: #faf6f0; }"}</style>
      <Header onAdd={()=>setShowAddTask(!showAddTask)}showAdd={showAddTask} title={"Task Tracker"} />
      <Routes>
      <Route path ='react-task-tracker' element={
      <>
       {showAddTask && <AddTask onAdd={addTask}/>}
      {/* if task.length is greater than 0 ? (then) show tasks. :(or else) ("no tasks") */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "All done!"
      )}
      </>}
      />

      <Route path='react-task-tracker/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>

    
  )
}

export default App;
