import "./App.scss";
import Nav from "./component/Navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/news">news</Route>
          <Route path="/contact">contact</Route>
          <Route path="/about">about</Route>
          <Route path="/login"><Login/></Route>
          <Route path="/register"><Register/></Route>
          <Route path="*">404 not found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
