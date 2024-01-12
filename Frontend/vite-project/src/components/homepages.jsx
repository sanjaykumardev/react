import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"
import React from 'react'

const homepages = () => {
  return (
    <>
      <Navbar2 />
      <div className=" bg-red-300"><h3 className=" p-2">sanjaykumar</h3></div>
      <div className="w-full flex  md:items-center  bg-blue-500 md:justify-center md:space-x-0 space-x-0" >
        {/* left */}
        <div className="md:w-500px   h-[500px]  flex justify-stretch items-start    ">
          <img className=" w-full  h-full md:h-[100%] object-cover" src="https://imgs.search.brave.com/r0jWbFtUtx-azgHd8lhdtO0ulKMoEtVrcLV9fEnyo7Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5kcmVhc29sbGVu/YmVyZ2VyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/NC9Nb20tRGFkLWFu/ZC1naXJscy1sb3Zl/LWJpZy1mYW1pbHkt/aHVnLTEwMjR4Njgz/LmpwZw"></img>
          <div>
            <div className="w-11/12 ~ ">
              <h2 className="p-5 text-4xl text-center">
                wecbskdbcksbdsbdcbsd
              </h2>
              <p className="mr-15 text-3xl  ml-4 space-x-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt quibusdam officia cumque enim incidunt cupiditate impedit eaque voluptatibus itaque iste consectetur praesentium doloribus, ad, suscipit hic iure, eum nesciunt.</p>
              <button className="bg-black text-white justify-normal">Apply the form</button>
            </div>
          </div>
        </div>


        {/* right */}
        <div className='flex flex-col w-[60%] md:w-[55%] md:ml-0 '>
          <h1 className=" text-1xl ml-2  font-extrabold md:font-bold md:md-2  md:text-2xl md:ml-5 ">
            {/* 10 Uses of Artifical Intelligence in day to day life */}
          </h1>
          <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-5 '>
            {/* <p className='md:pt-2 ml-2 mr-4 text-xs md:text-sm '>@Sanjaykumardev</p> */}
            <div className="flex space-x-2">
              {/* <p className='text-xs md:text-sm'>16/06/2023</p>
                  <p className='text-xs md:text-sm'>16:45</p> */}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default homepages
