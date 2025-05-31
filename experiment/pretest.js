/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "What condition must be satisfied for an immittance function to represent a passive physical system?",  ///// Write the question inside double quotes
      answers: {
        a: "Must have all poles in the right-half s-plan",                  ///// Write the option 1 inside double quotes
        b: "Must be a non-rational function",                  ///// Write the option 2 inside double quotes
        c: "Must be a positive real function",                  ///// Write the option 3 inside double quotes
        d: "Must have more zeros than poles"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "What is an immittance function in electrical network analysis?",  ///// Write the question inside double quotes
       ///// Write the question inside double quotes
      answers: {
        a: "The ratio of voltage to power",                  ///// Write the option 1 inside double quotes
        b: "The ratio of impedance to admittance",                  ///// Write the option 2 inside double quotes
        c: "Either impedance or admittance function of a network",                  ///// Write the option 3 inside double quotes
        d: "The sum of impedance and admittance"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },     
    {
      question: "The number of poles and zeroes of a rational immittance function is determined by",  ///// Write the question inside double quotes
       answers: {
         a: "The degree of the numerator only",                  ///// Write the option 1 inside double quotes
         b: "The degree of the denominator only",                  ///// Write the option 2 inside double quotes
         c: "The degrees of both numerator and denominator",                  ///// Write the option 3 inside double quotes
         d: "The number of energy storage elements only"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "c"                ///// Write the correct option inside double quotes
     }, 
     {
      question: "poles of an immittance function are associated with:",  ///// Write the question inside double quotes
       answers: {
         a: "Transmission zeros ",                  ///// Write the option 1 inside double quotes
         b: "Natural frequencies or resonances of the system",                  ///// Write the option 2 inside double quotes
         c: "Energy loss points",                  ///// Write the option 3 inside double quotes
         d: "Points where the function is zero"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     }, 
       {
      question: "The zeroes of an immittance function occur at:",  ///// Write the question inside double quotes
       answers: {
         a: " Points where the function goes to infinity",                  ///// Write the option 1 inside double quotes
         b: "Frequencies where output is maximum",                  ///// Write the option 2 inside double quotes
         c: "requencies where the function value is zero",                  ///// Write the option 3 inside double quotes
         d: "Points where the phase angle is 180 degrees"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "c"                ///// Write the correct option inside double quotes
     },                                ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////