import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function App() {

    const [ value, setValue ] = useState(0); 
    return (
        <div className="App">
            <header className="App-header">
                <div class="speed">
                    
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code> src / App.js </code> and save to reload. </p>
                <a className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Learn React
                    </a>
                    <div class="slider">
                        <RangeSlider value={value} onChange={changeEvent => setValue(changeEvent.target.value)}/>
                    </div>
            </header >
        </div>      
    );
}

export default App
