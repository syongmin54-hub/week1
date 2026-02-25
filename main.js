const generateBtn = document.getElementById('generate-btn');
const lottoNumbersDiv = document.querySelector('.lotto-numbers');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getNumberColor(number) {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
}

generateBtn.addEventListener('click', () => {
    const generatedNumbers = generateLottoNumbers();
    const numberSpans = lottoNumbersDiv.querySelectorAll('.number');

    numberSpans.forEach((span, index) => {
        const number = generatedNumbers[index];
        span.textContent = number;
        span.style.backgroundColor = getNumberColor(number);
        span.style.color = 'white';
    });
});
