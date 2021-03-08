import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import GoogleAdRu from "./Layout/RU/GoogleAdRu/GoogleAdRu";
import InstagramAdRu from "./Layout/RU/InstagramAdRu/InstagramAdRu";


function App() {

    let routes = (
        <Switch>

            <Route path={'/ru/google-campaign'} component={GoogleAdRu}/>
            <Route path={'/ru/instagram-campaign'} component={InstagramAdRu}/>
            <Redirect to={'/ru/instagram-campaign'}/>
        </Switch>
    )


  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default App;
