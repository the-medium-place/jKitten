// variable declarations
var kittenPic = $("#kitten-pic");
var kittenDesc = $("#kitten-desc");
var startBtn = $("#start-btn");
var clickBtn = $("#click-btn");
var timerText = $("#timer-text");
var secondsText = $("#seconds");
var scoreList = $("#highscores");

var timer = 5;
var scoreCounter = 0;
var currentIndex = 0;

var storedScore = JSON.parse(localStorage.getItem('scores')) || [];

var kittenArr = [
    {
        url: 'http://placekitten.com/200/200',
        desc: "kitten time!"
    },
    {
        url: 'http://placekitten.com/210/200',
        desc: "aewsome kitty!"
    },
    {
        url: 'http://placekitten.com/190/200',
        desc: "lookit those eyez!!!!"
    },
    {
        url: 'http://placekitten.com/215/200',
        desc: "whatta cuteeee"
    },
    {
        url: 'http://placekitten.com/236/200',
        desc: "wanna pet it"
    },
    {
        url: 'http://placekitten.com/148/200',
        desc: "claws for scratchin"
    },
    {
        url: 'http://placekitten.com/97/200',
        desc: "this one is kinda funny lookin'"
    },
    {
        url: 'http://placekitten.com/125/200',
        desc: "whoa, man. too cute."
    },
]
clickBtn.hide();
renderKitten();
renderScores();
function renderKitten() {
    kittenPic.attr('src', kittenArr[currentIndex].url)
    kittenDesc.text(kittenArr[currentIndex].desc)
}

function renderScores() {
    scoreList.empty();
    if (storedScore.length === 0) {
        scoreList.append("please play the game to store your score")
    } else {
        for (var i = 0; i < storedScore.length; i++) {
            var newLi = $("<li>");
            newLi.text(storedScore[i].initials + " ----- " + storedScore[i].score)
            scoreList.append(newLi)
        }
    }
}

clickBtn.on('click', function () {
    currentIndex++;
    scoreCounter++;

    if (currentIndex === kittenArr.length) currentIndex = 0;

    renderKitten();
})

startBtn.on('click', function () {
    clickBtn.show();
    startBtn.hide();
    timer = 5;
    scoreCounter = 0;
    secondsText.text(timer);

    // create and start timer
    var gameTimer = setInterval(() => {
        timer--;
        secondsText.text(timer);
        if (timer === 0) {
            startBtn.show();
            clickBtn.hide();
            clearInterval(gameTimer)
            alert('Game Over!! \n Your Score was: ' + scoreCounter)
            var userInits = prompt('What are your Initials?')

            var scoreObj = {
                initials: userInits,
                score: scoreCounter
            }

            storedScore.push(scoreObj);
            localStorage.setItem('scores', JSON.stringify(storedScore))
            renderScores();
        };


    }, 1000);


    // when timer runs out, show score


})