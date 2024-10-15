
import { Helmet } from 'react-helmet-async';
import { AgenciesView } from 'src/sections/agencies/view';


// ----------------------------------------------------------------------

export default function AgenciesPage() {
    return (
        <>
            <Helmet>
                <title> User | Yawa Dashboard </title>
            </Helmet>

            <AgenciesView />
        </>
    );
}
