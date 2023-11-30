import { useQuery } from "@tanstack/react-query"

const AllUser = () => {
    const {data: userData, isLoading, isError} = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const respons = await fetch('')
        }
    })
}