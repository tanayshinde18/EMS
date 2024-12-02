import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    
const [userData,setUserData]= useContext(AuthContext)



  return (
    <div id='alltask' className=' h-60 bg-[#1c1c1c] p-5 mt-5 rounded    ' >

<div className='bg-transparent py-2 px-4 flex justify-between items-center rounded mb-3'>

<h2 className='w-1/5 text-purple-500 font-bold text-center'>Employee Name</h2>
<h3  className='w-1/5 text-yellow-500  text-center font-bold ' >New Task</h3>
<h4 className='w-1/5 text-blue-500 text-center font-bold' >Active</h4>
<h5 className='w-1/5 text-green-500 font-bold text-center'>Completed </h5>
<h5 className='w-1/5 text-red-500 text-center font-bold'>Failed</h5>
</div>


<div id='emptl' className=' h-[80%] overflow-auto'>

{userData.map(function(elem ,idx){

return <div key={idx} className= '  bg-tansparent border-2 border-cyan-400 py-2 px-4 flex justify-between  item-center rounded mb-3 '>

<h2 className='w-1/5 text-teal-500 text-center  font-semibold'>{elem.firstName}
</h2>
<h3  className='w-1/5 text-teal-500 text-center font-semibold' >{elem.taskCounts.newTask} </h3>
<h4 className='w-1/5 text-teal-500 text-center font-semibold' >{elem.taskCounts.active}
</h4>
<h5 className='w-1/5 text-teal-500 text-center font-semibold'>
{elem.taskCounts.completed}
</h5>
<h5 className='w-1/5 text-teal-500 text-center font-semibold'>
{elem.taskCounts.failed}
</h5>
</div>

})}


</div>





     
      
    </div>
  )
}

export default AllTask
 