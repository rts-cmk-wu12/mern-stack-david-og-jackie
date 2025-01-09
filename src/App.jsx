import { useEffect, useState } from "react"



function App() {
const [users, setUsers] = useState([])
//fetch fra vores api/server
  useEffect(()=>{
   async function fetchData(){
      const response =  await fetch("/api/users")
      const data = await response.json()

      setUsers(data)
    }
    
    fetchData()
  }, [])
  
  return (
    <>
      
      <h1>
        list of users:
        {users.map((user,index) =>(
          <div key={index}> Your Name : {user.name} Email: {user.email} ID : {user.id} </div>
          
        ))}
      </h1>
     
      
    </>
  )
}

export default App
