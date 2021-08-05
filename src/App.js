import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Player from './components/Player'

function App() {
  return (
    <div className="App">
       <Player/>
    </div>
  );
}

export default App;
