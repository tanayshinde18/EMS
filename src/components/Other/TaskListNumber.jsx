import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen m'>
      <div className=' py-6 px-9 rounded-xl p-10 h-40 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className=' text-2xl font-medium'>New Task</h3>

      </div>

      <div className=' py-6 px-9 rounded-xl p-10 h-40 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className=' text-2xl font-medium'>Completed Task</h3>

      </div>

      <div className=' py-6 px-9 rounded-xl p-10 h-40 w-[45%] bg-purple-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className=' text-2xl font-medium'>Active Task</h3>

      </div>

      <div className=' py-6 px-9 rounded-xl p-10 h-40 w-[45%] bg-red-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className=' text-2xl font-medium'>Failed Task</h3>

      </div>
    </div>
  )
}

export default TaskListNumber
