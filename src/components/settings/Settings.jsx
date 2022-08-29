import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Container } from "@mui/material";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import PolicyTwoToneIcon from "@mui/icons-material/PolicyTwoTone";
import MiscellaneousServicesTwoToneIcon from "@mui/icons-material/MiscellaneousServicesTwoTone";
import PatternTwoToneIcon from "@mui/icons-material/PatternTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import EuroTwoToneIcon from "@mui/icons-material/EuroTwoTone";
import Landing from "./landing/Landing";
import PrivacyPolicy from "./privacy-policy/PrivacyPolicy";
import TermsOfService from "./terms-of-service/TermsOfService";
import Authentication from "./authentication/Authentication";
import GDPR from "./gdpr/GDPR";
import Disclaimer from "./disclaimer/disclaimer";
import { useDispatch } from "react-redux";
import { getPages } from "../../store/pageSlice";
import TopBreadCrumb from "../common/layout/breadcrumb/TopBreadCrumb";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Settings = ({ page, pageTitle }) => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);

  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} />
      <Box sx={{ width: "100%" }} component={Card} raised>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="page settings"
          >
            <Tab
              icon={<HomeWorkTwoToneIcon />}
              iconPosition="bottom"
              label="Landing"
              {...a11yProps(0)}
            />
            <Tab
              icon={<PolicyTwoToneIcon />}
              iconPosition="bottom"
              label="Privacy Policy"
              {...a11yProps(1)}
            />
            <Tab
              icon={<MiscellaneousServicesTwoToneIcon />}
              iconPosition="bottom"
              label="Terms of Service"
              {...a11yProps(2)}
            />
            <Tab
              icon={<EuroTwoToneIcon />}
              iconPosition="bottom"
              label="GDPR"
              {...a11yProps(3)}
            />
            <Tab
              icon={<MenuBookTwoToneIcon />}
              iconPosition="bottom"
              label="Disclaimer"
              {...a11yProps(4)}
            />
            <Tab
              icon={<PatternTwoToneIcon />}
              iconPosition="bottom"
              label="Authentication"
              {...a11yProps(5)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Landing />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PrivacyPolicy />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TermsOfService />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <GDPR />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Disclaimer />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Authentication />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Settings;
