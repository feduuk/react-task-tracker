import { useState } from "react"

import Header from "./components/Header";
import Tasks from "./components/Tasks";





function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Guitar lessons",
            day: "Dec 5th at 3:00pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Dentist appointment",
            day: "Dec 15th at 6:00pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Date",
            day: "Dec 30th at 23:00pm",
            reminder: false,
        }
    ])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task)=>task.id!==id))
    }


    const toggleReminder = (id) => {
        console.log(id)
    }

    return (
        <div className="container">
            <Header />
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks to show!"}
        </div>
    );
}

export default App;
