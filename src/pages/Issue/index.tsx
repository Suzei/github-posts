import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { useContextSelector } from "use-context-selector";
import { IssuesContext } from "../../contexts/IssuesContext";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Code, IssueContainer } from "./styles";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import {
  solarizedDark,
  tomorrowNightBlue,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
export function Issue() {
  const { number } = useParams();
  const GetSingleIssue = useContextSelector(IssuesContext, (context) => {
    return context.GetSingleIssue;
  });

  const singleIssue = useContextSelector(IssuesContext, (context) => {
    return context.singleIssue;
  });

  useEffect(() => {
    GetSingleIssue(number);
  }, []);

  return (
    <>
      <Header variant="issue" />
      <IssueContainer>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <Code
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                  style={solarizedDark}
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
          children={singleIssue?.body}
        ></ReactMarkdown>
      </IssueContainer>
    </>
  );
}
