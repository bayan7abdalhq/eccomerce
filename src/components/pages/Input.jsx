import React from 'react'

export default function Input({ type="text",id,name,title,value,onChange,errors,onBlur,touched }) {
  return (
    <>
    <div className="form-outline mb-4">
<label className="form-label" htmlFor={id}>{title}</label>
<input type={type} name={name}  value={value} className="form-control" onChange={onChange} id={id} onBlur={onBlur} placeholder={"Enter "+`${name}`} />
{ touched[name] && errors[name]&&<p className='text text-danger'>{errors[name]}</p>}
</div>
    </>
  )
}

