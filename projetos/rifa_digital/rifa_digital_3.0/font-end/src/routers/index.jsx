import { BrowserRouter } from "react-router-dom";

import { AppRouters } from "./app.routers";

export function Routers(){
    return(
        <BrowserRouter>
            <AppRouters/>
        </BrowserRouter>
    )
}