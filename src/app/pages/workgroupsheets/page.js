"use client"
import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';
import React from 'react'
import JuiLoading from '@/app/components/JuiLoading';
import { Card, CardContent, Divider, Typography } from '@mui/joy';
import { InfoOutlined } from '@mui/icons-material';

const JuiCard = dynamic(() => import('@/app/components/JuiCard'),
{
  loading: () => <JuiLoading />,
});

const MuiDataTable = dynamic(() => import('@/app/components/MuiDataTable'),
{
  loading: () => <JuiLoading />,
});


const rows = [
  {
      "id": 2,
      "workGroupId": "380169",
      "createdBy": 1,
      "machine": "D9S",
      "model": "5010973-AA",
      "headerCount": 10.0,
      "shiftCode": 3,
      "man_remark": "",
      "man_time_remark": "14:40:07.0459618",
      "machine_remark": "",
      "machine_time_remark": "00:00:00",
      "material_remark": "",
      "material_time_remark": "00:00:00",
      "action_remark": "Man\nMachine\nMethod\nMaterial",
      "action_time_remark": "14:04:41.6424359",
      "environment_remark": null,
      "environment_time_remark": "00:00:00",
      "dateCreated": "2023-09-06T13:57:10.1750631",
      "method": null,
      "mans": null,
      "machines": null,
      "environment": null,
      "convertDate": "2023-09-06 13:57:10"
  },
  {
      "id": 3,
      "workGroupId": 380468,
      "createdBy": 1,
      "machine": "D9S",
      "model": "5010973-AA",
      "headerCount": 11.0,
      "shiftCode": 3,
      "man_remark": "",
      "man_time_remark": "00:00:00",
      "machine_remark": "",
      "machine_time_remark": "00:00:00",
      "material_remark": "",
      "material_time_remark": "00:00:00",
      "action_remark": "Actual temperature reading 27.7",
      "action_time_remark": "09:36:07.7558050",
      "environment_remark": null,
      "environment_time_remark": "00:00:00",
      "dateCreated": "2023-09-07T09:12:31.1594003",
      "method": null,
      "mans": null,
      "machines": null,
      "environment": null,
      "convertDate": "2023-09-07 09:12:31"
  },
  {
      "id": 4,
      "workGroupId": 380584,
      "createdBy": 3,
      "machine": "D9S",
      "model": "5010973-AA",
      "headerCount": 10.0,
      "shiftCode": 3,
      "man_remark": "",
      "man_time_remark": "06:38:59.3834621",
      "machine_remark": "",
      "machine_time_remark": "06:39:14.8078585",
      "material_remark": "",
      "material_time_remark": "06:39:35.2944722",
      "action_remark": "ACTUAL TEMP. 27.4",
      "action_time_remark": "06:42:13.7467437",
      "environment_remark": null,
      "environment_time_remark": "00:00:00",
      "dateCreated": "2023-09-08T06:31:17.7743554",
      "method": null,
      "mans": null,
      "machines": null,
      "environment": null,
      "convertDate": "2023-09-08 06:31:17"
  }];

const latestWorkGroup = 
  {
    id: 381460,
    lines: "S18S",
    additionalCode: "",
    active_until: "2023-09-13T22:42:18",
    created_at: "2023-09-13T10:42:18",
    wgShiftcode: "3",
    wgShiftHours: 8.00000,
    wgShiftHeadcount: 14.00000,
    wgShiftPlannedOutput: 424.00000
  }


export default function page() {
  
  return (

      <Grid container spacing={2} className='p-3'>
      <Grid item xs={4}>
        {/* JuiCard to be change to a seperate component for creating for sheet */}
        <JuiCard latestWorkGroup={latestWorkGroup}/> 

      </Grid>
      <Grid item xs={8}>
      <Card
        variant="outlined"
        sx={{
          height: 700,
          maxWidth: "100%",
          mx: "auto",
          // to make the demo resizable
          overflow: "auto",
          // resize: 'horizontal',
        }}
      >
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
          4M/1E Details
        </Typography>
        <Divider inset="none" />

        <MuiDataTable rows={rows} columnName={"WORKGROUP"}/>
      </Card>
        
      </Grid>
    </Grid>

  )
}
