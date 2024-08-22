import React from 'react'

const EmployeesTable = () => {
  return (
    <div className='border my-4 rounded-lg h-full'>
          <div className='flex items-center justify-between px-4 mt-6'>
            <input type="search" name="" id="" placeholder='Enter employees name...'
            className='border border-gray-200 rounded-lg w-[20rem] h-8 text-sm px-2 ' />
            <button className='border w-40 h-8 rounded-lg cursor-pointer bg-[#7152F3] text-white hover:border-[#7152F3]'>Add New Employee</button>
          </div>
      <div className='mt-10 overflow-x-scroll overflow-y-scroll'>
          <table className='w-full'>
            <thead>
              <tr className='text-left'>
                <th className=' border-b border-gray-300 px-4 py-2 font-light text-md text-gray-500'>Employee ID</th>
                <th className=' border-b border-gray-300 px-4 py-2 font-light text-md text-gray-500'>Employee Name</th>
                <th className=' border-b border-gray-300 px-4 py-2 font-light text-md text-gray-500'>Department</th>
                <th className=' border-b border-gray-300 px-4 py-2 font-light text-md text-gray-500'>Designation</th>
                <th className=' border-b border-gray-300 px-4 py-2 font-light text-md text-gray-500'>Type</th>
                <th className=' border-b border-gray-300 px-4 py-2 font-light text-md text-gray-500'>Status</th>
                <th className=' border-b border-gray-300 px-4 py-2 font-light text-md text-gray-500'>Action</th>
                {/* Other columns if needed */}
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td className='border-b border-gray-300 px-4 py-2'>1483943</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Cody Miles</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Development</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Design Lead</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Office</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Permanet</td>
                    <td className='border-b border-gray-300 px-4 py-2'>4</td>
                    {/* Render other columns if needed */}
                  </tr>

                  <tr>
                    <td className='border-b border-gray-300 px-4 py-2'>1483943</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Cody Miles</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Development</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Design Lead</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Office</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Permanet</td>
                    <td className='border-b border-gray-300 px-4 py-2'>4</td>
                    {/* Render other columns if needed */}
                  </tr>

                  <tr>
                    <td className='border-b border-gray-300 px-4 py-2'>1483943</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Cody Miles</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Development</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Design Lead</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Office</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Permanet</td>
                    <td className='border-b border-gray-300 px-4 py-2'>4</td>
                    {/* Render other columns if needed */}
                  </tr>

                  <tr>
                    <td className='border-b border-gray-300 px-4 py-2'>1483943</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Cody Miles</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Development</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Design Lead</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Office</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Permanet</td>
                    <td className='border-b border-gray-300 px-4 py-2'>4</td>
                    {/* Render other columns if needed */}
                  </tr>

                  <tr>
                    <td className='border-b border-gray-300 px-4 py-2'>1483943</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Cody Miles</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Development</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Design Lead</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Office</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Permanet</td>
                    <td className='border-b border-gray-300 px-4 py-2'>4</td>
                    {/* Render other columns if needed */}
                  </tr>

                  <tr>
                    <td className='border-b border-gray-300 px-4 py-2'>1483943</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Cody Miles</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Development</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Design Lead</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Office</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Permanet</td>
                    <td className='border-b border-gray-300 px-4 py-2'>4</td>
                    {/* Render other columns if needed */}
                  </tr>

                  <tr>
                    <td className='border-b border-gray-300 px-4 py-2'>1483943</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Cody Miles</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Development</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Design Lead</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Office</td>
                    <td className='border-b border-gray-300 px-4 py-2'>Permanet</td>
                    <td className='border-b border-gray-300 px-4 py-2'>4</td>
                    {/* Render other columns if needed */}
                  </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default EmployeesTable