import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
         <Switch>
          {/* checkout pack route */}
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/">
                <Home />
            </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
