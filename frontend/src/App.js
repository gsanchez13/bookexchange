import { Route, Link, Switch } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
