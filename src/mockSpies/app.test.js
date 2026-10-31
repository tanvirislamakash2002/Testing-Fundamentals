import { describe, it, expect, vi } from "vitest"

describe("generateToken()", () => {
    it("should execute the logger function if passed", () => {
        const loggerFn = vi.fn()
        generateToken(loggerFn)

        expect(loggerFn).toHaveBeenCalled()
    })
})