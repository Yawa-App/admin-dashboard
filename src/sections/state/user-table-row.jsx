import { useState } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

export default function UserTableRow({
  name,
  email,
  city,
  state,
  number,
  status,
  created,
}) {
  const [open, setOpen] = useState(null);


  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };



  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center">
            <Typography sx={{ px: 2 }} noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell >{email}</TableCell>
        <TableCell>{number || "Ikeji"}</TableCell>
        <TableCell>
          <Label color={status ? 'success' : 'error'}>{status ? "success" : "pending"}</Label>
        </TableCell>
        <TableCell>{created}</TableCell>

        <TableCell align="right">
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
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.any.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};
