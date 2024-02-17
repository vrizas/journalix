import Error404Component from "@presentation/view/error/404-component";
import HomeComponent from "@presentation/view/home/HomeComponent";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" Component={HomeComponent} />
            <Route path="*" Component={Error404Component} />
        </Routes>
    );
}

export default App;
