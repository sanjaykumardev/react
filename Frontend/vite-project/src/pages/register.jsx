import {  useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react'
import {URL} from '../url'
import axios from 'axios'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'


const register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigator= useNavigate();

 const history=useNavigate();
  const RegisterSubmit = async(e) => {
    e.preventDefault(); 
    console.log("Form submitted!",e);
    try {
      const res = await axios.post("http://localhost:8000/api/user/register", {
        firstname,
        lastname,
        gmail,
        password,
      });
      console.log(res)
      setFirstname(" ");
      setLastname(" ");
      setGmail(" ");
      setPassword(" ");

      setFirstname(res.data.firstname);
      setLastname(res.data.lastname);
      setGmail(res.data.gmail);
      setPassword(res.data.password);
      setError(false);
      navigator('/login');


    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    
    <div >
       <Navbar2/>
       <div >
         <h3 className='test-6xl text-red-500 text-center'>Register</h3>
       </div>
      <form onSubmit={(e) => RegisterSubmit(e)} >
        <label>
          First Name:
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </label>
        <br />
        <label>
          Gmail:
          <input type="text" value={gmail} onChange={(e) => setGmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className=' bg-black  text-white'  type="submit">Submit</button>
      </form>

      {error && <p> register succfully </p>}
      <Footer/>
    </div>
  );
};

export default register;




































































































// function register() {
     
//  const [firstname , setFirstname] = useState(" ");
//  const [lastname , setLastname] = useState(" ");
//  const [gmail , setGmail] = useState(" ");
//  const [password , setPassword] = useState(" ");
//  const [error , setError] = useState(false);
//  const  navigator = useNavigate();
//   console.log(firstname)
//   console.log(lastname)
//   console.log(gmail)
//   console.log(password)
  
//  const LoginSubmit = async(e)=>{
//   e.preventDefault();
//   try{
//     const res = await axios.post(URL + "/api/register", {firstname,lastname,gmail,password});
//     setFirstname(res.body.firstname)
//     setLastname(res.body.lastname)
//     setGmail(res.body.gmail)
//     setPassword(res.body.password)
//     setError(false)
//     navigator("/login")
//   }
//   catch(err){
//   setError(true)
//    console.log(err)
//   }
//  };
//   return (
//     <>
//      <div >
//       <div>
//         <h3>Register</h3>
//       </div>
//        <div>
//         <input type="radio" 
//         name='usertype'
//         value='user'
//         // onChange={(e)=>setUsertype(e.target.value)} 
//         /> user 
//         <input 
//         type="radio" 
//         name='usertype' 
//         value='Admin' 
//         // onChange={(e)=>setUsertype(e.target.value)}
//         /> Admin 
//        </div>
//     <div>
//      <input type='name' placeholder='first-name' onChange={(e) =>setFirstname(e.target.value)} />
//      <input type='name' placeholder='last-name'onChange={(e) =>setLastname(e.target.value)} />
//      <input type='email' placeholder='email' onChange={(e) =>setGmail(e.target.value)}/>
//      <input type='password' placeholder='password' onChange={(e) =>setPassword(e.target.value)}/>
//     </div>
//     <div>
//     <button onClick={LoginSubmit}>Submit</button>
//     {error ? <p >Succfully Register</p> :<p > <a href="/login">Go to Login Page</a></p>}
//     </div>
//     </div>

//     </>
//   )
// }

// export default register
