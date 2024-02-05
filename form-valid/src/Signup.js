import { useState, createContext } from "react";
import Content from "./Content";
import './Signup.css'

export const DataContext= createContext();
function Validation() {
    const [values,setValues]=useState({
      name:"",
      email:"",
      phonenumber:"",
      password:""
    })
    const [errors, setError]=useState({})
    function handleChange (e) {
        setValues({...values,[e.target.name]:e.target.values})
    }
    
    
    function handleSubmit (e) {
        e.preventDefault();
        setError(Content(values));
    }
    return (
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <div className="login">
            <input type="text" name="name" placeholder="Name"  value={values.name} onChange={handleChange}/>
            {errors.name && <p style={{color:"red",fontSize:"15px",}}>{errors.name}</p>}
            <div className="email"> 
            <input type="text" name="email" placeholder="Email" value={values.email} onChange={handleChange}></input>
            {errors.email && <p style={{color:"red",fontSize:"15px"}}>{errors.email}</p>}
           </div>
           <div className="phonenumber">
           <input type="text" name="phonenumber" placeholder="Phone Number"value={values.phonenumber}onChange={handleChange} ></input>
           {errors.phonenumber && <p style={{color:"red",fontSize:"15px"}}>{errors.phonenumber}</p>}
           </div>
           <div className="password">  
           <input type="text" name="password" placeholder="Password" value={values.password} onChange={handleChange}></input>
           {errors.password && <p style={{color:"red",fontSize:"15px"}}>{errors.password}</p>}<br></br>
           <button style={{fontSize:"20px"}}>Submit</button>
          </div>
        </div>
      </form>
    </div>
    );
  }
  
  export default Validation;