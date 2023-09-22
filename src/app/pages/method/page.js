import dynamic from "next/dynamic";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Card, Divider, Typography } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import JuiLoading from "@/app/components/JuiLoading";
import { pieCommute } from "@/app/utils/helpers";
import JuiTextarea from "@/app/components/JuiTextarea";
import { checkTokenCookies } from "@/app/services/ProtectRoute";
import axios from "axios";
import { BASE_API_URL } from "@/app/data/constants";
import WorkgroupError from "@/app/components/WorkgroupError";
const BASE_API_URL_HEADER = `${BASE_API_URL}/method`;

const MuiPieChart = dynamic(() => import("@/app/components/MuiPieChart"), {
  loading: () => <JuiLoading />,
});
const MuiDataGrid = dynamic(() => import("@/app/components/MuiDataGrid"), {
  loading: () => <JuiLoading />,
});

const rows = [
  {
    id: 7,
    controlNumber: "HXHDAS15N",
    processNumber: "AS15",
    status: "NOT OK",
    date_created: "2023-09-12T16:37:09.6186504",
    headerId: 1,
  },
  {
    id: 8,
    controlNumber: "HXHDAS01N",
    processNumber: "AS01",
    status: "OK",
    date_created: "2023-09-14T09:10:10.9204092",
    headerId: 1,
  },
];

const getMethodList = async (token) => {
  try {
    const config = {
      headers: { Authorization: token },
    };

    const response = await axios.get(`${BASE_API_URL_HEADER}/list`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default async function page() {
  const token = checkTokenCookies();

  const rows = await getMethodList(token);

  return (
    <Grid container spacing={2} className="p-3">
      {rows === undefined ? (
        <WorkgroupError />
      ) : (
        <>
          <Grid item xs={8}>
            <Card
              variant="outlined"
              sx={{
                height: 850,
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
                  Method Chart
                </Typography>
                <Divider style={{ background: "black" }} inset="none" />

                <MuiPieChart datas={pieCommute(rows)} />
              </Card>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
}
