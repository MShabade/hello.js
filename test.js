const factorsElement = document.querySelector('.factors');
const multiplesElement = document.querySelector('.multiples');
const resultElement = document.querySelector('.result');
const submitButton = document.querySelector('#submit');

function sumElements(factors, multiples) {
    let sum = 0;

    for (const multiple of multiples) {
        for (const factor of factors) {
            if (factor !== 0 && multiple % factor === 0) {
                sum += multiple;
                break;
            }
        }
    }

    return sum;
}

submitButton.addEventListener('click', () => {
    const factors = factorsElement.value
        .split(',')
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));

    const multiples = multiplesElement.value
        .split(',')
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));

    const result = sumElements(factors, multiples);
    resultElement.innerText = result;

    console.log('Factors:', factors);
    console.log('Multiples:', multiples);
    console.log('Result:', result);
});
