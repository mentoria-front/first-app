import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Counter from './components/Conter/Conter';
import Users from './components/Users/Users';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Counter />} />
                <Route path='/users' element={<Users />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;