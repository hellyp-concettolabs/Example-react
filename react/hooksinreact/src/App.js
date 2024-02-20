import { createContext, useState } from 'react';
import './App.css';
import FetchApi from './FetchApi';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import UseState from './UseState';
import Useeffect from './Useeffect';
import UseContext from './UseContext';
const data = createContext();
function App() {

  const [text,setText] = useState("Use of useContext : Passed value of parent component to last child component")
  return (
    <div>
      <h1>Using Hooks :</h1>
      <h2>useState:</h2>
      <UseState/>
      <h2>useEffect:</h2>
      <Useeffect/>
      <h2>useRef:</h2>
      <UseRef/>
      <h2>useContext:</h2>
      <data.Provider value={text}>
        <UseContext/>
      </data.Provider>
      <h2>useMemo:</h2>
      <UseMemo/>
      <h2>useCallback:</h2>
      <UseCallback/>
      <h2>JS Fetch() method:</h2>
      <FetchApi/>
    </div>
  );
}

export default App;
export {data};