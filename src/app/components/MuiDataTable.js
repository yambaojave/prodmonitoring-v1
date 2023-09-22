"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { setSessionData } from "../utils/validationUtils";
import { postDataProvider } from "../services/HeaderAPI";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "workGroupId",
    headerName: "Barcode",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "machine",
    headerName: "Line",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "model",
    headerName: "Model",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "headerCount",
    headerName: "Head Count",
    width: 100,
    headerClassName: "super-app-theme--header",
    type: 'number'
  },
  {
    field: "shiftCode",
    headerName: "Shift Code",
    width: 100,
    headerClassName: "super-app-theme--header",
    type: 'number'
  },
  {
    field: "createdBy",
    headerName: "Created By",
    width: 100,
    headerClassName: "super-app-theme--header",
    type: 'number'
  },
  {
    field: "convertDate",
    headerName: "Date Created",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => (
      <div>
        <Button
          color="success"
          variant="contained"
          onClick={() => selectWorkGroup(params.row)}
        >
          <BorderColorIcon />
        </Button>
      </div>
    ),
  },
];

const selectWorkGroup = async (params) => {
  // console.log(params);

  const response = await postDataProvider(params.id)


  if(setSessionData(response.headerId, params.workGroupId)){
    window.location.reload(); 
  }
}

export default function MuiDataTable({ rows }) {
  const [filter, setFilter] = React.useState('');
  const [myState, setMyState] = React.useState(rows);


  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setFilter(inputValue);

    // Use the filterData function to filter the data based on the input value
    if (inputValue === '') {
      setMyState(rows);
    } else {
      // Use the filterData function to filter the data based on the input value
      const filtered = filterData(rows, inputValue);
      setMyState(filtered);
    }
  };

  function filterData(data, filter) {
    return data.filter((item) => {
      const workGroupIdString = String(item.workGroupId);
      return workGroupIdString.includes(filter);
    });
  }

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleInputChange} value={filter}/>
      <DataGrid
        rows={myState}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
          mt: 3,
          "& .super-app-theme--header": {
            fontWeight: 'bold !important',
            backgroundColor: "#f05623",
          },
        }}
      />
    </div>
  );
}
