import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AddPlant } from "../pages/AddPlant";
import { DescriptionPage } from "../pages/DescriptionPage";
import { EditPage } from "../pages/EditPage";
import { PlantPage } from "../pages/PlantPage";
import { SearchPage } from "../pages/SearchPage";


export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
            <Routes>
                <Route path="plants" element={ <PlantPage/> } ></Route>
                <Route path="desc/:id" element={ <DescriptionPage/> } ></Route>
                <Route path="edit/:id" element={ <EditPage/> } ></Route>
                <Route path="addPlant" element={ <AddPlant/> } ></Route>
                <Route path="search" element={ <SearchPage/> } ></Route>
                <Route path="/" element={ <Navigate to="/plants"/> } ></Route>
            </Routes>
            </div>
        </>
    )
    }

