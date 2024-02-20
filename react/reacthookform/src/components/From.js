import {useForm} from 'react-hook-form'

function Form() {

    const {register, handleSubmit, formState: {errors}} = useForm() 
    const onSubmit = (data) => console.log(data)
    return (
      <div className="mainform">
        <h1>Form</h1>
  
        <form onSubmit={handleSubmit(onSubmit)}> 
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("userName",{required:"Please enter userame", })} />
          {errors.userName && <div style={{color:"red"}}>{errors.userName.message}</div>}
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email",{pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,required:"Enter valid e-mail"})} />
          {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password",{required:"Enter minimum 8 character",minLength:{value:8,message:"Enter minimum 8 character"}})} />
          {errors.password && <div style={{color:"red"}}>{errors.password.message}</div>}
          {/* <button>Submit</button> */}
          <input type="submit" className='submit'/>
        </form>
      </div>
    );
  };

  export default Form;

 
  