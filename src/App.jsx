import { BrowserRouter } from "react-router-dom";
import { PlantProvider } from "./context/PlantProvider";
import { AppRouter } from "./routes/AppRouter";


const App = () => {
    return (
        <>
        <PlantProvider>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
        </PlantProvider>
        </>

    )
}

export default App
