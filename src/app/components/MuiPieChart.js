"use client"

import { Stack } from '@mui/material';
import React from 'react'
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const datas = [
    { label: 'OK', value: 400, color: 'green' },
    { label: 'NOT OK', value: 100, color: 'red'},
    { label: 'CONDITION', value: 300, color: 'yellow' },
  ];

  export default function MuiPieChart() {
    // * For Hydration issue create a domLoad state 
    const [domLoaded, setDomLoaded] = React.useState(false);

    React.useEffect(() => {
        setDomLoaded(true);
      }, []);

        const customLegend = datas.map((entry) => ({
          value: entry.label,
          color: entry.color,
        }));

  return (
    <>
    {domLoaded && (
    <Stack direction="row">
        <div className='mx-auto mt-3'>
        <PieChart width={400} height={400}>
        <Pie
            data={datas}
            cx={200}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ label, value }) => `${label}: ${value}`}
        >
            {datas.map((entry, index) => (
            <Cell key={`cell-${entry.label}`} fill={entry.color} />
            ))}
        </Pie>
      {/* <Tooltip formatter={(value, name) => name}/> */}

      <Legend payload={customLegend} layout="vertical"/>
        
    </PieChart>
        </div>
      
    
        
    </Stack>
    )}
    </>
  )
}
