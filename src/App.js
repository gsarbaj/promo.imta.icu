import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import MainRu from "./Layout/RU/MainPageRU/MainPageRu";


function App() {

    let routes = (
        <Switch>
            <Route path={'/google-campaign'} component={MainRu}/>
            <Redirect to={'/google-campaign'}/>
        </Switch>
    )


  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default App;
