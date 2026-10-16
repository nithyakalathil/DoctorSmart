// import { useState } from "react"

// function Login(){
// const [form,setform]=useState({
   
//     username:"",
//     password:"",
    
// })

//  const inputHolder = (event) => {

//     setform({
//       ...form,
//       [event.target.name]: event.target.value
//     })

//   }

//  const createData = async (e) => {

//     e.preventDefault()

//     try {

//       const response = await axios.post(API_URL, {
//         name: form.name,
//         username: form.username,
//         email: form.email,
//         password: form.password,
//         address: form.address,
//       })

//       console.log(response.data)

//       setform([
//         ...form,
//         response.data
//       ])

//       setform({
       
//         username: "",
       
//         password: "",
       
//       })

//     } catch (error) {

//       console.log(error)

//     }

//   }

// return(
//     <>
//    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
//       <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

       
//         <div className="mb-8 text-center">
//           <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl">
          
//           </div>

//           <h1 className="text-3xl font-bold text-gray-800">
//             Welcome Back!
//           </h1>

//           <p className="mt-2 text-gray-500">
//             Please login to your account
//           </p>
//         </div>

      
//         <form onSubmit={createData} className="space-y-5">

//           <div>
//             <label className="mb-2 block text-sm font-semibold text-gray-700">
//               Username
//             </label>

//             <input
//               type="text"
//               name="user"
//               value={form.user}
//               placeholder="Enter your username"
//               onChange={inputHolder}
//               required
//               className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-semibold text-gray-700">
//               Password
//             </label>

//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               placeholder="Enter your password"
//               onChange={inputHolder}
//               required
//               className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
//             />
//           </div>

//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center gap-2 text-gray-600">
//               <input type="checkbox" className="accent-indigo-600" />
//               Remember me
//             </label>

//             <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800">
//               Forgot password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
//           >
//             Login →
//           </button>

//         </form>

//         <p className="mt-6 text-center text-sm text-gray-500">
//           Don't have an account?{" "}
//           <a href="#" className="font-semibold text-indigo-600 hover:underline">
//             Sign up
//           </a>
//         </p>

//       </div>
//     </div>
//     </>
// )

// }

// export default Login



import { useState } from "react";
import axios from "axios";

function Login() {
  const API_URL = "https://your-api-url.com/login";
  

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

 
  const inputHolder = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

 
  const createData = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        username: form.username,
        password: form.password,
      });

      console.log("Login response:", response.data);

      setSuccess("Login successful!");

    
      setForm({
        username: "",
        password: "",
      });

    } catch (error) {
      console.error("Login error:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

       
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl">
          
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back!
          </h1>

          <p className="mt-2 text-gray-500">
            Please login to your account
          </p>
        </div>

       
        <form onSubmit={createData} className="space-y-5">

    
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              name="username"
              value={form.username}
              placeholder="Enter your username"
              onChange={inputHolder}
              autoComplete="username"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

       
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              placeholder="Enter your password"
              onChange={inputHolder}
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

      
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="accent-indigo-600"
              />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Forgot password?
            </a>
          </div>

       
          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </p>
          )}

       
          {success && (
            <p
              role="status"
              className="rounded-lg bg-green-50 p-3 text-sm text-green-700"
            >
              {success}
            </p>
          )}

      
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login →"}
          </button>
        </form>

    
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
