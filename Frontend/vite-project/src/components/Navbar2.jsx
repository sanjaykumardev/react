import { Link } from 'react-router-dom'
// import { BsSearch } from 'react-icons/bs'
// import {FaBars} from 'react-icons/fa'
import {  useState } from 'react'
// import Menu from './Menu'
// import { UserContext } from '../context/UserContext'


const Navbar = () => {

  // const [menu,setMenu] = useState(false) 

  // const showMenu = ()=>{
  //   setMenu(!menu)
  // }

  // const {user} = useContext(UserContext)

  return (
    <>
      <div className="  border-shadow-2 md:top-0 bg-black p-4 shadow-md flex items-center justify-between  md:px-[270px] py-4   border-bottom-2 box-shadow md:w-[full]">
        <h1 className=" text-  f ont-extrabold px-0 text-white"><Link to="/">COVID-19 FORM</Link></h1>
        <div className="flex justify-center w-1/2 items-center content-between text-sm  bg-white  rounded-full">
          
        </div>

          <div className=" md:flex items-center justify-between space-x-2 md:space-x-2  ">
          <ul className="flex justify-between space-x-6 md:mr-5 text-center mr-7">
          <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
        
        </div>
         <div className='space-y-2 md:space-x-4  ml-5 '>
         <button className='px-5 mr-7 py-2 cursor-pointer rounded-lg font-semibold xl:text-1xl text-black bg-white'><Link to="/Login">Login</Link></button>

          <button className=' cursor-pointer font-semibold rounded-lg md:text-1xl px-4 py-2 bg-white text-black'><Link to="/register ">Register</Link></button>
         </div>

{/* 
        <div  className='md:hidden text-lg w-[50px] '>
            <p className='cursor-pointer relative text-white'>delete</p>
          </div> */}
      </div>
    </>



  )

  }
export default Navbar
