import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux' 
import { addTodo, deleteTodo, removeAllTodo} from '../actions';
import "./todo.css"

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state)=> state.todoReducers.list);
    const dispatch = useDispatch();
    
    return (
        <>
            <div class="w-100 container">
                <span class="h1 d-flex justify-content-center">TODO APP BY &nbsp;<a href='https://ashish-maharana.github.io/'>@ASHISH MAHARANA</a></span>
            </div>
            <div className='main-div'>
                <div className='child-div'>
                    <div class="container">
                        <div class="d-flex justify-content-between">
                            <div>
                                <span className='float-left'>Add Your Task Here ✌</span>
                            </div>
                            <div>
                                <button className='btn btn-lg btn-danger'
                                    onClick={() => dispatch(removeAllTodo())}
                                ><span>Remove All</span></button>
                            </div>
                        </div>
                    </div>

                    <div className='container addItems'>
                        <input type="text" placeholder="✍ Add Your Tasks..." 
                            value={inputData} 
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i className='fa fa-plus add-btn' 
                            onClick={() => 
                                dispatch(addTodo(inputData), 
                                setInputData(''))
                            }
                        > </i>
                    </div>

                    <div className='container showItems'>
                        {
                            list.map((e) => {
                                return(
                                    <div className='eachItem' key={e.id}>
                                        <h3>{e.data}</h3>
                                        <div className='todo-btn'>
                                            <i className='far fa-trash-alt add-btn' title='Delete a Task'
                                                onClick={() => 
                                                    dispatch(deleteTodo(e.id))
                                                }
                                            > </i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Todo