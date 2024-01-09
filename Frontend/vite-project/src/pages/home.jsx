import react from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState ,Link} from 'react'

import axios  from "axios" 








function home(){

  const logout = async () => {
    
    try {
      // Assuming you have the user's credentials available (gmail and password)
      const response = await axios.delete("http://localhost:8000/api/user/logout", {
  
      });
      console.log(response )

      if (response.status === 200) {
        console.log('Logout successful');
     
        setIsAuthenticated(false);
      } else {
        console.log('Logout failed');
   
      }
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };


const [name ,setName] = useState(" ");
const [age ,setAge] = useState(" ");
const [Adhare ,setAdhare] = useState(" ");
const [state ,setState] = useState(" ");
const [country ,setCountry] = useState(" ");
const [city ,setCity] = useState(" ");
const [gmail ,setGmail] = useState(" ");
const [address,setAddress] = useState(" ");
const [time ,setTime] = useState(" ");
const [slot ,setSlot] = useState(" ");

    
const isProductAvailable = true;
const [isAuthenticated, setIsAuthenticated] = useState(true);
  return(
     <>
     <main>
     <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <p>User is already logged out</p>
      )}
    </div>
      {/* // Personal imformation */}
      <div className="bg-blue-500 text-white p-4">
      <div>
      <div name="left">
      <h2 className="text-3xl text-center">Personal Information</h2>  
      <h3>FullName</h3>  
        <input 
        type="text" 
        placeholder='Name'
        onChange={(e)=>setName(e.target.value)}
        />
      <h3>country</h3>    
        <input 
        type="text"
         placeholder='age'
         onChange={(e)=>setAge(e.target.value)} 
         />
      <h3>Addhare</h3>  
        <input 
        type="text" 
        placeholder='Adhare' 
        onChange={(e)=>setAdhare(e.target.value)}
        />
      <h3>State</h3>  
        <input
         type="text"
          placeholder=' state'
          onChange={(e)=>setState(e.target.value)}
          />
      </div>

      <div name="right">
      <h3>Country</h3>  
      <input 
      type="text"  
      placeholder='Country'
      onChange={(e)=>setCountry(e.target.value)}
      /> 
      <h3>City</h3>  
      <input type="text"  
      placeholder='City'
      onChange={(e)=>setCity(e.target.value)}
      />
      <h3>Gmail</h3>  
      <input type="text" 
       placeholder='gmail'
       onChange={(e)=>setGmail(e.target.value)}
       />
      <h3>Address</h3>  
      <input 
      type="text"  
      placeholder=' Address' 
      onChange={(e)=>setAddress(e.target.value)}
       />
      </div>

      <div name=" vaccination details">
    <h2>Vaccination Details</h2>  
    <h3>Time</h3>  
      <input className='bg-black text-white-500'
      type="time" 
      placeholder='time'  
      onChange={(e)=>setTime(e.target.value)}/> 
    <h3>Slot</h3>  
      <input className='bg-black text-white-500' type="date"  
      placeholder='slot'  
      onChange={(e)=>setSlot(e.target.value)} 
      />

    <h3>Avability Check</h3>  
     <p>COVID Vaccin: Covacccin </p>
     {isProductAvailable ? <p> Status: <span className='text-green-900'>Avalilable </span> </p> : <p>Status: Not Avalilable </p>} 
      </div>
      <div>
        <button className='bg-black text-white-500'>Submit</button>
      </div>
      </div>
      </div>
   <Footer/>
   
     </main>
     </>
  )
}

export default home