import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/home'
import { New } from '../pages/New'
import { Details} from '../pages/Details'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/details" element={<Details/>}/>

        </Routes>
    )
} 