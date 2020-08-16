import styled, {createGlobalStyle} from 'styled-components';
import BGImage from './images/fox3.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background: url(${BGImage}) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        margin:0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    .startButton {
        text-align: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }
    `;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
        color: #080808;
    }

    .score {
        color: #080808;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Anton', sans-serif;
        // background-image: linear-gradient(180deg, #fff, #58D3F7);
        // background-size: 100%;
        // background-clip: text;
        // --webkit-background-clip: text;
        // --webkit-text-fill-color: transparent;
        // --moz-background-clip: text;
        // --moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }
 .start, .next {
     cursor: pointer;
     background: linear-gradient(180deg, #fff, #0489B1);
     border: 2px soild #d38558;
     box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
     border-radius: 10px;
     height: 40px;
     margin: 20px 0px;
     padding: 0 40px;
 }   

 .start:hover, .next:hover {
    background: linear-gradient(180deg, #fff, #0B3861);
 }

 .start {
     max-width: 200px;
 }
}`;