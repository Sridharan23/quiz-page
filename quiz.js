let quizData = [
    {
        question: "1. what does HTML stands for?",
        a: "A. HyperText Markup Language",
        b: "B. HyperText Machine Language",
        c: "C. HyperText Marking Language",
        d: "D. HighText Marking Language",
        correct: "a"
    },
    {
        question: "2. Which language runs in a web browser?",
        a: "A. python",
        b: "B. c",
        c: "C. java",
        d: "D. javaScript",
        correct: "d",
    },
    {
        question: "3. CSS stands for?",
        a: "",
        b: "B. cascading style sheet",
        c: "C. cascasding super style",
        d: "D. central style sheet",
        correct: "b",
    },
    {
        question: "4. Which year was javascript launched?",
        a: "A. 1996",
        b: "B. 1995",
        c: "C. 1994",
        d: "D. none of above",
        correct: "b",
    },
    {
        question: "",
        a: "A. block,element,modifier",
        b: "B. block,element,monitor",
        c: "C. block,essential,modifier",
        d: "",
        correct: "a",
    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".option")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("next")


let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
      a_text.innerText = currentQuizData.a
      b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d


}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML=`<h2> you answered ${score}/${quizData.length} questions correctly </h2>
            <button onclick="location.reload()"> Reload </button>`
        }
    }

})

