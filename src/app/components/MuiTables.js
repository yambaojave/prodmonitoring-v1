"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField } from "@mui/material";

export const MuiTables = ({ columns, rows }) => {
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
