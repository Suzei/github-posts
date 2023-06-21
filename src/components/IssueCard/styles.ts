import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


export const IssueCardContainer = styled(Link)`
background: ${props => props.theme['base-post']};
border-radius: 10px;
outline: none;
text-decoration: none;
transition: border 0.5s;
height: 210px;



p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;
    
     color: ${(props) => props.theme['base-text']};

}
`

export const IssueCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 1rem;
    
`

export const IssueCardTitle = styled.h3`
    color: ${props => props.theme['base-title']}
`

export const TitleWrapper = styled.div`
    display: flex;
    color: ${props => props.theme['base-span']};
    align-items: center;
    gap: 3px;
    justify-content: space-between;

    span {
        white-space: nowrap;
    }
`