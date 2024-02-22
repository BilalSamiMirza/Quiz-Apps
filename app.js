var questions = [
    {
        question:"Html Stands For _______________________",
        options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question:"Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question:"Js Stands For _______________________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question:"Dom Stands For _______________________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question:"Ram Stands For _______________________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question:"Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    },
];

var index = 0;
var ques = document.getElementById('ques');
var opts = document.getElementById('opts');
var score = 0;
var num = document.getElementById('num');
var totalQuestions=questions.length;

function showQuestion(){

    opts.innerHTML = '';
    if (index < totalQuestions){
        num.innerHTML = `${index+1}/${totalQuestions}`
        ques.innerHTML = questions[index].question;
        for(var i = 0; i < questions[index].options.length; i++){
            var currOptions = questions[index].options[i];
            var correctAns = questions[index].correctAns;
            opts.innerHTML += `
            <div class="row">
            <div class="col-md-6 col-sm-12">
                <button onclick="checkQues('${currOptions}','${correctAns}')">${questions[index].options[i]}</button>
            </div>
        </div>
        `;

        }

    }
    else{
        var percentage = (score / totalQuestions) * 100;
        percentage = percentage.toFixed(2);
        ques.innerHTML = `Quiz Ended! your Score: ${score}/${totalQuestions}(${percentage}%)`;
        // document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('restartBtn').style.display = 'block';

        // document.getElementById('prevBtn').style.display ='none';


    }

    






}showQuestion()

function checkQues(a,correctAns){
    if(a === correctAns){
        score ++;
       


    }
    index ++;
    showQuestion()
}


function restartQuiz() {
    document.getElementById('restartBtn').style.display = 'none';
    index = 0;
    score = 0;
    showQuestion();
}





























