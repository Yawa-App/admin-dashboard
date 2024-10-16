import { useApp } from "src/AppContext"
import { useCreateagencyMutation, useGetAllAgencyQuery } from "src/features/app/agencyApi"



export const useAgency = () => {
    const { setOpen } = useApp()
    const [createagency, { isLoading: agencyLoading, isError, error: iserror }] = useCreateagencyMutation()
    const { data: agency, refetch: refetchAgency } = useGetAllAgencyQuery()



    const handleinviteagency = async (name, email, categorys) => {

        const credentials = {
            name, email,
            category: [
                categorys
            ]
        }
        console.log(credentials)

        try {

            const response = await createagency(credentials).unwrap()
            console.log(response)
            refetchAgency()
            setOpen(false)
        } catch (error) {
            console.log(error)

        }

    }





    return {
        handleinviteagency,
        agencyLoading

    }
}