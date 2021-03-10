import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import GoogleAdRu from "./Layout/RU/GoogleAdRu/GoogleAdRu";
import InstagramAdRu from "./Layout/RU/InstagramAdRu/InstagramAdRu";
import RusAuditoryAdRu from "./Layout/RU/RusAuditoryAdRu/RusAuditoryAdRu";
import CommonAdRu from "./Layout/RU/CommonAdRu/CommonAdRu";


function App() {

    let routes = (
        <Switch>

            <Route path={'/ru/google-campaign'} component={GoogleAdRu}/>
            <Route path={'/ru/instagram-campaign'} component={InstagramAdRu}/>
            <Route path={'/ru/ru-audience-campaign'} component={RusAuditoryAdRu}/>
            <Route path={'/ru/common-campaign'} component={CommonAdRu}/>
            <Redirect to={'/ru/common-campaign'}/>
        </Switch>
    )


  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default App;
