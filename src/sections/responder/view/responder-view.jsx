import { useState } from 'react';

import Button from '@mui/material/Button';
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

import { useResponder } from 'src/hooks/useResponder';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export default function ResponderView() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const { responder} = useResponder()






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
    inputData: responder,
    comparator: getComparator(order, orderBy),
    filterName,
  });




  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography style={{marginBottom: 40}} variant="h4">First Responders<br /> <span style={{color: '#292727', fontSize: "16px", fontWeight: 400, lineHeight: "19.36px"}}>Manage safety oriented organizations withing the state.</span></Typography>

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
            variant="contained"
            style={{ background: "#03BDE9", width: "181px", height: "40px", borderRadius: "4px" }}
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
          Create New Circle
          </Button>
        </Stack>
      </Stack>

      <Card>
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }} style={{background: "#F2F2F2"}}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={responder?.length}
                numSelected={0} // No selected rows since we're not using checkboxes
                onRequestSort={handleSort}
                
               
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'Emergency No.', label: 'Emergency No.' },
                  { id: 'Handler', label: 'Handler' },
                  { id: 'Created', label: 'Created' },
                  { id: '', label: '' },
                  
                ]}
              />
             
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      name={row.name}
                      emerynum={row.members.length}
                      Handler={row.city}
                      Created={row.dateCreated}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, responder?.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={responder?.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
