import React from 'react';
import useToken from '../../Hook/UseToken';
// import img from ".././Assets/img/twitter-logo.png"
import "../style.css"
const Login = () => {
  const [,setToken]=useToken()
  const handleSubmit=(evt)=>{
    evt.preventDefault();
    console.log(evt.target.elements.username.value);

    if(evt.target.elements.username.value && evt.target.elements.password.value){
      setToken({
        username:evt.target.elements.username.value,
        password:evt.target.elements.password.value
      })
    }
  }
  return (
    <div className='login'>
      <h1>Log in to Twitter</h1>
      <form className='login__form'  onSubmit={handleSubmit}>
        <div>
          <input className='username' type="text" name="username" placeholder='username'/>
        </div>
        <div>
          <input className='password' type="password" name="password" placeholder='password'/>
        </div>
        <button className='button' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Login;
