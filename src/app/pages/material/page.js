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
const BASE_API_URL_HEADER = `${BASE_API_URL}/material`;

const MuiPieChart = dynamic(() => import("@/app/components/MuiPieChart"), {
  loading: () => <JuiLoading />,
});
const MuiDataGrid = dynamic(() => import("@/app/components/MuiDataGrid"), {
  loading: () => <JuiLoading />,
});

// const rows = [
//   {
//       "id": 1,
//       "componentItem": "24mm x 14mm",
//       "description": "ID Label F30",
//       "type": "BOM",
//       "status": "OK",
//       "remarks": ""
//   },
//   {
//       "id": 2,
//       "componentItem": "305862810161-AA",
//       "description": "Thread Oxley Yellow",
//       "type": "BOM",
//       "status": "OK",
//       "remarks": ""
//   },
//   {
//       "id": 3,
//       "componentItem": "306104910176-AA",
//       "description": "Thread Oxley 20/1 White",
//       "type": "BOM",
//       "status": "OK",
//       "remarks": ""
//   },
//   {
//       "id": 4,
//       "componentItem": "5017212",
//       "description": "HXHA Cutparts",
//       "type": "BOM",
//       "status": "OK",
//       "remarks": ""
//   },
//   {
//       "id": 5,
//       "componentItem": "7BDJ1022-AA",
//       "description": "VG03 Sewing Thread Light Green",
//       "type": "BOM",
//       "status": "OK",
//       "remarks": ""
//   },
//   {
//       "id": 6,
//       "componentItem": "7BDJ1023-AA",
//       "description": "VR09 Sewing Thread Red",
//       "type": "BOM",
//       "status": "OK",
//       "remarks": ""
//   },
//   {
//       "id": 10,
//       "componentItem": "Other item",
//       "description": "Other item something",
//       "type": "Other",
//       "status": "OK",
//       "remarks": ""
//   },
//   {
//       "id": 11,
//       "componentItem": "Items Other test",
//       "description": "Items Other test again",
//       "type": "Other",
//       "status": "OK",
//       "remarks": ""
//   }
// ];

const getMaterialList = async (token) => {
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

  const rows = await getMaterialList(token);

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
                Material Details
              </Typography>
              <Divider style={{ background: "black" }} inset="none" />

              <MuiDataGrid rowsData={rows} columnName={"MATERIAL"} />

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
                  Material Chart
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
