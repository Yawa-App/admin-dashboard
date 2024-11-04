import { toast } from "react-toastify"

import { useApp } from "src/AppContext"
import { useGetAllStatesQuery, useCreatestateMutation } from "src/features/app/stateApi"



export const useStates = () => {
    const { setOpen } = useApp()
    const [createstate, { isLoading: stateLoading, }] = useCreatestateMutation()
    const { refetch: refetchState } = useGetAllStatesQuery()
    const handleinvitestate = async (name, email) => {

        const credentials = {
            name, email
        }
        console.log(credentials)

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