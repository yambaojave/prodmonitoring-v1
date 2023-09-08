"use client"
import { PieChart } from '@mui/x-charts/PieChart';
import { Stack } from '@mui/material';
import React from 'react'

const data = [
    { label: 'Group A', value: 400, color: 'red' },
    { label: 'Group B', value: 100 },
    { label: 'Group C', value: 300 },
  ];

export const MuiPieChart = () => {
  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 150,
            outerRadius: 70,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={400}
        legend={{ hidden: true }}
      />
    </Stack>
  )
}
