import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const{
    register,
    handleSubmit, 
    watch,
    formState:{errors, isSubmitting}
  }=useForm();

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name: </label>
          <input
            className={errors.firstName?'input-error':""}
           {...register('firstName',{
            required:true,
            minLength:{value:3, message:'Min value should be atleast 3'},
            maxLength:{value:6, message:'Max length shoult be atmost 6'}
          })}/>
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Middle Name:</label>
          <input 
          className={errors.middleName?'input-error':""}
          {...register('middleName')}/>
        </div>
        <div>
          <label>Last Name:</label>
          <input 
          className={errors.LastName?'input-error':""}
          {...register('LastName',{
            pattern: {
              value: /^[A-Za-z]+$/i,
              message:"Last name is not as per the rules"
            }
          })}/>
          {errors.LastName&&<p className='error-msg'>{errors.LastName.message}</p>}
        </div>
        <br />
        <input type='submit' disabled={isSubmitting}
        value={isSubmitting?"Submitting":"Submit"}
        />
      </form>
    </>
  )
}

export default App
