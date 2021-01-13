import "./App.css";
import { Provider } from "react-redux";
import Home from "./components/Home";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" render={() => <Home />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
