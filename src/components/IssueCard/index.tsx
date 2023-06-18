import { formatDistance } from "date-fns";
import { Issue } from "../../interfaces/Issue";
import { IssueCardContainer, IssueCardTitle, IssueCardWrapper, TitleWrapper } from "./styles";
import { formatDate } from "../../utils/formatter";

export function IssueCard({ body, title, created_at }: Issue) {
    return (
        <IssueCardContainer>
            <IssueCardWrapper>
                <TitleWrapper>
                    <IssueCardTitle>{title}</IssueCardTitle>
                    <span>{created_at}</span>
                </TitleWrapper>
                <p>{body}</p>
            </IssueCardWrapper>
        </IssueCardContainer>
    )
}