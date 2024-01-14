import {  useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react'
import {URL} from '../url'
import axios from 'axios'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'


const register = () => {
  const [username, setUsername] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigator= useNavigate();

 
 
  async function RegisterSubmit(e){
    e.preventDefault(); 
   console.log(e)
    try {
      const res = await axios.post("http://localhost:8000/api/user/register", {
        username,
        gmail,
        password,
        
      });
      console.log('Username:', username);
      console.log('Email:', gmail);
      console.log('Password:', password);
      console.log(res)
      setUsername(" ")
      setGmail(" ");
      setPassword(" ");

     setUsername(res.data.username);
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
       <div  >
         <h3 className='test-6xl text-red-500 '>Register</h3>
       </div>
       <div className='flex justify-center'>
     
       <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={gmail}
        placeholder="Enter your email"
        onChange={(e) => setGmail(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className='' onClick={register}>Register</button>
    </div>
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
