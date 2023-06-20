import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { useContextSelector } from "use-context-selector";
import { IssuesContext } from "../../contexts/IssuesContext";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IssueContainer } from "./styles";
export function Issue() {
    const { number } = useParams()
    const GetSingleIssue = useContextSelector(IssuesContext, (context) => {
        return context.GetSingleIssue
    })

    const singleIssue = useContextSelector(IssuesContext, (context) => {
        return context.singleIssue
    })

    useEffect(() => {
        GetSingleIssue(number)
    }, [])

    return (
        <>
            <Header variant="issue" />
            <IssueContainer>
                <ReactMarkdown components={{ h2: 'span' }} children={singleIssue?.body}></ReactMarkdown>
            </IssueContainer>
        </>
    )
}