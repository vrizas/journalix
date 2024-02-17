import DefaultLayout from "@layouts/DefaultLayout";
import { useArticleRepositoryImplementation } from "@presentation/view-model/home/articleRepositoryImplementation";
import { useArticleViewModel } from "@presentation/view-model/home/articleViewModel";
import { Card, Col, Row, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";
import "./home-component.css";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const HomeComponent = () => {
    const repository = useArticleRepositoryImplementation();
    const {
        getTrendingArticles,
        getLocalArticles,
        isTrendingLoading,
        localArticles,
        trendingArticles,
    } = useArticleViewModel(repository);
    const [isDesktop, setIsDesktop] = useState(false);

    const onDesktopScreen = (media: MediaQueryList) => {
        if (media.matches) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    };

    useEffect(() => {
        getTrendingArticles();
        getLocalArticles();
    }, [getLocalArticles, getTrendingArticles]);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 992px)");

        onDesktopScreen(media);

        media.addEventListener("change", function () {
            onDesktopScreen(media);
        });
    }, []);

    return (
        <DefaultLayout>
            <div className="home">
                <Row gutter={[16, 16]}>
                    {isTrendingLoading ? (
                        <>
                            <Col span={isDesktop ? 12 : 24}>
                                {isDesktop && <h2>Trending Now</h2>}
                                <Card
                                    hoverable
                                    cover={
                                        <Skeleton.Image
                                            active={true}
                                            style={{
                                                width: "100%",
                                                height: "267px",
                                            }}
                                        />
                                    }
                                    className="home__hero-card"
                                >
                                    <Skeleton active={true} />
                                </Card>
                                <div className="home__content">
                                    {!isDesktop && <h2>Trending Now</h2>}
                                    <Row
                                        gutter={[16, 16]}
                                        style={{ marginTop: 16 }}
                                    >
                                        {[0, 1].map((indicator) => (
                                            <Col
                                                span={isDesktop ? 12 : 24}
                                                key={indicator}
                                            >
                                                <Card
                                                    hoverable
                                                    cover={
                                                        <Skeleton.Image
                                                            active={true}
                                                            style={{
                                                                width: "100%",
                                                                height: "267px",
                                                            }}
                                                        />
                                                    }
                                                >
                                                    <Skeleton active={true} />
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Link to="/trending" className="home__more">
                                        View More <RightOutlined />
                                    </Link>
                                </div>
                            </Col>
                            <Col span={isDesktop ? 12 : 24}>
                                <div className="home__content">
                                    <h2>Local News</h2>
                                    <Row gutter={[16, 16]}>
                                        {[0, 1, 2, 3, 4, 5].map((indicator) => (
                                            <Col
                                                span={isDesktop ? 12 : 24}
                                                key={indicator}
                                            >
                                                <Card
                                                    hoverable
                                                    cover={
                                                        <Skeleton.Image
                                                            active={true}
                                                            style={{
                                                                width: "100%",
                                                                height: "267px",
                                                            }}
                                                        />
                                                    }
                                                >
                                                    <Skeleton active={true} />
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Link to="/local" className="home__more">
                                        View More <RightOutlined />
                                    </Link>
                                </div>
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col span={isDesktop ? 12 : 24}>
                                {isDesktop && <h2>Trending Now</h2>}
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt={trendingArticles[0]?.title}
                                            src={
                                                trendingArticles[0]
                                                    ?.urlToImage ||
                                                "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
                                            }
                                        />
                                    }
                                    className="home__hero-card"
                                >
                                    <Meta
                                        title={trendingArticles[0]?.title}
                                        description={
                                            trendingArticles[0]?.content ||
                                            "No content available"
                                        }
                                    />
                                </Card>
                                <div className="home__content">
                                    {!isDesktop && <h2>Trending Now</h2>}
                                    <Row
                                        gutter={[16, 16]}
                                        style={{ marginTop: 16 }}
                                    >
                                        {trendingArticles
                                            .slice(1, 3)
                                            .map((article, index) => (
                                                <Col
                                                    span={isDesktop ? 12 : 24}
                                                    key={index}
                                                >
                                                    <Card
                                                        hoverable
                                                        cover={
                                                            <img
                                                                alt={
                                                                    article.title
                                                                }
                                                                src={
                                                                    article.urlToImage ||
                                                                    "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
                                                                }
                                                            />
                                                        }
                                                    >
                                                        <Meta
                                                            title={
                                                                article.title
                                                            }
                                                            description={
                                                                article.content ||
                                                                "No content available"
                                                            }
                                                        />
                                                    </Card>
                                                </Col>
                                            ))}
                                    </Row>
                                    <Link to="/trending" className="home__more">
                                        View More <RightOutlined />
                                    </Link>
                                </div>
                            </Col>
                            <Col span={isDesktop ? 12 : 24}>
                                <div className="home__content">
                                    <h2>Local News</h2>
                                    <Row gutter={[16, 16]}>
                                        {localArticles.map((article, index) => (
                                            <Col
                                                span={isDesktop ? 12 : 24}
                                                key={index}
                                            >
                                                <Card
                                                    hoverable
                                                    cover={
                                                        <img
                                                            alt={article.title}
                                                            src={
                                                                article.urlToImage ||
                                                                "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
                                                            }
                                                        />
                                                    }
                                                >
                                                    <Meta
                                                        title={article.title}
                                                        description={
                                                            article.content ||
                                                            "No content available"
                                                        }
                                                    />
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Link to="/local" className="home__more">
                                        View More <RightOutlined />
                                    </Link>
                                </div>
                            </Col>
                        </>
                    )}
                </Row>
            </div>
        </DefaultLayout>
    );
};

export default HomeComponent;
