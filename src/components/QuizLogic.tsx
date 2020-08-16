import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Card } from '@material-ui/core';
import { FormProps } from '../interfaces/types';
import styled from 'styled-components';
import {GlobalStyle, Wrapper} from '../App.styles';

// const CardFormWrapper = styled(Card)`
// 	display: flex;
// 	flex-direction: column;
// 	padding: 20px 30px;
// `;

// const Heading = styled.h1`
// 	font-size: 50px;
// 	margin-bottom: 25px;
// `;

// const QuestionNumberField = styled(FormControl)`
// 	margin-bottom: 20px !important;
// `;

// const SelectDifficultyField = styled(FormControl)`
// 	margin-bottom: 20px !important;
// `;

// const SubmitButton = styled(Button)`
// 	background-color: orange !important;
// 	margin-bottom: 25px !important;
// `;

const QuestionForm: React.FC<FormProps> = ({ start }) => {
	const [inputNum, setInputNum] = useState('10');
	const [difficulty, setDifficulty] = useState('');

	return (
		<>
		<GlobalStyle />
		<Wrapper>
			<h1>Trivia Game</h1>
			<div>
				<TextField
					id='outlined-number'
					label='Number of Questions'
					type='number'
					InputLabelProps={{
						shrink: true,
					}}
					InputProps={{
						inputProps: {
							max: 50,
							min: 5,
						},
					}}
					placeholder={'10'}
					variant='outlined'
					onChange={(event) => setInputNum(event.target.value)}
				/>
				<FormHelperText>Minimum: 5 and Maximum: 50</FormHelperText>
			</div>
			<div>
				<InputLabel id='difficulty-label'>Difficulty</InputLabel>
				<Select
					labelId='difficulty-label'
					id='difficulty-select'
					onChange={(event: React.ChangeEvent<{ value: unknown }>) => setDifficulty(event.target.value as string)}
					value={difficulty}
					
				>
					<MenuItem value={''}>Any</MenuItem>
					<MenuItem value={'easy'}>Easy</MenuItem>
					<MenuItem value={'medium'}>Medium</MenuItem>
					<MenuItem value={'hard'}>Hard</MenuItem>
				</Select>
				<FormHelperText>Select a Quiz difficulty</FormHelperText>
			</div>
			<button className="next" onClick={() => start(inputNum, difficulty)} >
				Start Game
			</button>
		</Wrapper>
		</>
	);
};

export default QuestionForm;