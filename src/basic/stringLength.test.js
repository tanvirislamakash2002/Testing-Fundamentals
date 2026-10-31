import { it, expect } from "vitest"
import { stringLength } from "./stringLength"

it("returns correct length for non-empty string", () => {
    expect(stringLength("hello")).toBe(5)
    expect(stringLength("world")).toBe(5)
    expect(stringLength("hello world")).toBe(11)
})


it("return 0 for empty string", () => {
    expect(stringLength("")).toBe(0)
})

it("throws error for non-string input", () => {
    expect(() => stringLength(null)).toThrow()
    expect(() => stringLength(undefined)).toThrow()
    expect(stringLength(123)).toBeUndefined()
})