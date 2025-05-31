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
      question: "In an LC network, how are poles and zeros typically arranged on the s-plane:",  ///// Write the question inside double quotes
      answers: {
        a: " Randomly distributed",                  ///// Write the option 1 inside double quotes
        b: "All in the right-half plane",                  ///// Write the option 2 inside double quotes
        c: "Interlaced on the imaginary axis",                  ///// Write the option 3 inside double quotes
        d: "Located at the origin"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "Which statement about pole-zero cancellation is correct? ",  ///// Write the question inside double quotes
      answers: {
        a: "It always simplifies analysis without consequence",                  ///// Write the option 1 inside double quotes
        b: "It can hide unstable system modes",                  ///// Write the option 2 inside double quotes
        c: "It is always a desired condition in control systems",                  ///// Write the option 3 inside double quotes
        d: "It removes zeros from the frequency response"                  ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    		
      {
      question: "In terms of complex frequency s, poles of an immittance function occur at ",  ///// Write the question inside double quotes
      answers: {
        a: "Where the numerator is zero ",                  ///// Write the option 1 inside double quotes
        b: "Where the denominator is zero",                  ///// Write the option 2 inside double quotes
        c: "Where both numerator and denominator are zero",                  ///// Write the option 3 inside double quotes
        d: "Where the function is constant"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    		  {
      question: "In a driving-point impedance function, a pole at the origin implies:",  ///// Write the question inside double quotes
      answers: {
        a: "Capacitive element ",                  ///// Write the option 1 inside double quotes
        b: "Resistive element",                  ///// Write the option 2 inside double quotes
        c: "inductive element",                  ///// Write the option 3 inside double quotes
        d: "Short circuit"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    		  {
      question: "Which is not a property of a physically realizable immittance function? ",  ///// Write the question inside double quotes
      answers: {
        a: "Poles/zeroes in left half-plane",                  ///// Write the option 1 inside double quotes
        b: "Rational function",                  ///// Write the option 2 inside double quotes
        c: "Positive real function",                  ///// Write the option 3 inside double quotes
        d: "Poles in right half-plane"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
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