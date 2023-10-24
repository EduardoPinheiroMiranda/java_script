import { Route, Routes} from "react-router-dom";

import { AccessPage } from "../pages/AccessPage"

export function AppRouters(){
    return(
        <Routes>
            <Route path="/accesspage" element={<AccessPage/>}/>
        </Routes>
    )
}