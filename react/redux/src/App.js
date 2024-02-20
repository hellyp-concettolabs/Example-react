import './App.css';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';
function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>Book Store</h1>
      <BookContainer/>
    </div>
    </Provider>
  );
}

export default App;
