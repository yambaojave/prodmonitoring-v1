"use client";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import QrCode2TwoToneIcon from "@mui/icons-material/QrCode2TwoTone";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import PrecisionManufacturingTwoToneIcon from "@mui/icons-material/PrecisionManufacturingTwoTone";
import EventSeatTwoToneIcon from "@mui/icons-material/EventSeatTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import { PostHeader, UpdateHeader, checkLatestWorkgroupModel, postDataProvider } from "../services/HeaderAPI";
import { Toaster, toast } from "sonner";
import { PostMan } from "../services/ManAPI";
import { PostMachine } from "../services/MachineAPI";
import { setSessionData } from "../utils/validationUtils";
import { PostMaterial } from "../services/MaterialAPI";

export default function JuiCardWorkGroupDetail({ latestWorkGroup }) {
  const [loading, setLoading] = React.useState(true);
  const [model, setModel] = React.useState("");
  const [state, setState] = React.useState("");
  const [headerId, setHeaderId] = React.useState(0);

  React.useEffect(() => {
    async function fetchModel() {
      try {
        const responseHeader = await checkLatestWorkgroupModel(latestWorkGroup.id);
        console.log(responseHeader)
        setModel(responseHeader.model);
        setState(responseHeader.status);
        setHeaderId(responseHeader.id);

        
      } catch (err) {
        console.log(err);
      }
    }

    if (loading) {
      fetchModel();
      setLoading(false);
    }
  }, []);

  const createDetails = async () => {
    try {
      if (model === "") {
        return toast.error("Please add a model before creating.");
      }
      const header = await PostHeader(latestWorkGroup.id, model);
      setModel(header.model);
      setState(true);
      toast.success(`Added new 4M/1E header with ID ${header.id}`);

      const responseMan = await PostMan(header.id);
      console.log(responseMan)
      if(responseMan.status === 202) {
        toast.success(`Added Man Operator for Header ID ${header.id}`);
      }

      const responseMachine = await PostMachine(header.id);
      console.log(responseMachine)
      if(responseMachine.status === 202) {
        toast.success(`Added Machine list for Header ID ${header.id}`);
      }

      const responseMaterial = await PostMaterial(header.id);
      console.log(responseMaterial)
      if(responseMaterial.status === 202) {
        toast.success(`Added BOM list for Header ID ${header.id}`);
      }

    } catch (err) {
      console.log(err);
    }
  };


  const updateDetails = async () => {
    try{
      console.log(headerId)
      const response = await UpdateHeader(headerId);
      if(response.status === 200) {
        toast.success(`Header ${headerId} updated.`);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const selectCurrentWorkGroupDetail = async () => {
    const response = await postDataProvider(headerId)
    if(setSessionData(response.headerId, latestWorkGroup.id)){
      window.location.reload(); 
    }
  }

  return (
    <>
      <Toaster richColors expand={true} />
      <Card
        variant="outlined"
        sx={{
          maxHeight: "max-content",
          maxWidth: "100%",
          mx: "auto",
          // to make the demo resizable
          overflow: "auto",
          // resize: 'horizontal',
        }}
      >
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
          Work Group Details
        </Typography>
        <Divider inset="none" />
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
            gap: 1.5,
          }}
        >
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Barcode / Work Group ID</FormLabel>
            <Input
              disabled
              endDecorator={<QrCode2TwoToneIcon />}
              value={latestWorkGroup.id}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Line</FormLabel>
            <Input
              disabled
              endDecorator={<PrecisionManufacturingTwoToneIcon />}
              value={latestWorkGroup.lines}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Model</FormLabel>
            <Input
              endDecorator={<EventSeatTwoToneIcon />}
              value={model || ""}
              onChange={(e) => setModel(e.target.value)}
              disabled={state}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Head Count</FormLabel>
            <Input
              disabled
              endDecorator={<PersonTwoToneIcon />}
              value={latestWorkGroup.wgShiftHeadcount}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Shift</FormLabel>
            <Input
              disabled
              endDecorator={<AccessTimeTwoToneIcon />}
              value={latestWorkGroup.wgShiftcode}
            />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Date</FormLabel>
            <Input
              disabled
              endDecorator={<CalendarMonthTwoToneIcon />}
              value={latestWorkGroup.created_at}
            />
          </FormControl>
          <CardActions>
            <Button
              variant="solid"
              color="success"
              startDecorator={<CreateNewFolderOutlinedIcon />}
              className="mx-1"
              onClick={createDetails}
              disabled={state}
            >
              CREATE
            </Button>
          </CardActions>
          <CardActions>
            <Button
              variant="solid"
              color="warning"
              startDecorator={<SystemUpdateAltOutlinedIcon />}
              className="mx-1"
              onClick={updateDetails}
              disabled={!state}
            >
              UPDATE
            </Button>
          </CardActions>
          <CardActions>
            <Button
              variant="solid"
              color="danger"
              startDecorator={<LibraryAddCheckOutlinedIcon />}
              className="mx-1"
              disabled={!state}
              onClick={selectCurrentWorkGroupDetail}
            >
              SELECT
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}
