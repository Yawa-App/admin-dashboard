import { useState } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Add this styled component for the user icon
const StyledIcon = styled('div')(({ theme }) => ({
  width: 200,
  height: 200,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
}));

export default function UserTableRow({
  name,
  email,
  city,
  state,
  number,
  status,
  created,
  avatarUrl,
}) {
  const [open, setOpen] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name,
    email,
    city,
    state,
    number,
    status,
    avatarUrl,
  });

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };



  const handleOpenDialog = () => {
    setOpenDialog(true);
    handleCloseMenu();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (event) => {
    const { name: fieldName, value } = event.target;
    setEditedUser((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSave = () => {
    // Here you would typically send the updated user data to your backend
    console.log('Updated user:', editedUser);
    handleCloseDialog();
  };

  const getAvatarContent = () => {
    if (avatarUrl) {
      return <Avatar alt={name || 'Anonymous'} src={avatarUrl} />;
    }
    return (
      <Avatar alt={name || 'Anonymous'} sx={{ bgcolor: 'primary.main' }}>
        <Iconify icon="mdi:user" width={24} height={24} />
      </Avatar>
    );
  };

  const displayName = name && name.trim() !== '' ? name : 'Anonymous';

  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell component="th" scope="row" sx={{ paddingX: 2 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            {getAvatarContent()}
            <Typography variant="subtitle2" noWrap>
              {displayName}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell sx={{ paddingX: 2 }}>{email}</TableCell>
        <TableCell sx={{ paddingX: 2 }}>{city}</TableCell>
        <TableCell sx={{ paddingX: 2 }}>{state}</TableCell>
        <TableCell sx={{ paddingX: 2 }}>{number}</TableCell>
        <TableCell sx={{ paddingX: 2 }}>
          <Label color={status ? 'success' : 'error'}> {status ? "success" : "pending"}</Label>
        </TableCell>
        <TableCell sx={{ paddingX: 2 }}>{created}</TableCell>
        <TableCell align="right" sx={{ paddingX: 2 }}>
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleOpenDialog}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            width: '80%',
            maxHeight: '80vh',
          },
        }}
      >
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              {editedUser.avatarUrl ? (
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <img
                    src={editedUser.avatarUrl}
                    alt={displayName}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                </Box>
              ) : (
                <StyledIcon>
                  <Iconify icon="mdi:user" sx={{ width: 100, height: 100, color: 'white' }} />
                </StyledIcon>
              )}
              <Typography variant="h6" align="center">
                {displayName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                margin="dense"
                name="name"
                label="Name"
                type="text"
                variant="outlined"
                value={editedUser.name}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="dense"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={editedUser.email}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="dense"
                name="city"
                label="City"
                type="text"
                variant="outlined"
                value={editedUser.city}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="dense"
                name="state"
                label="State"
                type="text"
                variant="outlined"
                value={editedUser.state}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="dense"
                name="number"
                label="Number"
                type="text"
                variant="outlined"
                value={editedUser.number}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="dense"
                name="status"
                label="Status"
                type="text"
                variant="outlined"
                value={editedUser.status}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

UserTableRow.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
};