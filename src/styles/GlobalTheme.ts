import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

:focus {
    outline: none;

}

:disabled {
    opacity: 0.6;
}

body {
    font: 400 1rem Nunito, sans-serif;
    background: ${(props) => props.theme['base-background']};
}

`
