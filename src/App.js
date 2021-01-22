import './App.css';

import RegistrationForm from './Components/Registration/registration'
import Login from './Components/Login/login'
import Reset from './Components/Reset/reset'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/registration" component={RegistrationForm} />
                <Route path="/login" component={Login} />
                <Route path="/reset" component={Reset} />
            </Router>
        </div>
    );
}

export default App
