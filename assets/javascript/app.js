var questions;
var n;
var correct;
var incorrect;
var timer;
var current_question;

$(".container").hide();
$("#question-section").hide();		
$( "#start" ).click(function() {
    $(".container").show();		
    $("#question-section").show();	
    $("#correct").text("0");	
    $("#incorrect").text("0");	
    startQuestion();
});


function startQuestion() {

    questions = [
                {question:"Which is the only Disney Princess that has a child?", answers:["Ariel", "Jasmine", "Belle","Cinderella"], answer:"Ariel"},
                {question:"Chris Hemsworth plays this superhero.", answers:["Spider-Man", "Thor", "Aquaman","Wolverine"], answer:"Thor"},
                {question:"What NFL football team has won the most Super Bowls?", answers:["San Francisco 49ers", "New England Patiots", "Pittsburgh Steelers","Dallas Cowboys"], answer:"Pittsburgh Steelers"},
                {question:"Which famous singer lost the coin toss to Buddy Holly, giving up his seat on the plane that crashed and killed him?", answers:["Elvis Presley", "Paul McCartney", "Johnny Cash","Waylon Jennings"], answer:"Waylon Jennings"},
                {question:"What is the name of Tony Sopranos Daughter in the TV Series, \"The Sopranos\"?", answers:["Olivia", "Claire", "Meadow","Blossom"], answer:"Meadow"},
                {question:"Who was Johnny Carson's Sidekick?", answers:["Rodney Dangerfield", "Don Rickles", "Jerry Seinfield","Ed McMahon"], answer:"Ed McMahon"},
                {question:"Who wrote the song \"Crazy\", made famous by Patsy Cline?", answers:["Hank Williams", "Merle Haggard", "Loretta Lynn","Willie Nelson"], answer:"Willie Nelson"},
                {question:"What is the name of the villain in Texas Chainsaw Massacre", answers:["Michael Myers", "Jason", "Leatherface","Pinhead"], answer:"Leatherface"},
                ];
    n = 10;
    correct = 0;
    incorrect = 0;


    timer = setTimeout(countDown, 1000);
    current_question = questions[Math.floor(Math.random()*questions.length)];
    $("#question-section").text(current_question.question);
    $("button[data-answer='a']").text(current_question.answers[0]);
    $("button[data-answer='b']").text(current_question.answers[1]);
    $("button[data-answer='c']").text(current_question.answers[2]);
    $("button[data-answer='d']").text(current_question.answers[3]);

    $("#game-over").text("Time Remaining:");
    $(".time-remaining").text(n);
    $("#start").hide();
}
function nextQuestion(n) {
if (questions.length > 0) {
    timer = setTimeout(countDown, 1000);
    current_question = questions[Math.floor(Math.random()*questions.length)];
    $("#question-section").text(current_question.question);

    $("button[data-answer='a']").text(current_question.answers[0]);
    $("button[data-answer='b']").text(current_question.answers[1]);
    $("button[data-answer='c']").text(current_question.answers[2]);
    $("button[data-answer='d']").text(current_question.answers[3]);
}
else {
    clearTimeout(timer);
    $("#game-over").text("Gave Over!");
    $(".time-remaining").text("");
    $(".container").hide();
    $("#start").show().text("Play Again?");
}

}

function countDown(){
n--;
timer = setTimeout(countDown, 1000);
$(".time-remaining").text(n);
    if(n === 0){
        incorrect = incorrect+1;
        $("#incorrect").text(incorrect);
        clearTimeout(timer);
        n = 10;
        $(".time-remaining").text(n);
        removeQuestion(current_question);
        console.log(questions);
        nextQuestion();
    }
}

$('.answers').on('click', function() {
    if($(this).text() === current_question.answer) {
        correct = correct+1;
        $("#correct").text(correct);
        clearTimeout(timer);
        removeQuestion(current_question);
        n = 10;
        $(".time-remaining").text(n);
        



        console.log(questions);
        nextQuestion();
    }
    else {
        incorrect = incorrect+1;
        $("#incorrect").text(incorrect);
        clearTimeout(timer);			
        n = 10;
        $(".time-remaining").text(n);


        removeQuestion(current_question);
        
        console.log(questions);
        nextQuestion();
    }
});

function removeQuestion() {
    for (var i = questions.length - 1; i >= 0; --i) {
            if (questions[i].answer === current_question.answer) {
                questions.splice(i,1);
            }
        }
}