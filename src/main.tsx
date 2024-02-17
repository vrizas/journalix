import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider, ThemeConfig } from "antd";

const themeConfig: ThemeConfig = {
    components: {
        Layout: {
            headerBg: "#ffffff",
            headerColor: "#191919",
            bodyBg: "#ffffff",
        },
    },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ConfigProvider theme={themeConfig}>
            <App />
        </ConfigProvider>
    </React.StrictMode>
);
