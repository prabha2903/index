import React from 'react'

const User = ({name,department,skills,roles}) => {
  return (
    <div>
        <h1>I am {name} from {department} department</h1>
        <ol>
        {skills.map((skill)=>(
         <li>{skill}</li>
        ))} 
        </ol>
        <h3>Roles:</h3>
        <ul>
            {roles.map((r)=>(
                <li>{r}</li>
            ))}
        </ul>
    </div>
  )
}

export default User