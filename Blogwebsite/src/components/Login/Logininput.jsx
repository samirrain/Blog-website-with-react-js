import React from 'react'

const Logininput = ({type,label,...props}) => {
  return (
    <div className='my-2'>
 {label && <label className="block capitalize text-gray-700">{label}</label>}
        <input type={type}  {...props} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  />
      </div>
  )
}

export default Logininput
