import React, { useState } from 'react'

const TodoList = () => {

    const [TodoList, setTodoList] = useState("")
    
    const [item, setItem] = useState([])

    const itemEvents = (e) => {
        setTodoList(e.target.value)

    };

    const listofItem=() =>{
        setItem((oldItems) => {
            return [...oldItems, TodoList]
        })
        setTodoList('');

    }

    const deleteItem=(id) =>{
        setItem((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    };
  return (
    <div className='container-fluid container-bg bg-secondary-subtle'>
        <div className='col-md-4 mx-auto py-5'>
            <div className='card '>
                <div className='card-body'>
                    <div className='bg-warning'><h1 className='text-center fw-bold'>Todo List</h1><hr /></div>
                    <br />
                    <div className='d-flex mb-3' >
                    <input type="text" className='form-control' placeholder='Enter a item....' 
                    value={TodoList}
                    onChange={itemEvents}  />
                    <button className='btn btn-success mx-2' onClick={listofItem}>Add</button>
                    </div>

                    <ol>
                        {
                            item.map((itemval,index) => {
                                return <>
                                <div className='d-flex'>
                                     <li className='fw-bold mb-3'>{itemval}</li>
                                     <button className='btn btn-danger delete-btn mb-3' onClick={ () =>{
                                        deleteItem(index)
                                     }}><i className="fa-solid fa-delete-left"></i></button>
                                </div>
                                </>
                            })
                        }
                       
                    </ol>
                    

                </div>

            </div>

        </div>
    </div>
  )
}

export default TodoList