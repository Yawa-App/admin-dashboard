// ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes



const ProtectedRoute = ({
    isAuthenticated,
    children,
}) => {
    if (!isAuthenticated) {
        return <Navigate to='/login' replace />;
    }

    return children;
};

// Define prop types for the component
ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired, // isAuthenticated should be a boolean
    children: PropTypes.node.isRequired, // children can be any renderable React nodes
};

export default ProtectedRoute;
