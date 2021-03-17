import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Cart />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
