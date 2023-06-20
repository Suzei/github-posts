import { styled } from "styled-components";


export const IssueContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    width: 100%;
margin: 8rem auto;

p {
    color: ${props => props.theme["base-text"]}
}


    span {
        color: ${props => props.theme.blue};
        font-size: 1rem;
        text-decoration: underline;
    }
`