import react from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState} from 'react'
import axios  from "axios" 


// const location=useLocation();

// const Datahandle = 


const isProductAvailable = true;
function home(){


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



  
  return(
     <>
   <Navbar/>
      <main>
        {/* <div>
        <h1>Hello {location.state.id} and welcome to the home</h1>
        </div> */}
      <section>
      <div name="left" className='text-l'>
      <h2>Personal Information</h2>  
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
    <h2>vaccination details</h2>  
    <h3>Time</h3>  
      <input 
      type="time" 
      placeholder='time'  
      onChange={(e)=>setTime(e.target.value)}/> 
    <h3>Slot</h3>  
      <input type="date"  
      placeholder='slot'  
      onChange={(e)=>setSlot(e.target.value)} 
      />

    <h3>avability check</h3>  
     <p>COVID Vaccin: Covacccin </p>
     {isProductAvailable ? <p> Status: <span className='text-green-700'>Avalilable </span> </p> : <p>Status: Not Avalilable </p>} 
      </div>
      <div>
        <button >Submit</button>
      </div>
      </section>
      </main>
   <Footer/>
     </>
  )
}

export default home