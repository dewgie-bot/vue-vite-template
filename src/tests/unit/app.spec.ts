import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vite-plus/test";
import App from "@/App.vue";

describe("app", () => {
  it("renders the template headline", () => {
    render(App);
    expect(screen.getByText(/Vue \+ Vite \+ TypeScript/i)).toBeTruthy();
  });
});
