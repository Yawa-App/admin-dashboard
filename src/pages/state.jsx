import { Helmet } from 'react-helmet-async';
import { StateView } from 'src/sections/state/view';


// ----------------------------------------------------------------------

export default function StatePage() {
    return (
        <>
            <Helmet>
                <title> User | Yawa Dashboard </title>
            </Helmet>

            <StateView />
        </>
    );
}
