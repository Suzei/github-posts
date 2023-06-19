import { useForm } from "react-hook-form"
import { SearchInputContainer } from "./styles"
import { useContextSelector } from "use-context-selector"
import { IssuesContext } from "../../contexts/IssuesContext"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const SearchParamsType = z.object({
    query: z.string().nullable(),
})

type SearchParamProps = z.infer<typeof SearchParamsType>

export function SearchInput() {
    const GetIssues = useContextSelector(IssuesContext, (context) => {
        return context.GetIssues
    })



    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchParamProps>({
        resolver: zodResolver(SearchParamsType),

    })
    const issues = useContextSelector(IssuesContext, (context) => {
        return context.issues
    })
    async function handleQuerySubmit(data: SearchParamProps) {
        GetIssues(data.query)
    }

    return (

        <SearchInputContainer>
            <form onSubmit={handleSubmit(handleQuerySubmit)}>
                <div>
                    <h3>Publicações</h3>
                    <span>{issues?.length} publicações</span>
                </div>
                <input disabled={isSubmitting} {...register('query')} placeholder="Buscar conteúdo" />
            </form>
        </SearchInputContainer>
    )
}