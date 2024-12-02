import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' fex shrink-0 h-full w-[300px] p-5 bg-violet-500 rounded-xl '>

            <div className='flex justify-between items-center'>
                <h3 className='text-sm bg-red-600 px-4 py-3 rounded '>
                    {data.category}
                </h3>
                <h4 className='text-sm'>
{data.taskDate}
                </h4>
            </div>
            <h2 className='mt-5 text-2xl font-xl font-semibold '>{data.taskTitle}</h2>
            <p className='text-sm mt-3 '> {data.taskDescription}</p>


        <div className='flex justify-between mt-4'>
            <button className=' bg-blue-600 py-1 px-2 text-sm'>Completed</button>
        </div>

        </div>
  )
}

export default CompleteTask
