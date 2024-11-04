import { useDispatch } from 'react-redux';

import { useRouter } from 'src/routes/hooks';

import { setIsAuth } from 'src/features/slide/authSlice';
import { useLoginMutation } from 'src/features/app/authSlide';



export const useAuth = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [login] = useLoginMutation();


    const handlelogin = async (email, password, setLoading, setError) => {

        try {
            const data = await login({ email, password }).unwrap();
            console.log(data)
            dispatch(setIsAuth(data))
            localStorage.setItem('accessToken', data.token);
            console.log("dashboard")
            router.push('/dashboard');
        } catch (error) {
            setError(error.data)
            console.log(error)
        } finally {
            setLoading(false)
        }

        // dispatch(setCredentials({ ...userData, user: email }));
    }



    return {
        handlelogin
    }
}

