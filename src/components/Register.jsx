import { useState } from "react"

function Register(){
const [form,setForm]=useState({
    name:"",
    username:"",
    password:"",
    address:""
})

 const inputHolder = (event) => {

    setForm({
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

      setForm([
        ...Form,
        response.data
      ])

      setForm({
        name: "",
        username: "",
        email: "",
        password: "",
        address: "",
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
            <input type="text" value="username" name="user" placeholder="Enter your username"  onChange={inputHolder}></input>
            <input type="text" value="email" name="email" placeholder="Enter your email"  onChange={inputHolder}></input>
            <input type="password" value="password" name="password" placeholder="Enter your passwrd"  onChange={inputHolder}></input>
         <textarea rows="3" cols="6" placeholder="enter your address"  onChange={inputHolder}></textarea>
           <button type="submit">Register</button>

        </div>
        </form>

    </div>
    </>
)

}

export default Register