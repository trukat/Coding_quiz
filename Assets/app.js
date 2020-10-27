    var timerCount = 100
    var timerEl = document.querySelector("#timer")

    timerEl.textContent = timerCount

    var timer = window.setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount

        if (timerCount === 0) {
            clearInterval(timer)
        }
    }, 1000)
    
     
    var myQuestions = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            choices: ["<script>", "<scripting>", "<js>", "<javascript>"],
            correctAnswer: "A"
        },
        {
            question: "How does a FOR loop start?",
            choices: ["for(i<=5; i++)", "for i = 1 to 5", "for (i=0; i <=5)", "for(i=0; i <=5; i++)"],
            correctAnswer: "D"
        },
        {
            question: "How can you add a comment in JavaScript?",
            choices: ["//This is a comment", "<!--This is a comment-->", "'This is a comment'", "${This is a comment}"],
            correctAnswer: "A"
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            choices: ["*", "-", "=", "X"],
            correctAnswer: "C"
        }]


var questionsPointer = 0

var question = document.querySelector("#question")
var optionA = document.querySelector("#optionA")
var optionB = document.querySelector("#optionB")
var optionC = document.querySelector("#optionC")
var optionD = document.querySelector("#optionD")

function setQuestions() {

    if(questionsPointer === myQuestions.length) {
        clearInterval(timer)
        alert("You are done with " + timerCount + " " + "seconds left" + "!")
        return
    }
    question.textContent = myQuestions[questionsPointer].question
    optionA.textContent = myQuestions[questionsPointer].choices[0]
    optionB.textContent = myQuestions[questionsPointer].choices[1]
    optionC.textContent = myQuestions[questionsPointer].choices[2]
    optionD.textContent = myQuestions[questionsPointer].choices[3]
}

setQuestions()

optionA.addEventListener("click", function() {
    if(optionA.getAttribute("data-answer") === myQuestions[questionsPointer].correctAnswer) {
    console.log("This is the right answer.")
    questionsPointer++
    setQuestions()
    } else {
        console.log("wrong answer")
        timerCount -= 10
    }
})

optionB.addEventListener("click", function() {
    if(optionB.getAttribute("data-answer") === myQuestions[questionsPointer].correctAnswer) {
    console.log("This is the right answer.")
    questionsPointer++
    setQuestions()
    } else {
        console.log("wrong answer")
        timerCount -= 10
    }
})

optionC.addEventListener("click", function() {
    if(optionC.getAttribute("data-answer") === myQuestions[questionsPointer].correctAnswer) {
    console.log("This is the right answer.")
    questionsPointer++
    setQuestions()
    } else {
        console.log("wrong answer")
        timerCount -= 10
    }
})
optionD.addEventListener("click", function() {
    if(optionD.getAttribute("data-answer") === myQuestions[questionsPointer].correctAnswer) {
    console.log("This is the right answer.")
    questionsPointer++
    setQuestions()
    } else {
        console.log("wrong answer")
        timerCount -= 10
    }
})