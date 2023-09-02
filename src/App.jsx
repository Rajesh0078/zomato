import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter } from "react-router-dom"
import Allroutes from "./components/Allroutes"
export const store = createContext()



function App({ children }) {
    const [mealName, setMealName] = useState(null)
    const contextValues = {
        mealName, setMealName
    }
    return (
        <store.Provider value={contextValues}>
            <BrowserRouter>
                <Allroutes />
            </BrowserRouter>
        </store.Provider>
    );
}

export default App;
