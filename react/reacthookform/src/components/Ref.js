import React from 'react'
import {useForm} from 'react-hook-form'

const Input = ({label,register,required})=>(
    <>
    <label>{label}</label>
    <input{...register(label,{required})}/>
    </>
)
const Select = React.forwardRef(({ onChange, onBlur, name, label},ref) => (
    <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
    </>
))
function Ref() {
  const {register, handleSubmit} = useForm()
  
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
    </div>
  )
}

export default Ref
