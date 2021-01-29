import './App.css';

import RegistrationForm from './Components/Registration/registration'
import Login from './Components/Login/login'
import Forgot from './Components/Forgot-password/forgot'
import ResetPassword from './Components/Reset-Password/ResetPassword'
import Dashboard from './Components/Dashboard/Dashboard'
import Note from './Components/Note-Template/Note'
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                <Redirect path="/" exact to="/login" />
                <Route path="/registration" component={RegistrationForm} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={Forgot} />
                <Route path="/resetpassword/:id" component={ResetPassword} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <Route path="/testing" component={Note} />
                </Switch>
            </Router>
        </div>
    );
}

export default App
