import { createContext } from "use-context-selector";
import { ReactNode, useState, useEffect, useCallback } from "react";
import { User } from "../interfaces/User";
import { api } from "../lib/api";
import { Issue } from "../interfaces/Issue";

interface IssuesContextProps {
  user?: User;
  issues?: Issue[];
  singleIssue?: Issue;
  GetIssues?: (query?: string) => void;
  GetSingleIssue?: (number: number) => void;
}

export const IssuesContext = createContext({} as IssuesContextProps);

export const IssuesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User>();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [singleIssue, setSingleIssue] = useState<Issue>();
  const GetUser = useCallback(async () => {
    const { data } = await api.get<User>("users/Suzei");
    setUser(data);
  }, []);

  const GetIssues = useCallback(async (query?: string) => {
    console.log("Essa é a query:", query);
    console.log("teste");
    const response = await api.get<Issue[]>(`/search/issues`, {
      params: {
        q: `repo:Suzei/github-posts ${query}`,
      },
    });
    setIssues(response.data.items);
  }, []);

  const GetSingleIssue = useCallback(async (number: number) => {
    const response = await api.get(`repos/Suzei/github-posts/issues/${number}`);

    setSingleIssue(response.data);
  }, []);

  useEffect(() => {
    GetUser();
    GetIssues("");
  }, []);

  return (
    <IssuesContext.Provider
      value={{ user, issues, GetIssues, GetSingleIssue, singleIssue }}
    >
      {children}
    </IssuesContext.Provider>
  );
};
