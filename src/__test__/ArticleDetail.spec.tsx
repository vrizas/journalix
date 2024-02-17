import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("article detail component", () => {
    it("should show correct article", async () => {
        render(<App />);

        setTimeout(async () => {
            const trendingCard = await screen.getAllByTestId(
                "trending-card"
            )[0];
            const trendingCardTitle =
                trendingCard?.querySelector(".ant-card-meta-title")
                    ?.textContent || "";

            trendingCard.click();

            const articleTitle = await screen.getByTestId("article-title");

            expect(articleTitle.textContent).toMatch(trendingCardTitle);
        }, 3000);
    });
});
