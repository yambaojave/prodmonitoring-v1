"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const columnMan = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    width: 90,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 300,
    renderCell: (params) => (
      <div>
        <Button color="success" variant="contained" onClick={() => handleButtonClick(params.row.id)}><BorderColorIcon /></Button>
        <Button color="error" variant="contained" onClick={() => handleButtonClick(params.row.id)}><PeopleAltIcon /></Button>
        <Button color="info" variant="contained" onClick={() => handleButtonClick(params.row.id)}><AssignmentIndIcon /></Button>
      </div>
    ),
  },
];

const columnMachine = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  {
    field: 'action',
    headerName: 'Action',
    width: 300,
    renderCell: (params) => (
      <div>
        <Button color="success" variant="contained" onClick={() => handleButtonClick(params.row.id)}><BorderColorIcon /></Button>
      </div>
    ),
  },
];

function handleButtonClick(id) {
  alert(`Button clicked for ID ${id}`);
  // Add your custom logic here
}

export const MuiDataTable = ({ rows, columnName }) => {

  let columns;
  switch (columnName) {
    case 'MAN':
      columns = columnMan;
      break;
    case 'MACHINE':
      columns = columnMachine;
      break;
    default:
      columns = [];
  }

  return (
    <div style={{ height: '100%', width: "100%" }}>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{mt : 3}}
      />
    </div>
  );
};
