import { ReactNode, createContext, useContext, useState } from "react";

export type TodosPrividerProps = {
    children : ReactNode;
}
export type Todo = {
    id: string;
    task: string;
    completed:boolean;
    createdAt:Date;
}
export type TodosContext = {
    todos: Todo[];
    handleAddTodo:(task:string) => void; 
    toggleTodoAsCompleted:(id:string) => void;
    deleteTodo:(id:string) => void;
}
export const todosContext = createContext< TodosContext | null >(null);

export const TodosProvider = ({children}:TodosPrividerProps) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        return JSON.parse(localStorage.getItem('todos') || '[]');
    });

    const handleAddTodo = (task:string) => {
        setTodos((prev) => {
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        })
    }
    const toggleTodoAsCompleted = (id:string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if(todo.id === id) {
                    return {
                      ...todo,
                        completed:!todo.completed
                    }
                }
                return todo;
            })
            localStorage.setItem("todos", JSON.stringify(newTodos)); 
            return newTodos;
        })
    }
    const deleteTodo = (id:string) => {
        setTodos((prev) => {
            let newTodos = prev.filter((todoFilter) => todoFilter.id!== id);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        })
    }

    return <todosContext.Provider value={{ todos, handleAddTodo, toggleTodoAsCompleted, deleteTodo}}>
        {children}
    </todosContext.Provider>
    
}


// consumer
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer) {
        throw new Error('useTodos used outside of provider')
    }
    return todosConsumer;
}