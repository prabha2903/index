import React, { useState } from 'react'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
import State from '../hooks/State'
import Form from '../hooks/Form'
import { Link } from 'react-router-dom'
import { userContext } from '../App'
export const Home = () => {
  const [user,setUser] =useState("Prabha")
  return (
    <div>
      <Link to={'/form'}>Form</Link><br />
      <Link to={'/state'}>UseState Example</Link><br />
      <Link to={'/reducer'}>UseReducer Example</Link>
      <userContext.Provider value={user}>
       <Profile age={20} skills={["HTML","CSS","JS","JAVA","PYTHON"]} />
      </userContext.Provider>
   <Parent />
   <State/>
   <Form />
    </div>
  )
}
export default Home