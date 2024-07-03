let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    const pollObject = JSON.parse(xhr.responseText);
    const pollTitle = document.querySelector('.poll__title');
    const pollAnswers = document.querySelector('.poll__answers');
    
    pollTitle.innerHTML = pollObject.data.title;

    const answers = pollObject.data.answers;
    for (let answer of answers) {
      pollAnswers.insertAdjacentHTML('beforeend', `
        <button class="poll__answer">
          ${answer}
        </button>
      `);
    }

    const pollAnswerButtons = document.querySelectorAll('.poll__answer');
    pollAnswerButtons.forEach((pollAnswerButton, index) => {
      pollAnswerButton.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');

        const xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        xhr2.send(`vote=${pollObject.id}&answer=${index}`)

        xhr2.addEventListener('readystatechange', () => {
          if (xhr2.readyState === xhr2.DONE) {
            pollAnswers.innerHTML = '';

            const pollResults = JSON.parse(xhr2.responseText).stat;
            const totalVotes = pollResults.reduce((sum, result) => sum + result.votes, 0);
            pollResults.forEach(result => {
              pollAnswers.insertAdjacentHTML('beforeend', `
                <div class="poll__answer">
                  ${result.answer}: ${(result.votes / totalVotes * 100).toFixed(2)}%;
                </div>
              `);
            })
          }
        })
      });
    });
  }
})