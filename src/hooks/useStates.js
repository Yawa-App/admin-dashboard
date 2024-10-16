import { useApp } from "src/AppContext"
import { useCreatestateMutation, useGetAllStatesQuery } from "src/features/app/stateApi"
import { toast } from "react-toastify"



export const useStates = () => {
    const { setOpen } = useApp()
    const [createstate, { isLoading: stateLoading, isError, error: iserror }] = useCreatestateMutation()
    const { data: states, refetch: refetchState } = useGetAllStatesQuery()
    const handleinvitestate = async (name, email) => {

        const credentials = {
            name, email
        }
        console.log(credentials)

        // notify('Operation successful!', { type: 'success' });
        try {

            const response = await createstate(credentials).unwrap()
            console.log(response)
            toast.success(response?.message)
            refetchState()
            setOpen(false)
        } catch (error) {
            toast.error(error.data)
            console.log(error)

        }

    }





    return {
        handleinvitestate,
        stateLoading

    }
}