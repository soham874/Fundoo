import './App.css';

import RegistrationForm from './Components/Registration/registration'
import Login from './Components/Login/login'
import Forgot from './Components/Forgot-password/forgot'
import ResetPassword from './Components/Reset-Password/ResetPassword'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/registration" component={RegistrationForm} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={Forgot} />
                <Route path="/resetpassword/:id" component={ResetPassword} />
            </Router>
        </div>
    );
}

export default App
