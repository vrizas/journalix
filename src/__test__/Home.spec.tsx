import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("home component", () => {
    it("should show trending list", async () => {
        render(<App />);

        setTimeout(async () => {
            const trendingCards = await screen.getAllByTestId("trending-card");

            expect(trendingCards.length).toBeGreaterThan(0);
        }, 3000);
    });

    it("should show local news list", async () => {
        render(<App />);
        setTimeout(async () => {
            const localCards = await screen.getAllByTestId("local-card");

            expect(localCards.length).toBeGreaterThan(0);
        }, 3000);
    });
});
