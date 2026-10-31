export function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email address.")
    }
}

export function validateArrayNotEmpty(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array can not be empty.")
    }
}