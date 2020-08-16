import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    .numQuestions {
        width: 100%;
        margin: 0;
        padding: 0;
        color: #17130d;
        font-weight: 500;
    }

    .helpText {
        color: #666564;
        text-align: center;
    }

    .difficultyChoice {
        text-align: left;
        color: #17130d;
        font-weight: 600;
    }

    .diffChoice {
        width: 100%;
    }

    p {
        font-size: 1rem;
    }
`