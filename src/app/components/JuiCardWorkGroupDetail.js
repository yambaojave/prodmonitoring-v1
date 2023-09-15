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
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';

export default function JuiCardWorkGroupDetail({latestWorkGroup}) {

  return (
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
          <Input disabled endDecorator={<QrCode2TwoToneIcon />} value={latestWorkGroup.id}/>
        </FormControl>
        <FormControl>
          <FormLabel>Line</FormLabel>
          <Input disabled endDecorator={<PrecisionManufacturingTwoToneIcon />} value={latestWorkGroup.lines}/>
        </FormControl>
        <FormControl>
          <FormLabel>Model</FormLabel>
          <Input endDecorator={<EventSeatTwoToneIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>Head Count</FormLabel>
          <Input disabled endDecorator={<PersonTwoToneIcon />} value={latestWorkGroup.wgShiftHeadcount}/>
        </FormControl>
        <FormControl>
          <FormLabel>Shift</FormLabel>
          <Input disabled endDecorator={<AccessTimeTwoToneIcon />} value={latestWorkGroup.wgShiftcode}/>
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Date</FormLabel>
          <Input disabled endDecorator={<CalendarMonthTwoToneIcon />} value={latestWorkGroup.created_at} />
        </FormControl>
        <CardActions>
          <Button variant="solid" color="success" startDecorator={<CreateNewFolderOutlinedIcon />} className="mx-1">
            CREATE
          </Button>
        </CardActions>
        <CardActions>
          <Button variant="solid" color="warning" startDecorator={<SystemUpdateAltOutlinedIcon />} className="mx-1">
            UPDATE
          </Button>
        </CardActions>
        <CardActions>
          <Button variant="solid" color="danger" startDecorator={<LibraryAddCheckOutlinedIcon />} className="mx-1">
            SELECT
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
