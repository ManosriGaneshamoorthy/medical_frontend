import React, { useState } from 'react';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@mui/material';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

function Patients() {
  const columns = [
    { id: 'Sr', label: 'Sr', minWidth: 50 },
    { id: 'Id', label: 'Id', minWidth: 100 },
    { id: 'Name', label: 'Name', minWidth: 170 },
    { id: 'Department', label: 'Department', minWidth: 100 },
    { id: 'Room', label: 'Room Number', minWidth: 100 },
    { id: 'Join', label: 'Admit Date', minWidth: 100 },
    { id: 'Status', label: 'Current Status', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
  ];

  const [rows, setRows] = useState([
    {
      Sr: '1',
      Id: 'PAS-123',
      Name: 'John Dew',
      Department: 'ICU',
      Room: '101',
      Join: '20-2-2020',
      Status: 'Admitted',
    },
    // ... other rows
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [newPatient, setNewPatient] = useState({
    Sr: '',
    Id: '',
    Name: '',
    Department: '',
    Room: '',
    Join: '',
    Status: '',
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.Id !== id);
    setRows(updatedRows);
  };

  const handleAddNew = () => {
    setOpenAddForm(true);
  };

  const handleAddFormChange = (event) => {
    const { name, value } = event.target;
    setNewPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleAddFormSubmit = () => {
    const newId = `PAS-${rows.length + 1}`;
    const newRow = {
      Sr: (rows.length + 1).toString(),
      Id: newId,
      ...newPatient,
    };
    setRows((prevRows) => [...prevRows, newRow]);
    setOpenAddForm(false);
    setNewPatient({
      Sr: '',
      Id: '',
      Name: '',
      Department: '',
      Room: '',
      Join: '',
      Status: '',
    });
  };

  return (
    <div className="dashboard-body">
      <div className="heading-row">
        <h2>Patients Records</h2>
        <IconButton onClick={handleAddNew}>
          <AddCircleIcon />
        </IconButton>
      </div>
      <div className="table">
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.Id}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'action' ? (
                            <ul
                              style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                              }}
                            >
                              <li style={{ margin: '0px 5px' }}>
                                <Link to="#">
                                  <IconButton>
                                    <PageviewIcon />
                                  </IconButton>
                                </Link>
                              </li>
                              <li style={{ margin: '0px 5px' }}>
                                <Link to="#">
                                  <IconButton>
                                    <EditIcon />
                                  </IconButton>
                                </Link>
                              </li>
                              <li style={{ margin: '0px 5px' }}>
                                <IconButton onClick={() => handleDelete(row.Id)}>
                                  <DeleteIcon />
                                </IconButton>
                              </li>
                            </ul>
                          ) : (
                            row[column.id]
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      <Dialog open={openAddForm} onClose={() => setOpenAddForm(false)}>
        <DialogTitle>Add New Patient</DialogTitle>
        <DialogContent>
          <form>
            {columns.map((column) => (
              <TextField
                key={column.id}
                label={column.label}
                name={column.id}
                value={newPatient[column.id]}
                onChange={handleAddFormChange}
                margin="normal"
                fullWidth
              />
            ))}
            <Button onClick={handleAddFormSubmit} color="primary">
              Add Patient
            </Button>
            <Button
                        style={{ margin: '5px 100px' }}
                        variant="contained"
                        color="info"
                        component={Link}
                        to="/Attendance"
                    >
                        Attendance
                    </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Patients;
