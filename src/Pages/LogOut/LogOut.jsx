import React from 'react';
import useToken from '../../Hook/UseToken';

const LogOut = () => {
  const [,setToken]=useToken()
  return (
    <div className='home'>
      <h2>Tweet</h2>
      <button onClick={()=>setToken(false)}>Tweet</button>
    </div>
  );
}

export default LogOut;
