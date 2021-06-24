var startButton = $('#start')

startButton.on('click', function () {
    console.log('clicked!')

    var startScreenDiv = $('#start-screen');
    startScreenDiv.addClass('hide');

    var questionsDiv = $('#questions');
    questionsDiv.removeClass('hide');

})