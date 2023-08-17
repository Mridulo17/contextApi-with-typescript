import AddToDo from "./components/AddToDo"
import Navbar from "./components/Navbar"
import Practise from "./components/Practise"
import Todos from "./components/Todos"

function App() {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddToDo />
      <Todos />
      <Practise />
    </main>
  )
}

export default App