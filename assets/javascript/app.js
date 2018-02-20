// counter
var counter = 10;

// shows the counter on html
$("#countdown").text(counter);

// // Decreases my counter every 1 second
function countDown(){
    counter--;

    // when counter reaches 0 it alerts "time's up" and stops counter
    if (counter == 0){
         alert("Time's up!");
         clearInterval(intervalIdentifier);
    }

    // shows my counter on html every time it changes (every 1 second)
    $("#countdown").text(counter);

}

// calling the function countDown every 1 second
// get a reference to the interval so that we can stop it in clearInterval
var intervalIdentifier = setInterval(countDown, 1000);

// created an array of names
var Names = ["Vanessa", "Nelly", "Emilio", "Mia", "Rosa"];

// for loop that will create a radio button for each name in our array
for (var i = 0; i < Names.length; i++) {
    // creating a radio button (<input type=radio name=key>) from scratch
    // if radio buttons have different names you can select multiple at a time
    // if radio buttons have same name only one can be selected at a time
    var radioButton = $("<input>").attr("type", "radio").attr("name","key").attr("value", Names[i]);

    // shows my radio button on html
    $("#questions").append(radioButton);

    // shows a name for the label of the button
    $("#questions").append(Names[i]);

    // placing a break between each button selection
    $("#questions").append("<br>");
    
}






























































// Countdown Timer
// var interval;
//     var minutes = 0;
//     var seconds = 60;
//     window.onload = function() {
//         countdown('countdown');
//     }

//     function countdown(element) {
//         interval = setInterval(function() {
    //         var el = document.getElementById(element);
    //         if(seconds == 0) {
    //             if(minutes == 0) {
    //                 el.innerHTML = "Your Time's Up!";  
    //                 alert("Your Time's Up!");
    //                 clearInterval(interval);
    //                 return;
    //             } else {
    //                 minutes--;
    //                 seconds = 60;
    //             }
    //         }
    //         if(minutes > 0) {
    //             var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
    //         } else {
    //             var minute_text = '';
    //         }
    //         var second_text = seconds > 1 ? 'seconds' : 'second';
    //         el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
    //         document.title = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
    //         seconds--;
    //     }, 1000);
    // }

    // var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct= 0;
    // var questions = [
    //     ["What is the capital of the United States of America?", "California", "Washington DC", "New York", "B"],
    //     ["What is the capital of Thailand?", "Bangkok", "Phuket", "Pai", "A"],
    //     ["What is the capital of Cuba?", "Santiago de Cuba", "Havana", "Santa Clara", "B"],
    //     ["What is the capital of Canada?", "Ottawa", "Vancouver", "Montreal", "A"],
    //     ["What is the capital of Argentina?", "Mendoza", "Salta", "Buenos Aires", "C"],
    //     ["What is the capital of Colombia?", "Bogota", "Cali", "Cartagena", "A"],
    //     ["What is the capital of Kenya?", "Mombasa", "Nairobi", "Kisumu", "B"]
    // ];

    // function _(x){
    //     return document.getElementById(x);
    // }

    // function renderQuestion(){
    //     test = _("test");
    //     _("test_status").innerHTML = "Question" +(pos+1)+"of" +questions.length;
    //     question =questions[pos][0];
    //     chA = questions[pos][1];
    //     chB = questions[pos][2];
    //     chC = questions[pos][3];
    //     test.innerHTML = "<h3"+question+"</h3>";
    //     test.innerHTML = += "input type='radio', name='choices' value= 'A'> "+chA+"<br>";
    //     test.innerHTML = += "input type='radio', name='choices' value= 'B'> "+chB+"<br>";
    //     test.innerHTML = += "input type='radio', name='choices' value= 'C'> "+chC+"<br><br>";
    //     test.innerHTML = += "<button onclick='checkAnswer()'> Submit Answer</button>";
    // }

    // function checkAnswer(){
    //     alert("OK!");
    // }

    // setTimeout(, 1000)
    
    function alertHello(){
        alert("Hello");
    }
    