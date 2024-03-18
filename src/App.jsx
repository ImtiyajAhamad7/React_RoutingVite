// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

import Login from './component/login';
import About from './component/About';
import Ticket from './component/Ticket';
import NavBar from './component/NavBar';
import UseEffectEx from './component/UseEffectEx';
import UseRef from './component/UseRef';
import Card from './component/Card';
import { useContext } from 'react';
import ModesContext from './component/context/ModesContext';

export default function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleLogin = () => {
    //     setIsLoggedIn(true);
    // };

    // const handleLogout = () => {
    //     setUsername('');
    //     setPassword('');
    //     setIsLoggedIn(false);
    // };

    const drs = useContext(ModesContext);

    return (
        <div>
         
            <Router> {/* Wrap your Routes with the Router component */}
                <NavBar />
               
                
                <Routes>
                    <Route path="/login" element={<Login  backgroundC = {drs.Bcolor} color = {drs.color}/>} />
                    <Route path="/about" element={<About name='imtiyaj' objective="This props is passed by App.js" backgroundC = {drs.Bcolor} color = {drs.color}/>} />
                    <Route path="/ticket" element={<Ticket backgroundC = {drs.Bcolor} color = {drs.color} />} />
                    <Route path="/UseEffectEx" element={<UseEffectEx backgroundC = {drs.Bcolor} color = {drs.color} />} />
                    <Route path="/UseRef" element={<UseRef backgroundC = {drs.Bcolor} color = {drs.color} />} />
                    <Route path="/Card" element={<Card backgroundC = {drs.Bcolor} color = {drs.color}/>} />
                </Routes>
            </Router>

            
        </div>
    );
}


