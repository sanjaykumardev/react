import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
import { URL } from '../url'
import Navbar2 from "../components/Navbar2"
import Footer from '../components/Footer'
import { validEmail, validPassword } from '../components/validation';


function login() {
  const [gmail, setGmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  // const [error, setError] = useState(false)
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const navigator = useNavigate()

  const validate = () => {
    if (!validEmail.test(gmail)) {
       setEmailErr(true);
    }
    if (!validPassword.test(password)) {
       setPwdError(true);
    }
 };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("good",e);
    try {
      const res = await Axios.post("http://localhost:8000/api/user/login", { gmail, password })
      const token = res.data.Token;
      console.log('Token:', token);
      console.error('Axios Error:', error);
      setGmail(" ");
      setPassword(" ");
     
      setGmail(res.data.email)
      setPassword(res.data.password)
      // setError(false)
      navigator ( "/")
    } catch (error) {
      // setError(true)
      console.error('Login failed:', error.response.data.error);
    }
  };
 

  return (
    <>
    <Navbar2/>
<div className='md:px-[200px] w-[1/2] px-4 py-4  pz-5  '>
    <div>
       <h3 className='text-white'>login</h3>
    </div>

    <form   className='h-[80vh]  bg-blue-300 ' onSubmit={(e) => handleSubmit(e)}>
    <div className=' w-[1/2] '>
    <input
      type='email'
      placeholder='email'
      value={gmail}
      onChange={(e) => setGmail(e.target.value)}
    />
    <input
      type='password'
      placeholder='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
</div>
      <button onClick={validate} type="submit">Login</button>
      {emailErr && <p>Your email is invalid</p>}
         {pwdError && <p>Your password is invalid</p>}
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
