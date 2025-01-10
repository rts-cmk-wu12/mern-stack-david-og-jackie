import { useEffect, useState } from "react"
import { Link } from "react-router"




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
      
      <h1>
        Twitter posts:   <Link to="/details">post selv</Link>
        {users.map((user,index) =>(
         <Link to={`/haha/${user._id}`}>   <div key={index}> Your{user.y} Email: {user.headline} ID : {user.text} </div>  </Link> 
         
        
            
        ))}
      </h1>
     
      
    </>
  )
}

export default App