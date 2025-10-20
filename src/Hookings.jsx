import React, { useState } from "react"

function Hookings() {
    const [name, setName] = useState("broklyn")
    const [age, setAge] = useState(0)
    const [isStudent, setIsStudent] = useState(true)

    const handleChangeName = () => {
        setName("olalekan")
    }

    const handleChangeAge = () => {
        setAge(age + 1)
    }

    const handleChangeStudent = () => {
        setIsStudent(!isStudent)
    }

    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={handleChangeName}>Change Name</button>

            {/* for the age  */}
            <h1>Age: {age}</h1>
            <button onClick={handleChangeAge}>Increase Age</button>

            {/* for the student status */}
            <h1>Student: {isStudent ? "Yes" : "No"}</h1>
            <button onClick={handleChangeStudent}>Toggle Student Status</button>
        </div>
    )
}

export default Hookings