import React, {useState} from 'react';
import {fetchQuizQuestions} from './API';
//Components
import QuestionCard from './components/QuestionCard';
//Types
import {QuestionState} from './API';
//Styles
import {GlobalStyle, Wrapper} from './App.styles';

import QuestionForm from './components/QuizLogic';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [potentialScore, setPotential] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(0);


  // console.log(questions);

  // const startTrivia = async () => {
  //   setLoading(true);
  //   setGameOver(false);

    // startTrivia makes api call to start game
    const startTrivia = async (numQuestions: string, difficulty: string) => {
      let questions = +numQuestions;
      if (questions <= 4) {
        questions = 5;
      } else if (questions >50) {
        questions = 50;
      }
      setLoading(true);
      setGameOver(false);
      setTotalQuestions(questions);
    
    const newQuestions = await fetchQuizQuestions(
      questions,
      difficulty      
    )
    console.log(difficulty);



    
    setQuestions(newQuestions);
    setScore(0);
    setPotential(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    

  };


  // used to checks the users answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (potentialScore === 0) {
      setPotentialScore();
    } 
    if (!gameOver) {
      //Users answer from questioncard button value
      const answer = e.currentTarget.value;
      //check answer against right answer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is right
      if (correct && questions[number].difficulty === 'hard') {
        setScore((prev) => prev + 3);
      } else if (correct && questions[number].difficulty === 'medium') {
        setScore((prev) => prev + 2);
      } else if (correct) {
        setScore((prev) => prev + 1)
      } 
     
      // if (correct && questions[number].difficulty === 'hard') setScore((prev) => prev + 3);
      // else if (correct && questions[number].difficulty === 'medium') setScore((prev) => prev + 2);
      // else if (correct) setScore((prev) => prev + 1);
      //save answer in array for users answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
      console.log(gameOver)
      console.log(`the total questions are ${totalQuestions} and you answers ${userAnswers.length}`)
    }
  };
  const setPotentialScore = () => {
    let i = 0;
    for (i = 0; i < totalQuestions; i++) {
      if (questions[i].difficulty === 'easy') {
        setPotential((prev) => prev + 1);
      } else if (questions[i].difficulty === 'medium') {
        setPotential((prev) => prev + 2);
      } else {
        setPotential((prev) => prev + 3);
      }
  }
};



  const nextQuestion = () => {

    // move to next question if not the last question
    const nextQuestion = number + 1;
//below is checking if next question is 10 set game over, otherwise show that next quest
    if(nextQuestion === totalQuestions ) {
      setGameOver(true);
      console.log(`${totalQuestions} and ${nextQuestion}`)
    } else {
      setNumber(nextQuestion);
      console.log(gameOver)
      console.log(`${totalQuestions} and ${userAnswers.length}`)
    }
  };

  return (
    <>
    <GlobalStyle />
		<Wrapper>
    {!gameOver ? <p className="score">Score: {score} | Max Score: {potentialScore}</p> : null }
			{gameOver || userAnswers.length === totalQuestions ? (<QuestionForm start={startTrivia}  /> ) : null}
      
     {loading ? <p>Loading Question...</p> : null }
     {!gameOver && !loading ? (
     <QuestionCard 
          difficulty={questions[number].difficulty}
          category={questions[number].category}
					questionNr={number + 1}
					totalQuestions={totalQuestions}
					question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
     />
     ) : null}
    {!gameOver && userAnswers.length !== totalQuestions && !loading && userAnswers[number] ? (
     <button className="next" onClick={nextQuestion}>
       Next Question
       </button>
    ): null}
		</Wrapper>
    </>
	);
}

export default App;
