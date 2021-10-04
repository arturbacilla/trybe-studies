import './App.css';

const listaDeTarefas = ['Tarefa1', 'Tarefa2', 'Tarefa3', 'Tarefa4'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ul>
        {
         listaDeTarefas.map(element =>  Task(element)) //O map é a função transformadora que usa a lógica do Task para converter o array em lis
        }
      </ul>
    </div>
  );
}

export default App;
