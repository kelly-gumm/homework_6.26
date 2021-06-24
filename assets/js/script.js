
// var myQuestion = {
//     text: "What is 1 + 1?",
//     choices: ["1", "2", "3", "4"],
//     correctAnswer: "2"
// }


// console.log(myObject.color)

// var myArray = [1, 2, 3, 4]

var currentQuestionNumber = 0;

var questions = [
    {
        text: "What is 1 + 1?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },
    {
        text: "What is 0 + 1?",
        choices: ["2", "3", "4", "1"],
        correctAnswer: "1"
    },
    {
        text: "What is 3 + 1?",
        choices: ["5", "4", "3", "2"],
        correctAnswer: "4"
    },
    {
        text: "What is 3 + 1?",
        choices: ["5", "4", "3", "2"],
        correctAnswer: "4"
    }
]

// representative of the start button
var startButton = $('#start');

// event listener of start button
startButton.on('click', function () {
    console.log('clicked!')

    var startScreenDiv = $('#start-screen');
    startScreenDiv.addClass('hide');

    var questionsDiv = $('#questions');
    questionsDiv.removeClass('hide');

    showNextQuestion();

})

function showNextQuestion () {
    console.log('Next question!~')
    var questionTitleH2 = $('#question-title');
    questionTitleH2.text(questions[currentQuestionNumber].text);

    var choicesDiv = $('#choices');
    choicesDiv.empty();

    for (let index = 0; index < questions[currentQuestionNumber].choices.length; index++) {
        const choice = questions[currentQuestionNumber].choices[index];

        console.log(choice)
        var newChoiceButton = $('<button>');
        newChoiceButton.text(choice);
        newChoiceButton.on('click', showNextQuestion)

        choicesDiv.append(newChoiceButton)

    }

    currentQuestionNumber++;
    // currentQuestionNumber = currentQuestionNumber + 1;
}