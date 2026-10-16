import { useState } from "react"

function Login(){
const [form,setform]=useState({
   
    username:"",
    password:"",
    
})

 const inputHolder = (event) => {

    setform({
      ...form,
      [event.target.name]: event.target.value
    })

  }

 const createData = async (e) => {

    e.preventDefault()

    try {

      const response = await axios.post(API_URL, {
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password,
        address: form.address,
      })

      console.log(response.data)

      setform([
        ...form,
        response.data
      ])

      setform({
       
        username: "",
       
        password: "",
       
      })

    } catch (error) {

      console.log(error)

    }

  }

return(
    <>
    <div className="p-3">
        <form onSubmit={createData}>
        <div className="border border-1 border-gray">
            <input type="text" value="username" name="user" placeholder="Enter your username" onChange={inputHolder}></input>
            <input type="password" value="password" name="password" placeholder="Enter your passwrd"  onChange={inputHolder}></input>
       
           <button type="submit">Login</button>

        </div>
        </form>

    </div>
    </>
)

}

export default Login