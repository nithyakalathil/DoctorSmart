import axios from 'axios'
import { useEffect, useState } from 'react'

function PatientList(){
const API_URL="https://demo.lupinary.com/api/patients?user_id=1&clinic_id=1&page_no=0"
const [list,update]=useState([])
 const [loading, setLoading] = useState(false)

const getProduct =async()=>{
    try{
        setLoading(true)
   const response=await axios.get(API_URL)
   update(response.data)
    }
    catch(error){
console.log(error)
    }
    finally{
        setLoading(false)
    }
}



useEffect(()=>(
getProduct,[])
)
return(
    <>
    <div className="p-8">
       
       {list.map((lis) => (

          <div key={li.id}>

            <h2>{li.name}</h2>

            <p>{li.desease}</p>


          

          </div>

        ))}
       
      
    </div>
    </>
)

}

export default PatientList