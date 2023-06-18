import { formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale"

export const formatDate = (number: Date) => {
    return formatDistance(new Date(number), new Date(), {
        locale: ptBR
    })
}