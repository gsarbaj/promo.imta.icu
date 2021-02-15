import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import GoogleAdRu from "./Layout/RU/MainPageRU/MainPageRu";


function App() {

    let routes = (
        <Switch>
            <Route path={'/'} component={GoogleAdRu}/>
            <Route path={'/ru/google-campaign'} component={GoogleAdRu}/>
            <Redirect to={'/'}/>
        </Switch>
    )


  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default App;
