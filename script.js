// variable declarations
var kittenPic = $("#kitten-pic");
var kittenDesc = $("#kitten-desc");
var startBtn = $("#start-btn");
var clickBtn = $("#click-btn");
var timerText = $("#timer-text");
var secondsText = $("#seconds");

var timer = 5;
var scoreCounter = 0;
var currentIndex = 0;

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

renderKitten();
function renderKitten() {
    kittenPic.attr('src', kittenArr[currentIndex].url)
    kittenDesc.text(kittenArr[currentIndex].desc)
}

clickBtn.on('click', function () {
    currentIndex++;
    scoreCounter++;

    if (currentIndex === kittenArr.length) currentIndex = 0;

    renderKitten();
})

startBtn.on('click', function () {
    // create and start timer
    var gameTimer = setInterval(() => {
        timer--;
        secondsText.text(timer);
        if (timer === 0) {
            clearInterval(gameTimer)
            alert('Game Over!! \n Your Score was: ' + scoreCounter)
        };


    }, 1000);


    // when timer runs out, show score


})