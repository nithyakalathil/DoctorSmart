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
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-200 p-4">

      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl sm:p-10">

     
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 text-3xl text-white shadow-lg">
            
          </div>

          <h1 className="text-3xl font-extrabold text-gray-800">
            Create Your Account
          </h1>

          <p className="mt-3 text-gray-500">
            Fill in the details below to get started
          </p>
        </div>

       
        <form onSubmit={createData} className="space-y-5">

     
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Username
            </label>

            <input
              type="text"
              name="user"
              value={form.user}
              placeholder="Enter your username"
              onChange={inputHolder}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
          </div>

        
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={inputHolder}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
          </div>

       
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Enter your password"
              onChange={inputHolder}
              required
              minLength={6}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
          </div>

        
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Address
            </label>

            <textarea
              name="address"
              value={form.address}
              rows="3"
              placeholder="Enter your address"
              onChange={inputHolder}
              required
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
          </div>

     
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:from-violet-700 hover:to-blue-600 hover:shadow-xl active:translate-y-0"
          >
             Register
          </button>

        </form>

       
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-bold text-violet-600 transition hover:text-blue-600 hover:underline"
          >
            Login
          </a>
        </p>

      </div>
    </div>
    </>
)

}

export default Register