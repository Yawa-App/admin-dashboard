import PropTypes from 'prop-types';
import React, { useMemo, useState, useContext, createContext, } from 'react';
// Import PropTypes at the top of your file

// Create the context
const AppContext = createContext({
    email: '', setEmail: () => { },
    user: null, setUser: () => { },
    open: false, setOpen: () => { },
    modalType: '', setModalType: () => { },
    endDate: null, setEndDate: () => { },
    startDate: null, setStartDate: () => { },
    projectName: '', setProjectName: () => { },
    selectedBranch: '', setSelectedBranch: () => { },
    selectedAssignee: '', setSelectedAssignee: () => { },
    projectDescription: '', setProjectDescription: () => { },
    // Default values structured similarly to actual usage
});

// Provider component
export const AppProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [endDate, setEndDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [projectName, setProjectName] = useState('');
    const [selectedBranch, setSelectedBranch] = useState("");
    const [selectedAssignee, setSelectedAssignee] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const value = useMemo(() => ({
        email, setEmail, user, setUser,
        open, setOpen,
        modalType, setModalType,
        endDate, setEndDate,
        startDate, setStartDate,
        projectName, setProjectName,
        selectedBranch, setSelectedBranch,
        selectedAssignee, setSelectedAssignee,
        projectDescription, setProjectDescription
    }), [email, user, open, modalType, endDate, startDate, projectName, selectedBranch, selectedAssignee, projectDescription]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// Add PropTypes validation for children
AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};

// Custom hook to use the context
export const useApp = () => useContext(AppContext);
