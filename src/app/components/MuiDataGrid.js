'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { STATUS_LIST } from '../data/constants';






export default function MuiDataGrid({rowsData}){
    const [rows, setRows] = React.useState(rowsData);
    const [rowModesModel, setRowModesModel] = React.useState({});


    const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
        event.defaultMuiPrevented = true;
    }
    };

    const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id) => () => {
    setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
        setRows(rows.filter((row) => row.id !== id));
    }
    };

    const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
    };

    const columnMan = [
        // { field: 'id', headerName: 'ID', width: 70},
        {
          field: "id",
          headerName: "ID",
          width: 100,
          headerClassName: "super-app-theme--header",
        },
        {
          field: "employeeId",
          headerName: "Employee ID",
          width: 100,
          headerClassName: "super-app-theme--header",
        },
        {
          field: "name",
          headerName: "Name",
          width: 200,
          headerClassName: "super-app-theme--header",
        },
        {
          field: "status",
          headerName: "Status",
          width: 200,
          headerClassName: "super-app-theme--header",
          editable: true,
          type: 'singleSelect',
          valueOptions: STATUS_LIST
        },
        {
          field: "remarks",
          headerName: "Remarks",
          width: 300,
          headerClassName: "super-app-theme--header",
          editable: true,
        },
        {
          field: "convertDate",
          headerName: "Date Created",
          width: 200,
          headerClassName: "super-app-theme--header",
        },
        // {
        //   field: "action",
        //   headerName: "Action",
        //   width: 300,
        //   headerClassName: "super-app-theme--header",
        //   renderCell: (params) => (
        //     <div>
        //       <Button
        //         color="success"
        //         variant="contained"
        //         onClick={() => handleButtonClick(params.row.id)}
        //       >
        //         <BorderColorIcon />
        //       </Button>
        //       <Button
        //         color="error"
        //         variant="contained"
        //         onClick={() => handleButtonClick(params.row.id)}
        //       >
        //         <PeopleAltIcon />
        //       </Button>
        //       <Button
        //         color="info"
        //         variant="contained"
        //         onClick={() => handleButtonClick(params.row.id)}
        //       >
        //         <AssignmentIndIcon />
        //       </Button>
        //     </div>
        //   ),
        // },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 150,
            cellClassName: 'actions',
            headerClassName: "super-app-theme--header",
            getActions: ({ id }) => {
 
              const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

              if (isInEditMode) {
                return [
                  <GridActionsCellItem
                    icon={<SaveIcon />}
                    label="Save"
                    sx={{
                      color: 'primary.main',
                    }}
                    onClick={handleSaveClick(id)}
                  />,
                  <GridActionsCellItem
                    icon={<CancelIcon />}
                    label="Cancel"
                    className="textPrimary"
                    onClick={handleCancelClick(id)}
                    color="inherit"
                  />,
                ];
              }
      
              return [
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={handleEditClick(id)}
                  color="inherit"
                />,
                <GridActionsCellItem
                  icon={<PeopleAltIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={handleEditClick(id)}
                  color="inherit"
                />,
                <GridActionsCellItem
                  icon={<AssignmentIndIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={handleEditClick(id)}
                  color="inherit"
                />,
                // <GridActionsCellItem
                //   icon={<DeleteIcon />}
                //   label="Delete"
                //   onClick={handleDeleteClick(id)}
                //   color="inherit"
                // />,
              ];
            },
          }
      ];

    return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columnMan}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}

        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        sx={{
          mt: 3,
          "& .super-app-theme--header": {
            fontWeight: 'bold !important',
            backgroundColor: "#f05623",
          },
        }}
      />
    </Box>
    );
}