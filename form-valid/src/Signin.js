import React from "react";
import { useForm } from "react-hook-form";
import './Signin.css';

function Reacthook(){
    const {register, handleSubmit, formState:{errors}}=useForm();
    const onSubmit= data => console.log(data);
    return(
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" {...register("name",{required: true,
            pattern:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            })}/>
            {errors.name?.type ==='required' && <span>This field is required</span>}
            {errors.name?.type === 'pattern' && <span> Invalid name</span>}<br></br>
            <input placeholder="Email ID"{...register("email",{required: true,
            pattern:/\S+@\S+\.\S+/
            })}/>
            {errors.email?.type ==='required' && <span>This field is required</span>}
            {errors.email?.type === 'pattern' && <span> Invalid email</span>}<br></br>
            <input placeholder="Phone Number" {...register("phonenumber",{required: true,
            pattern:"(?=^.{5,}$)((?=.*\d)|(?=.*\W))(?=.*[A-Z](?=.*[a-z]).*$"
            })}/>
            {errors.phonenumber?.type ==='required' && <span>This field is required</span>}
            {errors.phonenumber?.type === 'pattern' && <span> Invalid phonenumber</span>}<br></br>
            <input placeholder="Password" {...register("password",{required: true,
            pattern:"^[a-zA-Z0-9+_.-]+[a-zA-Z0-9.-]+$",
            })}/>
            {errors.password?.type ==='required' && <span>This field is required</span>}
            {errors.password?.type === 'pattern' && <span> Invalid password</span>}<br></br>
            <input placeholder="Confirm Password" {...register("confirmpassword",{required: true,
            pattern:"^[a-zA-Z0-9+_.-]+[a-zA-Z0-9.-]+$",
            })}/>
            {errors.confirmpassword?.type ==='required' && <span>This field is required</span>}
            {errors.confirmpassword?.type === 'pattern' && <span> Invalid Confirmpassword</span>}<br></br>
            <label>GENDER</label><br></br>
            <input type="radio"{...register("radio",{required: true,
            })}/>Male<br></br>
            <input type="radio"{...register("radio",{required:true})} />Female<br></br>
            {errors.radio?.type ==='required' && <span>This field should be selected</span>}<br></br>
            <select>
                <label>LIST</label>
                <option></option>
                <option>Courses</option>
                <option>Python</option>
                <option>Javascript</option>
                <option>React</option>
            </select><br></br>
            <input type="checkbox"{...register("checkbox",{required:true})} />Agree<br></br>
            {errors.checkbox?.type ==='required' && <span>This field should be selected</span>}<br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Reacthook;