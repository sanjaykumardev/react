import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { URL } from '../url'

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
<div>
<div>
<h3 className='text-white'>login</h3>
</div>

<form onSubmit={(e) => handleSubmit(e)}>
<div>
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
</form>

{error && <h4 className='text-blue-700 '>something went wrong</h4>}
<p>
<span className="font-bold">Create New here?</span>
<span className="cursor-pointer text-gray-700 pl-2">
<Link to='/Register'>Register</Link>
</span>
</p>
</div>
</>
  )
}

export default login;
