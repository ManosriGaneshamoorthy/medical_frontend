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
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

const columns = [
  { id: 'Sr', label: 'Sr', minWidth: 50 },
  { id: 'Id', label: 'Id', minWidth: 100 },
  { id: 'Name', label: 'Name', minWidth: 170 },
  { id: 'Date', label: 'Date', minWidth: 100 },
  { id: 'Time', label: 'Time', minWidth: 100 },
  { id: 'Status', label: 'Current Status', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 170 },
];

const Appointments = () => {
  const [rows, setRows] = useState([
    {
      Sr: '1',
      Id: 'API-123',
      Name: 'John Dew',
      Date: '20-2-2020',
      Time: '11:00:00 PM',
      Status: 'Approved',
      action: (
        <ul style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <li style={{ margin: '0px 5px' }}>
            <Link to="#">
              <IconButton>
                <PageviewIcon />
              </IconButton>
            </Link>
          </li>
          <li style={{ margin: '0px 5px' }}>
            <IconButton onClick={() => handleDelete('API-123')}>
              <DeleteIcon />
            </IconButton>
          </li>
          /
        </ul>
      ),
    },
    // ... other rows
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState('');
  const [editedAppointment, setEditedAppointment] = useState({
    Sr: '',
    Id: '',
    Name: '',
    Date: '',
    Time: '',
    Status: '',
    action: null,
  });

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.Id !== id);
    setRows(updatedRows);
  };

  const handleEdit = (id) => {
    const appointmentToEdit = rows.find((row) => row.Id === id);
    setEditedAppointment(appointmentToEdit);
    setEditId(id);
    setShowForm(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setEditedAppointment((prevAppointment) => ({ ...prevAppointment, [name]: value }));
  };

  const handleFormSubmit = () => {
    if (editId) {
      const updatedRows = rows.map((row) => (row.Id === editId ? editedAppointment : row));
      setRows(updatedRows);
    } else {
      // Append a new row for a new appointment
      setRows((prevRows) => [
        ...prevRows,
        {
          Sr: (prevRows.length + 1).toString(),
          ...editedAppointment,
          action: (
            <ul style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <li style={{ margin: '0px 5px' }}>
                <Link to="#">
                  <IconButton>
                    <PageviewIcon />
                  </IconButton>
                </Link>
              </li>
              <li style={{ margin: '0px 5px' }}>
                <IconButton onClick={() => handleDelete(editedAppointment.Id)}>
                  <DeleteIcon />
                </IconButton>
              </li>
              <li style={{ margin: '0px 5px' }}>
                <IconButton onClick={() => handleEdit(editedAppointment.Id)}>
                  <AddCircleIcon />
                </IconButton>
              </li>
            </ul>
          ),
        },
      ]);
    }

    setEditId('');
    setEditedAppointment({
      Sr: '',
      Id: '',
      Name: '',
      Date: '',
      Time: '',
      Status: '',
      action: null,
    });
    setShowForm(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAddAppointment = () => {
    setEditedAppointment({
      Sr: '',
      Id: '',
      Name: '',
      Date: '',
      Time: '',
      Status: '',
      action: null,
    });
    setEditId('');
    setShowForm(true);
  };

  return (
    <div className="dashboard-body">
      <div className="heading-row">
        <h2>Appointments</h2>
        <IconButton onClick={handleAddAppointment}>
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
                          {column.id === 'action' ? row.action : row[column.id]}
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

      {/* Form for adding/editing an appointment */}
      <Dialog open={showForm} onClose={() => setShowForm(false)}>
        <DialogTitle>{editId ? 'Edit Appointment' : 'Add New Appointment'}</DialogTitle>
        <DialogContent>
          <form>
            {columns.map((column) => (
              <TextField
                key={column.id}
                label={column.label}
                name={column.id}
                value={editedAppointment[column.id]}
                onChange={handleFormChange}
                margin="normal"
                fullWidth
              />
            ))}
            <Button onClick={handleFormSubmit} color="primary">
              {editId ? 'Update Appointment' : 'Add Appointment'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Appointments;

