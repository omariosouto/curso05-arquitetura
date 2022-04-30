import { sum } from "./sum";

describe("sum()", () => {
  it("should return the sum of the given numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
