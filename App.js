import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    }, 
    onSubmit: (values) => {
      alert("Login Successful");
    },
    
    validate: values => {
      let errors = {};
      if (!values.name) errors.name = 'Field Required';
      if (!values.email) {
        errors.email = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) errors.password = 'Field Required';
        return errors;
    }
  });
  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. 
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
          <input 
            id="nameField"
            name="name" 
            type="text" 
            onChange={formik.handleChange} 
            value={formik.values.name}/>
            {formik.errors.name ? <div id="nameError" style={{color:'orange'}}> 
            {formik.errors.name}</div>: null}
        <div>Email</div>
          <input 
            id="emailFeild" 
            name="email" 
            type="text" 
            onChange={formik.handleChange} 
            value={formik.values.email}/>
            {formik.errors.email ? <div id="emailError" style={{color: 'orange'}}> 
            {formik.errors.email}</div>: null}
        <div>Password</div>
          <input 
          id="pswField" 
          name="password" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.password}/>
          {formik.errors.password ? <div id="pswError" style={{color: 'orange'}}> 
          {formik.errors.password}</div>: null}
        <br />
        <button id="submitBtn" type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
