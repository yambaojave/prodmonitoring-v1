import { MuiDataTable } from '@/app/components/MuiDataTable';
import { MuiPieChart } from '@/app/components/MuiPieChart';
import { Box, Grid } from '@mui/material';
import React from 'react'

const rows = [
  { id: 11, name: 'Snow',  age: 35 },
  { id: 12, name: 'Lannister', age: 42 },
  { id: 13, name: 'Lannister', age: 45 },
  { id: 14, name: 'Stark', age: 16 },
  { id: 15, name: 'Targaryen', age: null },
  { id: 16, name: 'Melisandre', age: 150 },
  { id: 17, name: 'Clifford', age: 44 },
  { id: 18, name: 'Frances', age: 36 },
  { id: 19, name: 'Roxie', age: 65 },
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
