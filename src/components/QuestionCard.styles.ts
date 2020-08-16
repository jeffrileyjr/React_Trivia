import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    .cat_diff {
        font-size: 0.8rem;
        display: flex;
        justify-content: space-between;
    }
//below capitlizes first letter of difficulty
    .difficulty {
        text-transform: capitalize;
    }


    p {
        font-size: 1rem;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    .answers {
        font-family: 'Shadows Into Light', cursive;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        // for background we put in a nested turnery to change based on right or wrong answer
        background: ${({correct, userClicked}) =>
        correct
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5656, #c16868)'
        : 'linear-gradient(90deg, #0489B1, #6eafb4)'};
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`