let startButton = document.getElementById('start-button');
let startPage = document.getElementById('start-page');
let questionOnePage = document.getElementById('question-1');

startButton.addEventListener('click', function() {
    startPage.className = 'container text-center mt-5 d-none';
    questionOnePage.className = 'container text-center mt-5';
})