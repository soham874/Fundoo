import './App.css';

import RegistrationForm from './Components/Registration/registration'
import Login from './Components/Login/login'
import Forgot from './Components/Forgot-password/forgot'
import ResetPassword from './Components/Reset-Password/ResetPassword'
import Dashboard from './Components/Dashboard/Dashboard'
import Note from './Components/Note-Template/Note'
import { Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            
                <Route exact path="/" component={Login} />
                <Route path="/registration" component={RegistrationForm} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={Forgot} />
                <Route path="*/resetpassword" component={ResetPassword} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/testing" component={Note} />       
            
        </div>
    );
}

export default App
