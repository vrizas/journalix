import ArticleDetailComponent from "@presentation/view/article-detail/ArticleDetailComponent";
import Error404Component from "@presentation/view/error/404Component";
import HomeComponent from "@presentation/view/home/HomeComponent";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" Component={HomeComponent} />
            <Route path="/news/:id" Component={ArticleDetailComponent} />
            <Route path="*" Component={Error404Component} />
        </Routes>
    );
}

export default App;
