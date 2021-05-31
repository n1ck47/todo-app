import Header from "./Components/Header/Header";
import TaskList from "./Components/TaskList/TaskList";
import './App.css';
import {useSelector ,useDispatch} from 'react-redux';

function App() {

  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
