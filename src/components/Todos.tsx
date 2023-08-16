import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos"

function Todos() {

    const {todos, toggleTodoAsCompleted, deleteTodo} = useTodos();
    const [searchParams] = useSearchParams();
    let todosData = searchParams.get("todos");

    let filteredTodos = todos;

    if (todosData === "active") {
        filteredTodos = filteredTodos.filter((task) => !task.completed);
    }

    if (todosData === "completed") {
        filteredTodos = filteredTodos.filter((task) => task.completed);
    }

  return (
    <ul>
        {
            filteredTodos.map((todo )=> {
                return <li key={todo.id}>
                        <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)}/>
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

                        {
                            todo.completed && <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        }
                    </li>
            })
            
        }
    </ul>
  )
}

export default Todos