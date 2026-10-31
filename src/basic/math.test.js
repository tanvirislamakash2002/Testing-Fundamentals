import { it, expect } from "vitest"
import { add } from "./math";

it("should return the correct sum if an array of number is provided", () => {
    // Arrange
    const numbers = [1, 2, 3]
    const expectedResult = numbers.reduce((acc, cur) => acc + cur)
    // Actions
    const result = add(numbers);
    // Assertion
    expect(result).toBe(expectedResult)
})

it("it should provide NaN if at least one invalid number is provided", () => {
    // Arrange
    const numbers = [1, "invalid", 3]
    // Actions
    const result = add(numbers);
    // Assertion
    expect(result).toBeNaN()
})

it("it should provide correct sum if an array numeric string is provided", () => {
    // Arrange
    const numbers = ["1", "6", "3"]
    const expectedResult = numbers.reduce((acc, cur) => +acc + +cur)
    // Actions
    const result = add(numbers);
    // Assertion
    expect(result).toBe(expectedResult)
})

it("it should throw an error if no argument is passed", () => {
    // try {
    //     const result = add()
    // } catch (error) {
    //     expect(error).toBeDefined()
    // }
    // expect(resultFn).toBeDefined()

    const resultFn = () => {
        add()
    }
    expect(resultFn).toThrow()

})

it("it should throw an error if multiple argument is passed", () => {

    const resultFn = () => {
        add(1, 2, 3)
    }
    expect(resultFn).toThrow(/is not iterable/i)

})