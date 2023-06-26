import { formatDistance } from "date-fns";
import { Issue } from "../../interfaces/Issue";
import {
  IssueCardContainer,
  IssueCardTitle,
  IssueCardWrapper,
  TitleWrapper,
} from "./styles";
import { formatDate } from "../../utils/formatter";

export function IssueCard({ body, title, created_at, number }: Issue) {
  return (
    <IssueCardContainer to={`/issue/${number}`}>
      <IssueCardWrapper>
        <TitleWrapper>
          <IssueCardTitle>{title}</IssueCardTitle>
          <span>{formatDate(created_at)}</span>
        </TitleWrapper>
        <p>{body.replace("#", "")}</p>
      </IssueCardWrapper>
    </IssueCardContainer>
  );
}
