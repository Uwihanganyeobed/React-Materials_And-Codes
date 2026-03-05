import React, { useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreetoterm: false,
    gender: '',
  })

  const handlechange = (e) => {
    const value=e.target.value
    const name = e.target.name
    setFormData({
      ...formData, 
      [name]:value
    });
  }

  const handlesubmit = (e) => {

    e.preventDefault();
    console.log("form submitted", formData);
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>username</label>
        <input type="text"
          placeholder="enter your name"
          name="username"
          value={formData.username}
          onChange={handlechange} />

        <input type="email"
          placeholder="enter your email"
          name="email"
          value={formData.email}
          onChange={handlechange} />

        <input type="password"
          placeholder="enter password"
          name="password"
          value={formData.password}
          onChange={handlechange} />
        <label htmlFor="">
          <input type="checkbox"
            name="agreetoterm"
            value={formData.a}
            onChange={handlechange} />

          Agree  to terms and conditions


        </label>

        <label>gender</label>
        <select name="gender"value={formData.gender}
         onChange={handlechange}>
         <option value="">select gender</option>
         <option value="male">male</option>
         <option value ="female">female</option>

         </select>
         <button type="submit">submit</button>
         

      </form>
    </div>
  )

  return (
    <div>Login</div>
  )
}
