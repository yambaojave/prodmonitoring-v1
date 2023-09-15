import dynamic from 'next/dynamic';
import { Box, Grid } from '@mui/material';
import React from 'react'

const MuiPieChart = dynamic(() => import('@/app/components/MuiPieChart'));
const MuiDataTable = dynamic(() => import('@/app/components/MuiDataTable'));

const rows = [
  {
      "id": 1,
      "machine_name": "S18S-11",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.16805",
      "time_update": "08:21:38.1665777",
      "headerId": 1
  },
  {
      "id": 2,
      "machine_name": "ABS15171",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.19373",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 3,
      "machine_name": "ABS21001",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.200676",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 4,
      "machine_name": "ABS15172",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2055373",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 5,
      "machine_name": "PESE0381",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2111666",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 6,
      "machine_name": "ABS15025",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2181246",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 7,
      "machine_name": "ABS19001",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.223432",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 8,
      "machine_name": "ABS21003",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2349333",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 9,
      "machine_name": "ABS21004",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2433193",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 10,
      "machine_name": "ABS15042",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2517346",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 11,
      "machine_name": "S18S-V1",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2594643",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 12,
      "machine_name": "ABS15001",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2672585",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 13,
      "machine_name": "ABS15031",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2780737",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 14,
      "machine_name": "ABS21002",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2905481",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 15,
      "machine_name": "ABS08076",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-06T08:31:57.2994686",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 18,
      "machine_name": "ABS15027",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-11T10:06:49.2202743",
      "time_update": "00:00:00",
      "headerId": 1
  },
  {
      "id": 19,
      "machine_name": "S18S-V2",
      "status": "OK",
      "remark": "",
      "date_created": "2023-09-11T10:06:49.3195387",
      "time_update": "00:00:00",
      "headerId": 1
  }
];

export default function page() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>        
        <MuiDataTable rows={rows} columnName={"MACHINE"}/>
      </Grid>
      <Grid item xs={4}>
        <Box xs={{mt:3}}>
          <MuiPieChart />
        </Box>
      </Grid>
    </Grid>
  )
}
