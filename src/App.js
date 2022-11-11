import { Redirect, Route, Switch } from 'react-router-dom'
import HomePage from "./pages/homePage"
import AppLayout from "./layouts/appLayout"
import UsersLayout from "./layouts/usersLayout"

function App() {
  return (
    <AppLayout>
        <Switch>
            <Route path="/users/:userId?/:type?" component={ UsersLayout } />
            <Route path="/" exact component={ HomePage }/>
            <Redirect to="/" />
        </Switch>
    </AppLayout>
  );
}

export default App;
