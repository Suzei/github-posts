import { styled } from "styled-components";

export const SearchInputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
margin: 0 auto;
max-width: 1120px;

div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h3 {
        color: ${props => props.theme["base-title"]}
    }

    span {
        color: ${props => props.theme["base-span"]}
    }
    }

    input {
        background: ${(props) => props.theme["base-input"]};
        border: 1px solid ${props => props.theme["base-border"]};
        padding: 12px 16px;
        width: 100%;
        border-radius: 6px;
        color: ${props => props.theme["base-label"]};

        &::placeholder {
            color: ${(props) => props.theme["base-label"]};
        }

        &:focus {
            border: 1px solid ${(props) => props.theme["blue"]};
        }
    }
`