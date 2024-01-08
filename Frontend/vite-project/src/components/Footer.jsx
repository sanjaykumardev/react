import React from "react"


function Footer() {
  return (
    <>
<div className="   mt-8 w-full bg-black px-8 md:px-[500px] md:flex-row  flex-col flex  space-y-0 items-start justify-between sm:text-sm md:text-md py-10 md:text-1xl sm:space-x-0 gap-4">
<div className=" flex flex-col text-white">
<p>Fearture vaccnation Details</p>
<p>Most Viewed</p>
<p>Readers Choice</p>
</div>

{/* middle */}

<div className=" flex flex-col  text-white ">
<p>Forum</p>
<p>Support</p>
<p>Recent Posts</p>
</div>

<div className=" flex flex-col  text-black">
<p>Privacy Policy</p>
<p>About Us </p>
<p>Terms & Condition</p>
<p>Terms of Service</p>
</div>
</div>
<p className="py-2 pb-2 h-full text-center text-white bg-black">All right reseved @COVID-19 Vaccination 2024</p>
</>
  )
}

export default Footer