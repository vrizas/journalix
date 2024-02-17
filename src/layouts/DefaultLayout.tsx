import { Drawer, Layout } from "antd";
import LogoText from "../assets/logo-text.svg";
import LogoCircle from "../assets/logo-circle.svg";
import "./default-layout.css";
import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Header, Footer } = Layout;

const NavbarContent = () => {
    const location = useLocation();

    return (
        <>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
            </Link>
            <Link
                to="/trending"
                className={location.pathname === "/trending" ? "active" : ""}
            >
                Trending
            </Link>
            <Link
                to="local"
                className={location.pathname === "local" ? "active" : ""}
            >
                Local News
            </Link>
            <Link
                to="/world"
                className={location.pathname === "/world" ? "active" : ""}
            >
                World
            </Link>
            <Link
                to="/tech"
                className={location.pathname === "/tech" ? "active" : ""}
            >
                Tech
            </Link>
            <Link
                to="/works-n-career"
                className={
                    location.pathname === "/works-n-career" ? "active" : ""
                }
            >
                Works & Career
            </Link>
            <Link
                to="/life-n-arts"
                className={location.pathname === "/life-n-arts" ? "active" : ""}
            >
                Life & Arts
            </Link>
        </>
    );
};

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const [isDesktop, setIsDesktop] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onDesktopScreen = (media: MediaQueryList) => {
        if (media.matches) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    };

    const onShowDrawer = () => {
        setIsDrawerOpen(true);
    };

    const onCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 992px)");

        onDesktopScreen(media);

        media.addEventListener("change", function () {
            onDesktopScreen(media);
        });
    }, []);

    return (
        <Layout>
            <Header
                className="header"
                style={
                    location.pathname !== "/" && !isDesktop
                        ? {
                              backgroundColor: "#191919",
                          }
                        : {}
                }
            >
                {isDesktop ? (
                    <>
                        <img src={LogoText} alt="Logo" />
                        <nav className="header__navbar">
                            <NavbarContent />
                        </nav>
                    </>
                ) : (
                    <>
                        <img src={LogoCircle} alt="Logo" />
                        <button onClick={onShowDrawer}>
                            <MenuOutlined
                                style={{
                                    color: "white",
                                }}
                            />
                        </button>
                        <Drawer
                            title="Menu"
                            onClose={onCloseDrawer}
                            open={isDrawerOpen}
                        >
                            <NavbarContent />
                        </Drawer>
                    </>
                )}
            </Header>
            <main className="main">{children}</main>
            <Footer className="footer">&copy; 2024 Journalix</Footer>
        </Layout>
    );
};

export default DefaultLayout;
