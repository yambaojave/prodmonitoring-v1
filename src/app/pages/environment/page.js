import dynamic from "next/dynamic";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Card, Divider, Typography } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import JuiLoading from "@/app/components/JuiLoading";
import { pieCommute } from "@/app/utils/helpers";
import { checkTokenCookies } from "@/app/services/ProtectRoute";
import { BASE_API_URL } from "@/app/data/constants";
import WorkgroupError from "@/app/components/WorkgroupError";
import axios from "axios";
import JuiTextarea from "@/app/components/JuiTextarea";
const BASE_API_URL_HEADER = `${BASE_API_URL}/environment`;

const MuiPieChart = dynamic(() => import("@/app/components/MuiPieChart"), {
  loading: () => <JuiLoading />,
});
const MuiDataGrid = dynamic(() => import("@/app/components/MuiDataGrid"), {
  loading: () => <JuiLoading />,
});

const rows = [
  {
    id: 1,
    temperature: 29.0,
    lighting: "OK",
    remark: null,
    updatedDate: "2023-09-06T08:36:12.0194082",
    headerId: 1,
  },
  {
    id: 2,
    temperature: 25.5,
    lighting: "OK",
    remark: null,
    updatedDate: "2023-09-11T10:35:00.4357555",
    headerId: 1,
  },
];

const getEnvironmentList = async (token) => {
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

  const rows = await getEnvironmentList(token);

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
                // to make the demo resizable
                overflow: "auto",
                // resize: 'horizontal',
              }}
            >
              <Typography level="title-lg" startDecorator={<InfoOutlined />}>
                Environment Details
              </Typography>
              <Divider style={{ background: "black" }} inset="none" />

              <MuiDataGrid rowsData={rows} columnName={"ENVIRONMENT"} />

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
                  Environment Chart
                </Typography>
                <Divider style={{ background: "black" }} inset="none" />

                <MuiPieChart datas={pieCommute(rows, "ENVIRONMENT")} />
              </Card>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
}
