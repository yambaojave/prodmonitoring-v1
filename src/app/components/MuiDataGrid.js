"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { STATUS_LIST } from "../data/constants";
import JuiModal from "./JuiModal";

export default function MuiDataGrid({ rowsData, columnName }) {
  const [openModal, setOpenModal] = React.useState({
    status : false,
    name: ''
  });
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

  const handleModalInput = (e, name) => {
    console.log(!openModal.status)
    if(!openModal.status){
      setOpenModal({
        status : true,
        name : name
      })
    }
    else {
      setOpenModal({
        status : false,
        name : ""
      })
    }
  }

  // Setting of Columns to be used for 4M/1E modules
  const columnMan = [
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
      type: "singleSelect",
      valueOptions: STATUS_LIST,
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
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      headerClassName: "super-app-theme--header",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={`save-${id}`}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={`cancel-${id}`}
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
          key={`edit-${id}`}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={`trainee-${id}`}
            icon={<PeopleAltIcon />}
            label="Edit"
            className="textPrimary"
            name="trainee"
            onClick={(e) => handleModalInput(e, 'TRAINEE')}
            color="inherit"
          />,
          <GridActionsCellItem
            key={`replacement-${id}`}
            icon={<AssignmentIndIcon />}
            label="Edit"
            className="textPrimary"
            name="replacement"
            onClick={(e) => handleModalInput(e, 'REPLACEMENT_OPERATOR')}
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
    },
  ];

  const columnMachine = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "machine_name",
      headerName: "Machine Name",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      headerClassName: "super-app-theme--header",
      editable: true,
      type: "singleSelect",
      valueOptions: STATUS_LIST,
    },
    {
      field: "remark",
      headerName: "Remarks",
      width: 130,
      headerClassName: "super-app-theme--header",
      editable: true,
    },
    {
      field: "date_created",
      headerName: "Date Created",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      headerClassName: "super-app-theme--header",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={`save-${id}`}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={`cancel-${id}`}
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
            key={`edit-${id}`}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,

        ];
      },
    },
  ];

  const columnMethod = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "controlNumber",
      headerName: "Control Number",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "processNumber",
      headerName: "Process Number",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "date_created",
      headerName: "Date Created",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
  ];

  const columnMaterial = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "componentItem",
      headerName: "Component Item",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "description",
      headerName: "Description",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "remarks",
      headerName: "Remarks",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
  ];

  const columnEnvironment = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "temperature",
      headerName: "Temperature",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "lighting",
      headerName: "Lighting",
      width: 100,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "remark",
      headerName: "Remark",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "updatedDate",
      headerName: "Created Date",
      width: 150,
      headerClassName: "super-app-theme--header",
    },
  ];

  let columns;
  switch (columnName) {
    case "MAN":
      columns = columnMan;
      break;
    case "MACHINE":
      columns = columnMachine;
      break;
    case "METHOD":
      columns = columnMethod;
      break;
    case "MATERIAL":
      columns = columnMaterial;
      break;
    case "ENVIRONMENT":
      columns = columnEnvironment;
      break;
    default:
      columns = [];
  }

  return (
    <>
      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
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
              fontWeight: "bold !important",
              backgroundColor: "#f05623",
            },
          }}
        />
      </Box>
      <JuiModal state={openModal} close={handleModalInput} />
    </>
  );
}
