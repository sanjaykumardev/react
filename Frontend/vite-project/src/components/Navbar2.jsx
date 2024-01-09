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
      <div className=" sticky  md:sticky md:top-0 bg-black flex items-center justify-between  md:px-[200px] py-4   border-bottom-2  md:w-[full]">
        <h1 className=" text-  font-extrabold px-0 text-white"><Link to="/">COVID-19 FORM</Link></h1>
        <div className="flex justify-center w-1/2 items-center content-between text-sm  bg-white  rounded-full">
          {/* <BsSearch className='h-10 w-20 py-2  text-black md:text-black ' /> */}
          {/* <input className=" outline-none rounded-full md:px-[6px] w-full " placeholder='Search of post' type="text" /> */}
        </div>


          <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-2  ">
        <button className='mr-2'><Link to='/write'>Write</Link></button> : <button className='px-5 py-2 cursor-pointer rounded-lg font-semibold xl:text-1xl text-black bg-white'><Link to="/Login">Login</Link></button>

       <div >
            <p className='cursor-pointer  relative'>delete</p>
            {/* {menu && <Menu/>} */}
          </div> : <button className=' cursor-pointer font-semibold rounded-lg md:text-1xl px-4 py-2 bg-white text-black'><Link to="/register ">Register</Link></button>
        </div>



        <div  className='md:hidden text-lg w-[50px] '>
            <p className='cursor-pointer relative text-white'>delete</p>
          </div>
      </div>
    </>



  )

  }
export default Navbar
