import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TextField from '@mui/material/TextField';
import { ToastContainer } from 'react-toastify';
import InputAdornment from '@mui/material/InputAdornment';

import TablePagination from '@mui/material/TablePagination';
import { useApp } from 'src/AppContext';
import { useGetAllStatesQuery } from 'src/features/app/stateApi';

import useFormattedDate from 'src/hooks/useFormattedDate';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import { emptyRows, applyFilter, getComparator } from '../utils';




// ----------------------------------------------------------------------

export default function StateView() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const formatDate = useFormattedDate();
  const { data: states, isLoading: stateLoading, isError: stateError } = useGetAllStatesQuery()


  const { setOpen, setModalType, } = useApp()



  // Handle loading and error states for categories
  if (stateLoading) return <Typography>Loading...</Typography>;
  if (stateError) return <Typography>Error loading categories</Typography>;





  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: states?.states,
    comparator: getComparator(order, orderBy),
    filterName,
  });


  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <ToastContainer />

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography style={{ marginBottom: 40 }} variant="h4">Safety Circles <br /> <span style={{ color: '#292727', fontSize: "16px", fontWeight: 400, lineHeight: "19.36px" }}>Manage sfaety circles created by Yawa users.</span></Typography>

        <Stack direction="row" spacing={2}>
          <TextField
            value={filterName}
            onChange={handleFilterByName}
            placeholder="Search safety circle"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" />
                </InputAdornment>
              ),
              style: { height: '42px', width: "240px" },
            }}
            variant="outlined"
            size="small"
          />
          <Button
            onClick={() => {
              setModalType("create-state")
              setOpen(true)
            }}
            variant="contained"
            style={{ background: "#03BDE9", width: "181px", height: "40px", borderRadius: "4px" }}
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Create New State
          </Button>
        </Stack>
      </Stack>

      <Card>
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }} style={{ background: "#F2F2F2" }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={states?.total}
                numSelected={0} // No selected rows since we're not using checkboxes
                onRequestSort={handleSort}

                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'email', label: 'email' },
                  { id: 'city', label: 'City' },
                  { id: 'Admin', label: 'Admin' },
                  { id: 'Created', label: 'Created' },
                  { id: '', label: '' },

                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const formattedDate = formatDate(row?.createdAt);
                    return (
                      <UserTableRow
                        key={row?.id}
                        name={row?.name}
                        email={row?.email}
                        city={row?.city}
                        state={row?.state}
                        number={row?.phoneNumber}
                        status={row?.isEmailVerified}
                        created={formattedDate}
                      />

                    )
                  }
                  )}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, states?.total)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={states?.total}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
