$(function () {



    function startGame() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }

    startGame();

    $("body").on("click", ".start-button", function (event) {
        generateHTML();
    });

    $("body").on("click", ".answer", function (event) {
        selectedAnswer = $(this).text();
        console.log(selectedAnswer)
        if (selectedAnswer === correctAnswers[questionCounter]) {
            
            clearInterval(gameClock);
            generateWin();
      } else {
            clearInterval(gameClock);
            generateLoss();
        }
    });

    $("body").on("click", ".reset-button", function (event) {
        resetGame();
    });

    function timeUp() {
        unanswered++;
        gameHTML = gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";
        $("mainArea").html(gameHTML);
        setTimeout(wait, 5000);
    }

    function generateWin() {
        rightAnswers++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";
        $(".mainArea").html(gameHTML)
        setTimeout(wait, 5000)
    }

    function generateLoss() {
        wrongAnswers++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswers[questionCounter];
        $(".mainArea").html(gameHTML);
    }


    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}
    function wait() {
        if (questionCounter < 7) {
            questionCounter++;
            generateHTML();
            counter = 30;
            // timer goes here
        } else {
            gameOver();
        }
    }

    function timer() {
        gameClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
		if (counter === 0) {
			clearInterval(gameClock);
			timeUp();
		}
		 else if (counter > 0) {
			counter--;
		$(".timer").html(counter);
         }
		
	}
}
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(gameClock);
                timeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    });

    function gameOver() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Game over, here are your results!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + rightAnswers + "</p>" + "<p>Wrong Answers: " + wrongAnswers + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
        }
        

    function reset() {
        questionCounter = 0;
        rightAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        counter = 30;
        generateHTML();
        timerWrapper();

    }
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = ["Who was the lead singer of the Beatles?", "Who was the lead guitarist of The Who?", "Who was the drummer for Led Zeppelin", "Who wasn't a vocalist for Black Sabbath?", "Who was the bassist for Pink Floyd?"];
    var answerArray = [["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], ["Pete Townshend", "Roger Daltrey","Kenney Jones"], ["Jimmy Page", "John Bonham", "Robert Plant", "John Paul Jones"], ["Ozzy Osbourne", "Ronnie James Dio", "Ian Gillian", "Tony Iommi"], ["David Gilmour", "Syd Barret", "Richard Wright", "Roger Waters"]];
    var correctAnswers = ["A. John Lennon", "A. Pete Townshend", "B. John Bonham", "D. Tony Iommi", "D. Roger Waters"];
    var questionCounter = 0;
    var selectedAnswer;
    var gameClock;
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
