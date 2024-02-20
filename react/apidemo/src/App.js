import ContactList from './ContactList';
import ToDoListApp from './ToDoListApp';
import Axiosget from './Axiosget';
import Axiospost from './Axiospost';
import FetchApi from './FetchApi';


function App() {
  return (
    <div>
      <hr/>
      <h1>JS Fetch() method:</h1>
      <FetchApi/>
      <hr/>
      <h1>Axios method Post:</h1>
      <Axiospost/>
      <hr/>
       <h1>Axios method Get:</h1>
      <Axiosget/>
    <hr/>
      <h1>ToDo list app</h1>
      <ToDoListApp/>
      <hr/>
      <ContactList/>
      <hr/>
      <h1>Login page</h1>

    </div>
  );
}

export default App;
