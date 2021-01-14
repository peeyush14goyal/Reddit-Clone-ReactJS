import "./App.css";
import { Provider } from "react-redux";
import Home from "./components/Home";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SubRedditPage from "./components/Subreddit/Page";
import { subreddits } from "./mock_data/mock_data";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/reactjs"
            render={() => <SubRedditPage subreddit={subreddits[0]} />}
          />
          <Route
            path="/angularjs"
            render={() => <SubRedditPage subreddit={subreddits[1]} />}
          />
          <Route
            path="/fun"
            render={() => <SubRedditPage subreddit={subreddits[2]} />}
          />
          <Route
            path="/happy"
            render={() => <SubRedditPage subreddit={subreddits[3]} />}
          />
          <Route
            path="/when"
            render={() => <SubRedditPage subreddit={subreddits[4]} />}
          />
          <Route
            path="/who"
            render={() => <SubRedditPage subreddit={subreddits[5]} />}
          />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
