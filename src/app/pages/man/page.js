import { MuiPieChart } from '@/app/components/MuiPieChart';
import { MuiDataTable } from '@/app/components/MuiDataTable';
import { Box, Grid } from '@mui/material';
import React from 'react'


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
  


export default function page() {

  


  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>        
        <MuiDataTable rows={rows} columnName={"MAN"}/>
      </Grid>
      <Grid item xs={4}>
        <Box xs={{mt:3}}>
          <MuiPieChart />
        </Box>
      </Grid>
    </Grid>
  )
}
