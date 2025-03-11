import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Arial"] flex justify-between items-center'>
        <div className='logo'>
            <h3>LOGO</h3>
        </div>
        <div className='links flex gap-10'>
            {['services', 'cars', 'about us', 'insights', 'works', 'contact'].map((item, index)=> (
                <a className={`text-md capitalize font-regular ${index === 5 && "ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar