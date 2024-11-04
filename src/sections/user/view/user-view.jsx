import { useState } from 'react';
import useFormattedDate from 'src/hooks/useFormattedDate';
import { useUsers } from 'src/hooks/useUsers';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useGetUsersQuery } from 'src/features/app/userSlide';


import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import { emptyRows, applyFilter, getComparator } from '../utils';


// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data, isLoading, isError } = useGetUsersQuery()



  const formatDate = useFormattedDate();

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
    inputData: data?.data?.users,
    comparator: getComparator(order, orderBy),
    filterName,
  });


  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading Can&apos;t get state endpoint</Typography>;



  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography style={{ marginBottom: 40 }} variant="h4">User Accounts <br /> <span style={{ color: '#292727', fontSize: "16px", fontWeight: 400, lineHeight: "19.36px" }}>Manage accounts created by Yawa app .</span></Typography>

        <Stack direction="row" spacing={2}>
          <TextField
            value={filterName}
            onChange={handleFilterByName}
            placeholder="Search users"
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

        </Stack>
      </Stack>

      <Card>
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }} style={{ background: "#F2F2F2" }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={data?.data?.totalUsers}
                numSelected={0}
                onRequestSort={handleSort}
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'email', label: 'Email' },
                  { id: 'city', label: 'City' },
                  { id: 'state', label: 'State' },
                  { id: 'number', label: 'Number' },
                  { id: 'status', label: 'Status' },
                  { id: 'created', label: 'Created' },
                  { id: '', label: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const formattedDate = formatDate(row?.dateCreated);

                    return (
                      <UserTableRow
                        key={row.id}
                        name={row.name}
                        email={row.email}
                        city={row.city}
                        state={row.state}
                        number={row.phoneNumber}
                        status={row.isEmailVerified}
                        created={formattedDate}
                        avatarUrl={row.picture}
                      />
                    );
                  })}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, data?.data?.totalUsers)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={data?.data?.totalUsers}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}