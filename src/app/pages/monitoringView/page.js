"use client"
import jsphlogo from "@/app/assets/Joyson.png";
import { Box, Stack } from "@mui/joy";
import Image from "next/image";
import style from './page.module.css';
import MuiPieChart from "@/app/components/MuiPieChart";
import { Col, Row } from "react-bootstrap";
import React from "react";
import JuiModalLine from "@/app/components/JuiModalLine";
import JuiModalDetails from "@/app/components/JuiModalDetails";

const datas = [
  { label: "OK", name: "OK", value: 10, color: "green" },
  { label: "NOK", name: "NOT OK", value: 1, color: "red" },
  { label: "CON", name: "WITH CONDITION", value: 1, color: "yellow" },
];
  

export default function page() {
  const [modalLine, setModalLine] = React.useState(false);
  const [modalDetails, setModalDetails] = React.useState(false);


  return (
    <>
      
      <Box
        justifyContent="center"
        alignItems="center"
        style={{width : '95%', height : '85vh'}}
      >
        <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={jsphlogo} width={300} onClick={() => setModalLine(true)}/>
      </div>
      

      <Stack spacing={0} direction="row" flexWrap="wrap" useFlexGap className="mt-3 text-center">
        <div className={style.details}>
          <div className="m-auto"><h3>LINE:</h3></div>  
        </div>
        <div className={style.details}>
          <div className="m-auto"><h3>SHIFT:</h3></div>  
        </div>
        <div className={style.details}>
          <div className="m-auto"><h3>MODEL:</h3></div>  
        </div>
        <div className={style.details}>
          <div className="m-auto"><h3>DATE:</h3></div>  
        </div>

      </Stack>

      {/* <Stack spacing={0} direction="row" flexWrap="wrap" useFlexGap className="text-center">
        <div className={style.chart}>
          <div className="m-auto">
            <MuiPieChart datas={datas} page="MONITORING"/>
            <h3>MAN</h3>
          </div>  
        </div>
        <div className={style.chart}>
          <div className="m-auto">
            <MuiPieChart datas={datas} page="MONITORING"/>
            <h3>MACHINE</h3>
          </div>  
        </div>
        <div className={style.chart}>
          <div className="m-auto">
            <MuiPieChart datas={datas} page="MONITORING"/>
            <h3>METHOD</h3>
          </div>  
        </div>
        <div className={style.chart}>
          <div className="m-auto">
            <MuiPieChart datas={datas} page="MONITORING"/>
            <h3>MATERIAL</h3>
          </div>  
        </div>
        <div className={style.chart}>
          <div className="m-auto">
            <MuiPieChart datas={datas} page="MONITORING"/>
            <h3>ENVIRONMENT</h3>
          </div>  
        </div>

      </Stack> */}

      <Row className="text-center">
        <Col>
          <MuiPieChart datas={datas} page="MONITORING"/>
          <h3 onClick={() => setModalDetails(true)}>MAN</h3>
          <div className={style.remark}>Comment</div>
        </Col>
        <Col>
          <MuiPieChart datas={datas} page="MONITORING"/>
          <h3 onClick={() => setModalDetails(true)}>MACHINE</h3>
          <div className={style.remark}>Comment</div>
        </Col>
        <Col>
          <MuiPieChart datas={datas} page="MONITORING"/>
          <h3 onClick={() => setModalDetails(true)}>METHOD</h3>
          <div className={style.remark}>Comment</div>
        </Col>
        <Col>
          <MuiPieChart datas={datas} page="MONITORING"/>
          <h3 onClick={() => setModalDetails(true)}>Material</h3>
          <div className={style.remark}>Comment</div>
        </Col>
        <Col>
          <MuiPieChart datas={datas} page="MONITORING"/>
          <h3 onClick={() => setModalDetails(true)}>ENVIRONMENT</h3>
          <div className={style.remark}>Comment</div>
        </Col>
      </Row>
      
    </Box>
    <JuiModalLine open={modalLine} close={() => setModalLine(false)}/>
    <JuiModalDetails open={modalDetails} close={() => setModalDetails(false)}/>
    </>
  );
}
