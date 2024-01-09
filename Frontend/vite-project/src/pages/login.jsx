import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { URL } from '../url'
import Navbar2 from "../components/Navbar2"
import Footer from '../components/Footer'


function login() {
  const [gmail, setGmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(false)
  const navigator = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("good",e);
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", { gmail, password })
      setGmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigator ( "/",{state:{id:gmail}})
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  return (
    <>
    <Navbar2/>
<div className='md:px-[200px] w-[1/2] px-4 py-4  pz-5  '>
    <div>
       <h3 className='text-white'>login</h3>
    </div>

    <form  className='h-[80vh]  bg-blue-300 ' onSubmit={(e) => handleSubmit(e)}>
    <div className=' w-[1/2] '>
    <input
      type='email'
      placeholder='email'
      required
      onChange={(e) => setGmail(e.target.value)}
    />
    <input
      type='password'
      placeholder='password'
      required
      onChange={(e) => setPassword(e.target.value)}
    />
</div>
      <button type="submit">Login</button>
      {error && <h4 className='text-blue-700 '>something went wrong</h4>}
<p>
<span className="font-bold">Create New here?</span>
<span className="cursor-pointer text-gray-700 pl-2">
<Link to='/Register'>Register</Link>
</span>
</p>
   </form>


</div>
<Footer/>
</>
  )
}

export default login;
