import {Route, Switch} from "react-router-dom";
import Main from "pages/main/Main";
import Comments from "pages/comments/Comments";

function App() {
  return (
      <Switch>
        <Route path={['/', '/:index']} exact={true} render={() => <Main />} />
        <Route path="/item/:id" exact={true} render={() => <Comments />} />
      </Switch>
  );
}

export default App;
