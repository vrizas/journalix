import DefaultLayout from "../../../layouts/DefaultLayout";
import "./article-detail-component.css";
import { useLocation } from "react-router-dom";
import { Article } from "../../../domain/entity/articleEntity";
import { Image } from "antd";

const ArticleDetailComponent = () => {
    const location = useLocation();
    const data = location.state as Article | undefined;

    return (
        <DefaultLayout>
            <div className="article-detail">
                <h2 data-testid="article-title">{data?.title}</h2>
                <Image
                    src={
                        data?.urlToImage ||
                        "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
                    }
                    alt={data?.title}
                />
                <p>
                    <strong>{data?.author}</strong>,{" "}
                    {data
                        ? new Date(data.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                              }
                          )
                        : ""}
                </p>
                <p>{data?.content || "No content available"}</p>
            </div>
        </DefaultLayout>
    );
};

export default ArticleDetailComponent;
