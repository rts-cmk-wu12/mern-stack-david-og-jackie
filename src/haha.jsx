import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function Haha() {
    const params = useParams()
    console.log(params)
	const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        async function fetchData(){
           const response =  await fetch(`/posts/${params.index}`)
           const data = await response.json()
     
           setPokemon(data)
         }
         
         fetchData()
       }, [])

    

	const style = {
		heading: {
			textTransform: "capitalize"
		}
	}

	return (
	
		<>
		        
            <div > <p>{pokemon.y }</p> 
            <p> {pokemon?.headline}</p>
              <p> {pokemon?.text}</p> </div>  
         
        
            
   
   

            
		</>
		)
}