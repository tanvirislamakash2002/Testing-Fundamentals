import {
    it,
    expect,
    // hooks
    beforeAll,
    afterAll,
    beforeEach,
    afterEach
} from "vitest"
import { encryptMessage, encryptMessagePromise } from "./async"
import CryptoJS from "crypto-js";

beforeAll(() => {
    console.log("Before All")
})

beforeEach(() => {
    console.log("Before Each")
})

afterEach(() => {
    console.log("After Each")
})

afterAll(() => {
    console.log("After All")
})

it("should encrypt a message", async () => {
    const message = "tanvir islam akash"
    const secretKey = "123456"

    const encryptedData = await new Promise((resolve, reject) => {
        encryptMessage(message, secretKey, (message) => {
            resolve(message)
        })
    })

    expect(encryptedData).toBeDefined()
})

it("should encrypt the message", async () => {
    const message = "tanvir islam akash"
    const secretKey = "123456"

    const encryptedData = await encryptMessagePromise(message, secretKey)
    expect(encryptedData).toBeDefined()
})

it("should encrypt the message correctly", async () => {
    const message = "tanvir islam akash"
    const secretKey = "123456"
    const encryptedMessage = await encryptMessagePromise(message, secretKey)

    const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretKey).toString(CryptoJS.enc.Utf8)
    expect(decryptedMessage).toBe(message)
})