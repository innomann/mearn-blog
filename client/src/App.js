import { BrowserRouter, Route, Switch} from "react-router-dom";
import SignUpPage from "./containers/auth/SignUpPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/">
          <h1> thisApp.js page</h1>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
