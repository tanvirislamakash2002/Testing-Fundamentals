function validationStringNotEmpty(value) {
    if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Input must be a non-empty string.');
    }
}

function transformToNumber(value) {
    // Number() handles "12", " 12 ", "12.5", "" → 0 (watch out!)
    const num = Number(value);
    if (Number.isNaN(num)) {
        throw new Error(`"${value}" cannot be converted to a number.`);
    }
    return num;
}

function validateNumber(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
        throw new Error('Value must be a finite number.');
    }
}

export function cleanNumbers(inputNumbers) {
    const numbers = [];

    for (const numberInput of inputNumbers) {
        validationStringNotEmpty(numberInput);
        const number = transformToNumber(numberInput)
        validateNumber(number)
        numbers.push(number)
    }
    return numbers
}