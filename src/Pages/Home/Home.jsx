import React from 'react';
import { useState } from 'react';
import Group from "../../Assets/img/Group.png";
import Profile from "../../Assets/img/Profile.png";
import image from "../../Assets/img/Frame29.png";
import Frame22 from '../../Assets/img/Frame22.png';
import image8 from '../../Assets/img/image8.png';
import { Context } from "../../Context/TokenContext";
import { NavLink } from 'react-router-dom';
import TodoItem from '../../Components/TodoItem/TodoItem';
import { getTodosLocal, setTodosLocal } from '../../Components/Utils/localstrage';
// import "../style.scss"
const Home = () => {
  const ctx = React.useContext(Context)
  console.log(ctx.state.username);
  const [todos, setTodos] = useState(getTodosLocal())
  const addTodo = (event) => {
    // event.prevendDefault()
    let lastEl=todos[todos.length-1]|| {id:0}
    let todoInputEl = document.querySelector("#todo-input")
    if (!todoInputEl.value == "") {
      const todo = {
        id:lastEl.id+1,
        title: todoInputEl.value,
      }
      setTodos(state => {
        const newTodos = [...state, todo]
        setTodosLocal(newTodos)
        return newTodos
      })
    } else {
      alert("yozing aka")
    }
    todoInputEl.value = " "
  }
  const hendelete = (id)=> {
    console.log(id);
    setTodos(state=>{
        const newState=state.filter(item=>item.id!=id)
        setTodosLocal(newState)
        return newState
    })
}

  return (
    <div className='home'>
      <div className='home__header'>
        <h2>Home</h2>
        <img className='Group' src={Group} alt="" />
      </div>
      <hr />
      <div className='home__heror'>
        <img className='profile' src={Profile} alt="" />
        <form onSubmit={addTodo}>
          <input id='todo-input' type="text" placeholder='What’s happening' />
        </form>
      </div>
      <div className='home__section'>
        <img className='imgCard' src={image} alt="" />
        <NavLink className="button" to="/LogOut">Tweet</NavLink>
      </div>
      <hr />
      <br />
      {
        todos.map((item, index) => {
          return <TodoItem todo={item} onDelete={hendelete} key={index} />
        })
      }
      <div className='home__main'>
        <img className='rasm' src={Profile} alt="" />
        <div className='word'>
          <h3>Designsta</h3>
          <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
          <img className='word__img' src={Frame22} alt="" />
        </div>
      </div>
      <div className='home__main'>
        <img className='rasm' src={Profile} alt="" />
        <div className='word'>
          <h3>Designsta</h3>
          <p>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
          <img className='word__img' src={Frame22} alt="" />
        </div>
      </div>
      <div className='home__main'>
        <img className='rasm' src={Profile} alt="" />
        <div className='word'>
          <h3>Обетда.....</h3>
          <p>Кечиринглар</p>
          <img className='ovqat' src={image8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
