import { it, expect } from "vitest"
import { saveTokenToFile } from "./io"

it("should store the token to the file", () => {
    const data = "dummy token"
    const fileName = "token.txt"

    saveTokenToFile(data, fileName)
    expect(saveTokenToFile(data, fileName)).resolves.toBeUndefined()
})