import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Stack
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton'; // Import LoadingButton from Material UI Lab
import { useGetcategoriesQuery } from 'src/features/app/authSlide';
import { useApp } from 'src/AppContext';
import { useAgency } from 'src/hooks/useAgency';

const InviteAgencies = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false); // State for managing the loading button
    const { setOpen } = useApp()
    const { data: categories, isLoading, error } = useGetcategoriesQuery();

    const { handleinviteagency,
        agencyLoading } = useAgency()


    const handleSubmit = (e) => {
        e.preventDefault();

        handleinviteagency(fullName, email, category)


        // Log the form data to the console, ensuring the category name is logged
        console.log("Form Submission:", {
            fullName,
            email,
            categoryName: category,  // Explicitly label it as categoryName for clarity
        });

    };

    // Handle loading and error states for categories
    if (isLoading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error loading categories</Typography>;

    return (
        <Box
            sx={{
                margin: 'auto',
                padding: 3,
                borderRadius: 2,
                backgroundColor: '#fff',
            }}
            rowGap={3}
        >
            <Typography variant="h5" gutterBottom>
                Invite Agency
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    {/* Full Name Input */}
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    {/* Email Input */}
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Report Category Select */}
                    <FormControl fullWidth>
                        <InputLabel>Report Category</InputLabel>
                        <Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            label="Report Category"
                        >
                            <MenuItem value="">
                                <em>Select a category</em>
                            </MenuItem>
                            {categories?.data?.map((item, index) => (
                                <MenuItem key={index} value={item?._id}>{item?.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Buttons: Cancel & Submit */}
                    <Stack direction="row" spacing={2} alignSelf="flex-end">
                        <Button onClick={() => {
                            setOpen(false)
                        }} sx={{ bgcolor: 'grey', color: "#000" }}>
                            Cancel
                        </Button>

                        {/* LoadingButton for Submit */}

                        <LoadingButton
                            type="submit"

                            loading={agencyLoading} // Set loading state to the button
                            sx={{
                                bgcolor: "#000",
                                color: '#fff'
                            }}
                        >
                            Submit
                        </LoadingButton>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

// Correct export statement

export default InviteAgencies
