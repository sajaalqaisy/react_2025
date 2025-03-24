import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/navBar';
import Input from './components/Input';
import Title from './components/Title';
import TodoList from './components/TodoList';
import Button from './components/Button';
import { saveToLocalstorage,getFromLocalstorage } from './utilis/storage';
import React,{useState,useEffect} from 'react';
import Info from './components/Info';
import { useContext } from 'react';
import MyContext from './components/myContext';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ResponsiveGrid from './components/cards';
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
   <BrowserRouter>
      <ButtonAppBar/>
      <Routes>
          <Route path='/info' element={<Info/>}/>
          <Route path='/' element={<ResponsiveGrid/>}/>
          </Routes>
   </BrowserRouter>
  );
}

export default App;
