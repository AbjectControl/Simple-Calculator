const result = document.getElementById('result');

function clearResult() {
    result.value = '';
}

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    const lastChar = result.value.slice(-1);

    // Prevent appending multiple operators consecutively
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(operator)) {
        result.value = result.value.slice(0, -1) + operator;
    } else {
        result.value += operator;
    }
}

function appendDecimal() {
    const parts = result.value.split(/[-+*/]/);
    const lastPart = parts[parts.length - 1];

    // Prevent multiple decimals in a single number
    if (!lastPart.includes('.')) {
        result.value += '.';
    }
}

function calculate() {
    try {
        // Evaluate the expression safely
        if (result.value) {
            result.value = parseFloat(eval(result.value).toFixed(10)); // Fix precision for decimals
        }
    } catch (error) {
        result.value = 'Error';
    }
}
