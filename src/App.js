import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ReposesList from "./components/reposesList/reposesList";
import Repos from "./components/repos/repos";
import './app.css';
import {ApolloProvider} from "@apollo/client";
import Client from './apolo/apoloClient.js'

function App() {
    return (
        <ApolloProvider client={Client}>
            <BrowserRouter>
                <div className='container'>
                    <Switch>
                        <Route path='/' exact component={ReposesList}/>
                        <Route path='/repos/:username/:reposname' component={Repos}/>
                        <Redirect to='/'/>
                    </Switch>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
