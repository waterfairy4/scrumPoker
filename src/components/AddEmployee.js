import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const AddEmployee = () => {
  const [employee, setEmployee] = useState({
      id:"",
      sprintTitle:"",
      sprintObjectives:"",
      assignedUsers:"",
      sprintBacklog:"",
      estimatedEffort:"",
      notes:"",
      sprintStartDate:"",
      sprintEndDate:"",
  });

 const navigate= useNavigate();

  const handleChange=(e)=>{
    const value=e.target.value;
    setEmployee({...employee,[e.target.name]: value});
  };
const saveEmployee =(e)=>{
  e.preventDefault();
  EmployeeService.saveEmployee(employee).then((response)=> {
  console.log(response);
  navigate("/employeeList");
  }).catch((error)=>{
    console.log(error);
  });
};
 const reset = (e) =>{
  e.preventDefault();
  setEmployee({
        id:"",
        sprintTitle:"",
        sprintObjectives:"",
        assignedUsers:"",
        sprintBacklog:"",
        estimatedEffort:"",
        notes:"",
        sprintStartDate:"",
        sprintEndDate:"",
  });
 }
  return (
    <div className='max-w-2xl mx-auto shadow border my-14 border-blue-950'>
<div className='px-8 py-8'>
<div className='flex justify-center px-0 font-medium text-xl tracking-wider'>
<h1>Add New Sprint</h1></div>

<div className='items-center justify-center flex flex-col h-14 w-full my-4'>
               <label className='block text-purple-800 text-lg font-normal text-center'>Sprint Title</label>
               <input type='text' name='sprintTitle' value={employee.sprintTitle} onChange={(e)=>handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
           </div>
          <div className='items-center justify-center flex flex-col h-14 w-full my-4'>
               <label className='block text-purple-800 text-lg font-normal text-center'>Sprint Objectives</label>
               <input type='text' name='sprintObjectives' value={employee.sprintObjectives} onChange={(e)=>handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
           </div>
           <div className='items-center justify-center flex flex-col h-14 w-full my-4'>
               <label className='block text-purple-800 text-lg font-normal text-center'>Assigned Users</label>
               <input type='text' name='assignedUsers' value={employee.assignedUsers} onChange={(e)=>handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
           </div>
           <div className='items-center justify-center flex flex-col h-14 w-full my-4'>
               <label className='block text-purple-800 text-lg font-normal text-center'>Sprint Backlog</label>
               <input type='text' name='sprintBacklog' value={employee.sprintBacklog} onChange={(e)=>handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
           </div>
           <div className='items-center justify-center flex flex-col h-14 w-full my-4'>
               <label className='block text-purple-800 text-lg font-normal text-center'>Estimated Effort</label>
               <input type='text' name='estimatedEffort' value={employee.estimatedEffort} onChange={(e)=>handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
           </div>
           <div className='items-center justify-center flex flex-col h-14 w-full my-4'>
               <label className='block text-purple-800 text-lg font-normal text-center'>Notes</label>
               <input type='text' name='notes' value={employee.notes} onChange={(e)=>handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
           </div>
           <div className='items-center justify-center flex flex-col h-14 w-full my-4'>
               <label id="selectedDate"  className='block text-purple-800 text-lg font-normal text-center'>Sprint Start Date</label>
               <input type='text' name='sprintStartDate' value={employee.sprintStartDate} onChange={(e)=>handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
           </div>
           <div className='items-center justify-center flex flex-col h-14 w-full my-4'>
               <label id="selectedDate" className='block text-purple-800 text-lg font-normal text-center'>Sprint End Date</label>
               <input type='text' name='sprintEndDate' value={employee.sprintEndDate} onChange={(e)=>handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
           </div>

<div className='items-center justify-evenly flex h-14 w-full my-4 pt-4'>
<button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6'>Save</button>
<button onClick={reset} className='rounded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-6'>Clear</button>
</div>
</div>
    </div>
  )
}

export default AddEmployee