import {useState} from "react"

const tasks = [
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
]
const t = tasks.map((task) => (
    <h3 key={task.id}>{task.text}</h3>
))

const Tasks = () => {
  return (
    <>
        {t}
    </>
  )
}

export default Tasks