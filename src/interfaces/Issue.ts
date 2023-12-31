export interface Issue {
    title: string
    body: string
    created_at: string
    number: number
    html_url?: string;
    user?: {
        login: string
    }
}