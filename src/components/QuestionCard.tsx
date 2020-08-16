import React from 'react';
//types
import {AnswerObject} from '../App';
//Styles
import {Wrapper, ButtonWrapper} from './QuestionCard.styles';


type Props = {
    question: string;
    category: string;
    difficulty: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, category, difficulty, callback, userAnswer, questionNr, totalQuestions}) => (
<Wrapper>
    <p className="cat_diff"> <span className="category">{category}</span> <span className="difficulty">{difficulty}</span></p>
    <p className="number">
        Question: {questionNr}/{totalQuestions}
    </p>
    <p  dangerouslySetInnerHTML={{__html: question}}/>
    <div >
        {answers.map(answer => (
            <ButtonWrapper 
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            >
                {/* have to add value = {answer} to read value of answer */}
                <button disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
            </ButtonWrapper>
        ))}
    </div>
    </Wrapper>
);

export default QuestionCard;