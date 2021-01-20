import './App.css';

import RegistrationForm from './Components/Registration/registration'
import Login from './Components/Login/login'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={RegistrationForm} />
                <Route path="/registration" component={RegistrationForm} />
                <Route path="/login" component={Login} />
            </Router>
        </div>
    );
}

export default App
