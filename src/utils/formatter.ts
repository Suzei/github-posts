import { formatDistance } from "date-fns"

export const formatDate = (number: any) => {
    return formatDistance(number, new Date(), { addSuffix: true })
}