import React from 'react'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
import State from '../hooks/State'
import Form from '../hooks/Form'

export const Home = () => {
  return (
    <div>
    <Profile name="PRABHA" age={20} skills={["HTML","CSS","JS","JAVA","PYTHON"]} />
   <Parent />
   <State/>
   <Form />
    </div>
  )
}
export default Home