import { describe, it, expect } from "vitest";
import { cardColor, cardColorAlt, cardColorExpertise, services, caseStudiesFull } from "@/data";
import { blogPosts } from "@/data/blog";
import { jobOpenings } from "@/data/careers";

describe("data exports", () => {
  it("exports cardColor with correct shape", () => {
    expect(cardColor).toHaveProperty("border");
    expect(cardColor).toHaveProperty("hover");
    expect(cardColor).toHaveProperty("accent");
    expect(cardColor).toHaveProperty("bg");
  });

  it("exports cardColorAlt with different values", () => {
    expect(cardColorAlt.border).not.toBe(cardColor.border);
  });

  it("exports cardColorExpertise with different values", () => {
    expect(cardColorExpertise.hover).not.toBe(cardColor.hover);
  });

  it("exports services array", () => {
    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);
    expect(services[0]).toHaveProperty("id");
    expect(services[0]).toHaveProperty("title");
  });

  it("exports caseStudiesFull array", () => {
    expect(Array.isArray(caseStudiesFull)).toBe(true);
    expect(caseStudiesFull.length).toBeGreaterThan(0);
    expect(caseStudiesFull[0]).toHaveProperty("slug");
  });

  it("exports blogPosts array", () => {
    expect(Array.isArray(blogPosts)).toBe(true);
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it("exports jobOpenings array", () => {
    expect(Array.isArray(jobOpenings)).toBe(true);
    expect(jobOpenings.length).toBeGreaterThan(0);
  });
});
