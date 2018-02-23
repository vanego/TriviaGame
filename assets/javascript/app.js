// counter
var counter = 60;
var unansweredQuestions = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

// shows the counter on html
$("#countdown").text(counter);

// // Decreases my counter every 1 second
function countDown() {
    counter--;

    // when counter reaches 0 it alerts "time's up" and stops counter
    if (counter == 0) {
        alert("Time's up!");
        clearInterval(intervalIdentifier);
        grade();
    }

    // shows my counter on html every time it changes (every 1 second)
    $("#countdown").text(counter);

}

// calling the function countDown every 1 second
// get a reference to the interval so that we can stop it in clearInterval
var intervalIdentifier = setInterval(countDown, 1000);

// created an array of array of questions,
// each question is an object with three properties
// 1 questionTitle 2 options 3 correctAnswer

var test =
[
    {
        question: "What is the capital of the United States of America?",
        options: ["California", "Washington DC", "New York"],
        answer: "Washington DC"
    },
    {
        question: "What is the capital of Thailand?",
        options: ["Bangkok", "Phuket", "Pai"],
        answer: "Bangkok"
    },
    {
        question: "What is the capital of Cuba?",
        options: ["Santiago de Cuba", "Havana", "Santa Clara"],
        answer: "Havana"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Mendoza", "Salta", "Buenos Aires"],
        answer: "Buenos Aires"
    },
    {
        question: "What is the capital of Colombia?",
        options: ["Bogota", "Cali", "Cartagena"],
        answer: "Bogota"
    },
    {
        question: "What is the capital of Kenya?",
        options: ["Mombasa", "Nairobi", "Kisumu"],
        answer: "Nairobi"
    }
]

// i need to loop my questions and append to html
for (var i = 0; i < test.length; i++) {
    $("#questions").append(test[i].question);
    $("#questions").append("<br>");

    // loop through options and append radio button input attr thing
    for (var j = 0; j < test[i].options.length; j++) {
        // var inputThing = $("<input>").attr("type","radio").attr("name", i).attr("disabled", "disabled").attr("value", test[i].options[j]).attr("correctAnswer", test[i].answer);

        var inputThing = $("<input>").attr("type","radio").attr("name", i).attr("value", test[i].options[j]).attr("correctAnswer", test[i].answer);

        $("#questions").append(inputThing);
        $("#questions").append(test[i].options[j]);
        $("#questions").append("<br>");
    }
    
}
// when "submit" button is clicked it runs the function to grade the test.
$("#submit").on("click", function(){
    clearInterval(intervalIdentifier);
    grade();

})
 
function grade(){
    for (var i = 0; i < test.length; i++) {
        var selectedOption = $("input[name=" + i + "]:checked");
        
        // if nothing was selected for each object then it increases the unanswered counter
        if (selectedOption.length === 0 ) {
            unansweredQuestions++;

        } else {
            var userSelection = selectedOption.attr("value");
            var correctAnswer = selectedOption.attr("correctAnswer");

            // grading
            if (userSelection=== correctAnswer) {
                correctAnswers++;
            }else {
                incorrectAnswers++;
            }
        }
    } 
    // alert("unansweredQuestions " + unansweredQuestions);
    alert("correctAnswers " + correctAnswers);

    alert("incorrectAnswers " + incorrectAnswers);

    // created a variable that combines he unanswered questions and the incorrectly answered questions.

    var unansweredQuestions = (test.length - correctAnswers - incorrectAnswers);
        alert(unansweredQuestions);

        // 1. figure out how to alert in my html
        // 2. figure out how to stop timer once submit button is clicked.
        
}




