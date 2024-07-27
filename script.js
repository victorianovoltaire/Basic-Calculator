document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');
    const buttons = document.getElementById('buttons');

    let currentInput = '';
    let currentOperator = '';
    let result = null;

    buttons.addEventListener('click', function (event) {
        const target = event.target;

        if (target.matches('button')) {
            const buttonText = target.textContent;

            if (!isNaN(parseFloat(buttonText)) || buttonText === '.') {
                currentInput += buttonText;
            } else if (buttonText === 'CA') {
                currentInput = '';
                currentOperator = '';
                result = null;
            } else if (buttonText === 'DEL') {
                currentInput = currentInput.slice(0, -1);
            } else if (buttonText === '=') {
                if (currentInput !== '' && currentOperator !== '') {
                    const operand = parseFloat(currentInput);
                    switch (currentOperator) {
                        case '+':
                            result = result === null ? operand : result + operand;
                            break;
                        case '-':
                            result = result === null ? operand : result - operand;
                            break;
                        case '*':
                            result = result === null ? operand : result * operand;
                            break;
                        case '/':
                            result = result === null ? operand : result / operand;
                            break;
                    }

                    currentInput = '';
                    currentOperator = '';
                }
            } else {
                if (currentInput !== '') {
                    const operand = parseFloat(currentInput);
                    result = result === null ? operand : result;
                    currentInput = '';
                    currentOperator = buttonText;
                }
            }

            screen.textContent = currentInput !== '' ? currentInput : result !== null ? result : '0';
        }
    });
});
