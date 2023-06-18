import { styled } from 'styled-components';


export const IssueCardContainer = styled.div`
background: ${props => props.theme['base-post']};
border-radius: 10px;
min-height: 210px;

p {
    color: ${props => props.theme['base-text']};
    text-overflow: ellipsis;
    overflow: hidden;
}
`

export const IssueCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
`

export const IssueCardTitle = styled.h3`
    color: ${props => props.theme['base-title']}
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`