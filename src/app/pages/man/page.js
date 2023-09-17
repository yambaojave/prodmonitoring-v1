import dynamic from "next/dynamic";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Card, Divider, Typography } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import JuiLoading from "@/app/components/JuiLoading";
import { pieCommute } from "@/app/utils/helpers";
import JuiTextarea from "@/app/components/JuiTextarea";

const MuiPieChart = dynamic(() => import("@/app/components/MuiPieChart"), {
  loading: () => <JuiLoading />,
});
const MuiDataGrid = dynamic(() => import("@/app/components/MuiDataGrid"), {
  loading: () => <JuiLoading />,
});

const rows = [
  {
    id: 1,
    employeeId: "0181264",
    name: "Lumberio, Kimberly",
    status: "NOT OK",
    remarks: "",
    date_created: "2023-09-06T08:31:56.8102576",
    date_updated: "08:21:43.2376411",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 2,
    employeeId: "1902094",
    name: "Alteria, Bea Ross",
    status: "WITH CONDITION",
    remarks: "",
    date_created: "2023-09-06T08:31:56.8443906",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 3,
    employeeId: "1902026",
    name: "Delamida, Analyn",
    status: "OK",
    remarks: "",
    date_created: "2023-09-06T08:31:56.8641193",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 4,
    employeeId: "1901931",
    name: "Velasco, Margie",
    status: "OK",
    remarks: "",
    date_created: "2023-09-06T08:31:56.8794289",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 5,
    employeeId: "1901848",
    name: "Esguerra, Leneth",
    status: "OK",
    remarks: "",
    date_created: "2023-09-06T08:31:56.8962179",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 6,
    employeeId: "1902108",
    name: "Ramos, Justine",
    status: "OK",
    remarks: "",
    date_created: "2023-09-06T08:31:56.9154675",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 7,
    employeeId: "1901980",
    name: "Tenorio, Melody",
    status: "OK",
    remarks: "",
    date_created: "2023-09-06T08:31:56.9381905",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 8,
    employeeId: "1902073",
    name: "Calmante, Mark Christian",
    status: "OK",
    remarks: "",
    date_created: "2023-09-06T08:31:56.9521789",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 9,
    employeeId: "1901929",
    name: "Cayabyab, Danie Lyh",
    status: "OK",
    remarks: "",
    date_created: "2023-09-06T08:31:56.9589299",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-06 08:31:56",
  },
  {
    id: 13,
    employeeId: "2435",
    name: "Dela Cruz, Jennifer",
    status: "OK",
    remarks: "",
    date_created: "2023-09-11T13:52:54.3985275",
    date_updated: "00:00:00",
    headerId: 1,
    trainees: [],
    convertDate: "2023-09-11 13:52:54",
  },
];

pieCommute(rows);

export default function page() {
  return (
    <Grid container spacing={2} className="p-3">
      <Grid item xs={8}>
        <Card
          variant="outlined"
          sx={{
            height: 850,
            maxWidth: "100%",
            mx: "auto",
            // to make the demo resizable
            overflow: "auto",
            // resize: 'horizontal',
          }}
        >
          <Typography level="title-lg" startDecorator={<InfoOutlined />}>
            MAN Details
          </Typography>
          <Divider style={{ background: "black" }} inset="none" />

          <MuiDataGrid rowsData={rows} columnName={"MAN"} />

          <div className="mt-5">
            <JuiTextarea />
          </div>
          
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
              MAN Chart
            </Typography>
            <Divider style={{ background: "black" }} inset="none" />

            <MuiPieChart datas={pieCommute(rows)}/>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
