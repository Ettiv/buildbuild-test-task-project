import {BrowserRouter, Route} from "react-router-dom";
import ReposesList from "./components/reposesList";
import './app.css';

function App() {
  return (
      <BrowserRouter>
          <div className='container'>
              <Route path='/' component={ReposesList}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
