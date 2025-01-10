import { useEffect, useState } from "react"



function App() {
const [users, setUsers] = useState([])
//fetch fra vores api/server
  useEffect(()=>{
   async function fetchData(){
      const response =  await fetch("/posts")
      const data = await response.json()

      setUsers(data)
    }
    
    fetchData()
  }, [])
  
  return (
    <>
      
  Tweeter
  <form  method="post">
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="submit" />
  </form>




      {/* <h1>
        list of users:
        {users.map((user,index) =>(
          <div key={index}> {user.headline}  {user.text}  {user ._id} </div>
          
        ))}
      </h1> */}
     
      
    </>
  )
}

export default App
