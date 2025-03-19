import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Input from './components/input';
import Title from './components/title';
import TodoList from './components/TodoList';
import Button from './components/button';
import { saveToLocalstorage,getFromLocalstorage } from './utilis/storage';
import React,{useState,useEffect} from 'react';
import Info from './components/Info';
import { useContext } from 'react';
import MyContext from './components/myContext';
function App() {
  const {user,setUser}=useContext(MyContext)
  const [inputValue,setinputValue]=useState('')
  const [todos,setTodos]=useState(getFromLocalstorage('todos') || [])
  useEffect(()=>{
    saveToLocalstorage('todos',todos)
    console.log('todos',todos)
  }, [todos])
  const handelAdd =()=>{
    setTodos([...todos,inputValue])
    // saveToLocalstorage('todos',todos)
    // console.log(todos) (رح يطبع القيمة القديمة )
    //______
  }
  return (
    <div className="App">
      <ButtonAppBar/>
      <h1>hi {user ? user:'Gust'}</h1>
      <input type='text'
      placeholder='inter user'
      onChange={(event)=>{setUser(event.target.value)}}
      />
      {/* <Title text="this is react app"/>
      <Input value={inputValue} onChange={setinputValue}/>
      <Button text={'add to do'} onClick= {handelAdd} />
      <TodoList todos={todos}/> */}
      <Info/>
    </div>
  );
}

export default App;
