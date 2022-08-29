import { Button, Chip } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import TimelineIcon from "@mui/icons-material/Timeline";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import AssignmentLateTwoToneIcon from "@mui/icons-material/AssignmentLateTwoTone";
import HourglassFullTwoToneIcon from "@mui/icons-material/HourglassFullTwoTone";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import SettingsApplicationsTwoToneIcon from "@mui/icons-material/SettingsApplicationsTwoTone";

let makeColor = "";

export const drawerMenuItemIcon = (itemName) => {
  let icon = "";
  switch (itemName) {
    case "dashboard":
      icon = <CottageTwoToneIcon />;
      break;
    case "projects":
      icon = <ListAltIcon />;
      break;
    case "issues":
      icon = <TimelineIcon />;
      break;
    case "inbox":
      icon = <InboxIcon />;
      break;
    case "mailbox":
      icon = <EmailTwoToneIcon />;
      break;
    case "settings":
      icon = <SettingsApplicationsTwoToneIcon />;
      break;
    case "users":
      icon = <GroupTwoToneIcon />;
      break;
    default:
      icon = <HomeIcon />;
  }
  return icon;
};

export const statusChip = (type, status) => {
  var statusColor = "";
  switch (status) {
    case "completed":
      statusColor = "#27ae60";
      break;
    case "review":
      statusColor = "#f39c12";
      break;
    case "active":
      statusColor = "#3f51b5";
      break;
    case "cancelled":
      statusColor = "#c0392b";
      break;
    default:
      statusColor = "#000000";
  }

  if (type === "project") {
    return (
      <Chip
        variant="outlined"
        size="small"
        label={status}
        style={{ color: statusColor }}
      />
    );
  }
  return (
    <Chip
      variant="default"
      size="small"
      label={status}
      style={{ color: "#FFFFFF", backgroundColor: statusColor }}
    />
  );
};

export const flagPriority = (level) => {
  switch (level) {
    case "low":
      makeColor = "#f39c12";
      break;
    case "high":
      makeColor = "#27ae60";
      break;
    case "medium":
      makeColor = "#3f51b5";
      break;
    case "critical":
      makeColor = "#c0392b";
      break;
    default:
      makeColor = "#f39c12";
  }

  return (
    <Button size="small" style={{ color: makeColor }} endIcon={<FlagIcon />}>
      {level}
    </Button>
  );
};

export const statusColor = (status) => {
  if (status === "open") {
    makeColor = "rgb(39, 174, 96)";
  }
  if (status === "closed") {
    makeColor = "rgb(243, 156, 18)";
  }
  return <span style={{ color: makeColor }}>{status}</span>;
};

export const priorityColor = (priority) => {
  switch (priority) {
    case "low":
      makeColor = "#388e3c";
      break;
    case "medium":
      makeColor = "#115293";
      break;
    case "high":
      makeColor = "#9a0036";
      break;
    case "urgent":
      makeColor = "#d32f2f";
      break;
    default:
      makeColor = "";
  }

  return (
    <Chip
      size="small"
      label={priority}
      style={{ backgroundColor: makeColor, color: "#fff" }}
    >
      {priority}
    </Chip>
  );
};

export const typeChip = (type) => {
  var typeColor = "";
  switch (type) {
    case "bug":
      typeColor = "#f44336";
      break;
    case "feature":
      typeColor = "#ffb74d";
      break;
    case "upgrade":
      typeColor = "#e33371";
      break;
    case "update":
      typeColor = "#64b5f6";
      break;
    case "maintenance":
      typeColor = "#81c784";
      break;
    default:
      typeColor = "";
  }
  return (
    <Chip
      variant="outlined"
      size="small"
      label={type}
      style={{ color: typeColor }}
    />
  );
};

export const issueSeverityChip = (severity) => {
  var severityColor = "";
  switch (severity) {
    case "minor":
      severityColor = "#27ae60";
      break;
    case "major":
      severityColor = "#f39c12";
      break;
    case "moderate":
      severityColor = "#3f51b5";
      break;
    case "critical":
      severityColor = "#27ae60";
      break;
    default:
      severityColor = "";
  }

  if (severity === "minor") {
    return (
      <Chip
        variant="outlined"
        size="small"
        label={severity}
        style={{ color: severityColor }}
        icon={<FiberManualRecordTwoToneIcon style={{ color: severityColor }} />}
      />
    );
  }
  if (severity === "major") {
    return (
      <Chip
        variant="outlined"
        size="small"
        label={severity}
        style={{ color: severityColor }}
        icon={<AcUnitTwoToneIcon style={{ color: severityColor }} />}
      />
    );
  }
  if (severity === "moderate") {
    return (
      <Chip
        variant="outlined"
        size="small"
        label={severity}
        style={{ color: severityColor }}
        icon={<HourglassFullTwoToneIcon style={{ color: severityColor }} />}
      />
    );
  }
  if (severity === "critical") {
    return (
      <Chip
        variant="outlined"
        size="small"
        label={severity}
        style={{ color: severityColor }}
        icon={<AssignmentLateTwoToneIcon style={{ color: severityColor }} />}
      />
    );
  }
};

export const recentProjectStatus = (status) => {
  let rpcolor = "";
  switch (status) {
    case "completed":
      rpcolor = "#27ae60";
      break;
    case "review":
      rpcolor = "#f39c12";
      break;
    case "active":
      rpcolor = "#3f51b5";
      break;
    case "cancelled":
      rpcolor = "#c0392b";
      break;
    default:
      rpcolor = "green";
  }
  return rpcolor;
};
