import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee,deleteEmployee}) => {
    const navigate=useNavigate();
    const editEmployee= (e,id)=>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }
  return (
    <tr key={employee.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'> 
    <div className='text-sm text-blue-500 text-center'>{employee.sprintTitle}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'> 
    <div className='text-sm text-blue-500 text-center'>{employee.sprintObjectives}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'> 
    <div className='text-sm text-blue-500 text-center'>{employee.assignedUsers}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'> 
    <div className='text-sm text-blue-500 text-center'>{employee.sprintBacklog}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'> 
    <div className='text-sm text-blue-500 text-center'>{employee.estimatedEffort}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'> 
    <div className='text-sm text-blue-500 text-center'>{employee.notes}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'> 
    <div className='text-sm text-blue-500 text-center'>{employee.sprintStartDate}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'> 
    <div className='text-sm text-blue-500 text-center'>{employee.sprintEndDate}</div>
    </td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
        <a onClick={(e,id)=> editEmployee(e,employee.id)} className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit</a>
        <a onClick={(e,id)=> deleteEmployee(e,employee.id)} className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Delete</a>
    </td>
</tr>
  )
}

export default Employee