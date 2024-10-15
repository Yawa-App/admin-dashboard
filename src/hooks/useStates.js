import { useApp } from "src/AppContext"
import { useCreatestateMutation, useGetAllStatesQuery } from "src/features/app/stateApi"



export const useStates = () => {

    const { setOpen } = useApp()
    const [createstate, { isLoading: stateLoading, isError, error: iserror }] = useCreatestateMutation()
    const { data: states, refetch: refetchState } = useGetAllStatesQuery()
    const handleinvitestate = async (name, email) => {

        const credentials = {
            name, email
        }
        console.log(credentials)

        try {

            const response = await createstate(credentials).unwrap()
            console.log(response)
            refetchState()
            setOpen(false)
        } catch (error) {
            console.log(error)

        }

    }





    return {
        handleinvitestate,
        stateLoading

    }
}