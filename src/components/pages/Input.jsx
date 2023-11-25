import React from 'react'

export default function Input({ type="text",id,name,title,value,onChange,errors,onBlur,touched }) {
  return (
    <>
    <div className="input-group mb-3">
    <label htmlFor={id}>{title}</label>
    <input type={type} name={name}  value={value} className="form-control" onChange={onChange} id={id} onBlur={onBlur}  />
    { touched[name] && errors[name]&&<p className='text text-danger'>{errors[name]}</p>}
    </div>
    </>
  )
}
