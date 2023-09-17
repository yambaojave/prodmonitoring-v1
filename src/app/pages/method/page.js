import dynamic from "next/dynamic";
import { Box, Grid } from "@mui/material";
import React from 'react'
import { Card, Divider, Typography } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import JuiLoading from "@/app/components/JuiLoading";
import { pieCommute } from "@/app/utils/helpers";

const MuiPieChart = dynamic(() => import("@/app/components/MuiPieChart"), {
  loading: () => <JuiLoading />,
});
const MuiDataGrid = dynamic(() => import("@/app/components/MuiDataGrid"), {
  loading: () => <JuiLoading />,
});

const rows = [
  {
      "id": 7,
      "controlNumber": "HXHDAS15N",
      "processNumber": "AS15",
      "status": "NOT OK",
      "date_created": "2023-09-12T16:37:09.6186504",
      "headerId": 1
  },
  {
      "id": 8,
      "controlNumber": "HXHDAS01N",
      "processNumber": "AS01",
      "status": "OK",
      "date_created": "2023-09-14T09:10:10.9204092",
      "headerId": 1
  }
];

export default function page() {
  return (
    <Grid container spacing={2} className="p-3">
      <Grid item xs={8}>
        <Card
          variant="outlined"
          sx={{
            height: 700,
            maxWidth: "100%",
            mx: "auto",
            overflow: "auto",
          }}
        >
          <Typography level="title-lg" startDecorator={<InfoOutlined />}>
            Method Details
          </Typography>
          <Divider style={{ background: "black" }} inset="none" />

          <MuiDataGrid rowsData={rows} columnName={"METHOD"} />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Box xs={{ mt: 3 }}>
          <Card
            variant="outlined"
            sx={{
              height: 700,
              maxWidth: "100%",
              mx: "auto",
              overflow: "auto",
            }}
          >
            <Typography
              level="title-lg"
              startDecorator={<StackedBarChartIcon />}
            >
              Method Chart
            </Typography>
            <Divider style={{ background: "black" }} inset="none" />

            <MuiPieChart datas={pieCommute(rows)}/>
          </Card>
        </Box>
      </Grid>
    </Grid>
  )
}
