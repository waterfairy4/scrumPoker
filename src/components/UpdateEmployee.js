import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const {id} = useParams();
    const navigate=useNavigate();
    const [employee, setEmployee] = useState({
        id:id,
        sprintTitle:"",
        sprintObjectives:"",
        assignedUsers:"",
        sprintBacklog:"",
        estimatedEffort:"",
        notes:"",
        sprintStartDate:"",
        sprintEndDate:"",
    });

    const handleChange=(e)=>{
        const value=e.target.value;
        setEmployee({...employee,[e.target.name]: value});
      };
      useEffect(() => {
        const fetchData= async()=>{
            try {
               const response= await EmployeeService.getEmployeeById(id);
               setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
        }
       fetchData();
      }, [])
      
    const updateEmployee=(e)=>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response)=>{
           navigate("/employeeList");
        })
        .catch((error)=>{
            console.log(error);
        })
    };
  return (
    <div className='flex max-w-2xl mx-auto shadow border my-14 border-blue-950 justify-center'>
<div className='px-8 py-8'>
<div className='flex justify-center px-0 font-medium text-xl tracking-wider'>
<h1>Update Sprint</h1> </div>

<div className='item-center justify-center h-14 w-full my-4'>
    <label className='block text-purple-800 text-lg font-normal text-center'>Sprint Title</label>
    <input type='text' name='sprintTitle' value={employee.sprintTitle} onChange={(e)=> handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
</div>

<div className='item-center justify-center h-14 w-full my-4'>
    <label className='block text-purple-800 text-lg font-normal text-center'>Sprint Objectives</label>
    <input type='text' name='sprintObjectives'value={employee.sprintObjectives} onChange={(e)=> handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
</div>

<div className='item-center justify-center h-14 w-full my-4'>
    <label className='block text-purple-800 text-lg font-normal text-center'>Assigned Users</label>
    <input type='text' name='assignedUsers' value={employee.assignedUsers} onChange={(e)=> handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
</div>

<div className='item-center justify-center h-14 w-full my-4'>
    <label className='block text-purple-800 text-lg font-normal text-center'>Sprint Backlog</label>
    <input type='text' name='sprintBacklog' value={employee.sprintBacklog} onChange={(e)=> handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
</div>

<div className='item-center justify-center h-14 w-full my-4'>
    <label className='block text-purple-800 text-lg font-normal text-center'>Estimated Effort</label>
    <input type='text' name='estimatedEffort' value={employee.estimatedEffort} onChange={(e)=> handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
</div>

<div className='item-center justify-center h-14 w-full my-4'>
    <label className='block text-purple-800 text-lg font-normal text-center'>Notes</label>
    <input type='text' name='notes' value={employee.notes} onChange={(e)=> handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
</div>

<div className='item-center justify-center h-14 w-full my-4'>
    <label className='block text-purple-800 text-lg font-normal text-center'>Sprint Start Date</label>
    <input type='text' name='sprintStartDate' value={employee.sprintStartDate} onChange={(e)=> handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
</div>

<div className='item-center justify-center h-14 w-full my-4'>
    <label className='block text-purple-800 text-lg font-normal text-center'>Sprint End Date</label>
    <input type='text' name='sprintEndDate' value={employee.sprintEndDate} onChange={(e)=> handleChange(e)} className='h-9 w-80 border-pink-800 border-2 mt-2 px-2 py-2 text-center'></input>
</div>


<div className='items-center justify-evenly flex h-14 w-full my-4 pt-4'>
<button onClick={updateEmployee} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6'>Update</button>
<button onClick={()=> navigate("/employeeList")} className='rounded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-6'>Cancel</button>
</div>

</div>
    </div>
  )
}

export default UpdateEmployee