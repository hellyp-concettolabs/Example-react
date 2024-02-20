import './App.css';
import UseCallback from './UseCallback';
import UseContext from './UseContext';
import UseMemo from './UseMemo';
import UseRef from './UseRef';

function App() {
  return (
    <div>
      <h1>-------useMemo-------</h1>
      <p>useMemo hook memorizes the result and recomputes fatorial when number changes</p>
      <p>If useMemo is removed factorial function is being called on every render, which in turn updates the state using setTrigger, causing a re-render and creating an infinite loop.</p>
      <UseMemo/>
      <h1>-------useRef-------</h1>
      <p>Can used to access and maipulate DOM element directly</p>
      <UseRef/>
      <h1>-------useContext-------</h1>
      <p>used to avoid prop drilling</p>
      <UseContext/>
      <h1>-------useCallback and useEffect -------</h1>
      <p>useEffect is being used to call the addTask function when the component mounts, as indicated by the empty dependency array ([])</p>
      <p> addTask is memoized using useCallback with dependencies [inputValue, tasks] this ensures that the addTask function reference remains stable as long as its dependencies haven't changed, optimizing performance and preventing unnecessary re-renders.</p>
      <UseCallback/>
    </div>
  );
}

export default App;
