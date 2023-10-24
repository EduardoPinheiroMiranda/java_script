import { Route, Routes} from "react-router-dom";

import { Sales } from "../pages/Sales";
import { AccessPage } from "../pages/AccessPage";
import { RegisterSale } from "../pages/RegisterSale"


export function AppRouters(){
    return(
        <Routes>
            <Route path="/" element={<Sales/>}/>
            <Route path="/accesspage" element={<AccessPage/>}/>
            <Route path="/registersale" element={<RegisterSale/>}/>
        </Routes>
    )
}