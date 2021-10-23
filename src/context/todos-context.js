import React, {useState} from 'react';

//can only have one export default which means we can name it whatever we want
export const TodosContext = React.createContext(
    {
        todos: [],
        addTodo: () => {},
        deleteTodo: () => {},
        updateTodo: () => {}
    }
);


export const TodosContextProvider = (props) => {
    
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let oldTodos = todos;
        oldTodos.push(todo);
        setTodos(oldTodos); //called when form submitted
    }

    //deleteTodo
    const deleteTodo = (todoId) => {
        let oldTodos = todos;

        //find index location by the id property
        const todoIndex = todos.findIndex (
            (todo) => {
                return (todo.id == todoId)
            }
        );

        //delete one item from the todos using its location, splicing it
        if (todoIndex !== -1) {
            oldTodos.splice(todoIndex, 1);
            setTodos([...oldTodos]); //stored in the context so it is updated in global state
        }
    }

    //updateTodo
    const updateTodo = (todoId, isComplete) => {
        let oldTodos = todos;

        //find index location by the id property
        const todoIndex = todos.findIndex (
            (todo) => {
                return (todo.id == todoId)
            }
        );

        if (todoIndex !== -1) {
            //Update one item by index location in array
            oldTodos[todoIndex].isComplete = isComplete;

            //Update  our todos
            setTodos(oldTodos);
        }
    }

    return (
        <TodosContext.Provider value={{todos: todos, addTodo: addTodo, updateTodo: updateTodo, deleteTodo: deleteTodo}}>
            {props.children}
        </TodosContext.Provider>
    )

}