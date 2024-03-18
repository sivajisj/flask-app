import React from 'react'

const Form = ({userInp, onFormChange, onFormSubmit}) => {
    const handleChange= (e)=>{
        onFormChange(e.target.value)

    }

    const handleSubmit = (e)=>{
        console.log("done")
       e.preventDefault() 
       onFormSubmit()
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={userInp} name="" id="" required />
        <input type="submit" name="" id="" />
    </form>
    <p>{userInp}</p>
    </>
  )
}

export default Form