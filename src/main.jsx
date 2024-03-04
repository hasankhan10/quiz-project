import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Quiz from './Pages/Quiz.jsx'
import Result from './Pages/Result.jsx'


const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="quiz/:id" element={<Quiz />} />
                <Route path="result" element={<Result />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppRouter />
);
