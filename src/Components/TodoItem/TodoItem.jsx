import React from 'react';
import Profile from "../../Assets/img/Profile.png" 
import Frame22 from "../../Assets/img/Frame22.png" 
import { Context } from '../../Context/TokenContext';
const TodoItem = ({todo,onDelete}) => {
  const ctx=React.useContext(Context)
  console.log(todo);
  return <div className='home__main'>
            <img className='rasm' src={Profile} alt="" />
            <div className='word'>
              <h3>{ctx.state.username}</h3>
              <p>{todo?.title}</p>
              <img className='word__img' src={Frame22} alt="" />
            <button onClick={()=>{onDelete(todo.id)}} className="del">Delet</button>
            </div>
            <hr />
          </div>
}

export default TodoItem;
