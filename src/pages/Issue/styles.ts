import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import {SyntaxHighlighterProps} from 'react-syntax-highlighter'
import { styled } from "styled-components";


export const IssueContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    width: 100%;
    margin: 8rem auto;
    padding: 2rem;

p {
    color: ${props => props.theme["base-text"]};
    line-height: 160%;
}


    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.blue};
        margin: 1rem 0;
        text-decoration: underline;  
    }
`

export const Code = styled(SyntaxHighlighter)<SyntaxHighlighterProps> `
    padding: 1rem !important;
    background-color: ${props => props.theme["base-post"]} !important;
    margin: 1.5rem 0;
    
    
`