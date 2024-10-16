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
import { useGetAllStatesQuery } from 'src/features/app/otherApi';
import { useStates } from 'src/hooks/useStates';

const Invitestate = () => {
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false); // State for managing the loading button
    const { setOpen } = useApp()
    // const { data: categories, isLoading, error } = useGetcategoriesQuery();
    const { data: categories, isLoading, error } = useGetAllStatesQuery()
    const { handleinvitestate,
        stateLoading } = useStates()

    const handleSubmit = (e) => {
        e.preventDefault();

        handleinvitestate(category, email)

        // Log the form data to the console, ensuring the category name is logged
        console.log("Form Submission:", {
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
                Invite a state
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>


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
                        <InputLabel>States</InputLabel>
                        <Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            label="Report Category"
                        >
                            <MenuItem value="">
                                <em>Select a category</em>
                            </MenuItem>
                            {categories?.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
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

                            loading={stateLoading} // Set loading state to the button
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
export default Invitestate;
