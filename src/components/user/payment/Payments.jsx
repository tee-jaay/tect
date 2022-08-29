import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import PaymentIcon from "../../../helpers/PaymentIcon";
import Web3Account from "./cryptocurrency/Web3Account";
import Paypal from "./paypal/Paypal";
import StripeC from "./stripe/Stripe";

const Payments = ({
  isAuthenticated,
  authenticate,
  user,
  logout,
  isLoggingOut,
}) => {
  const [tabValue, setTabValue] = useState("cryptocurrency");

  const handleChangeTab = (e, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", flexGrow: "grow" }}>
        <TabContext value={tabValue}>
          <Box sx={{ flex: "1/4" }}>
            <TabList
              onChange={handleChangeTab}
              aria-label="payments"
              orientation="vertical"
            >
              <Tab
                label="Crypto"
                value="cryptocurrency"
                icon={<PaymentIcon name="ethereum" />}
              />
              <Tab
                label="Paypal"
                value="paypal"
                icon={<PaymentIcon name="paypal" />}
              />
              <Tab
                label="Stripe"
                value="stripe"
                icon={<PaymentIcon name="stripe" />}
              />
            </TabList>
          </Box>
          <Box sx={{ flex: "3/4" }}>
            <TabPanel value="cryptocurrency">
              <Web3Account
                isAuthenticated={isAuthenticated}
                authenticate={authenticate}
                user={user}
                logout={logout}
                isLoggingOut={isLoggingOut}
              />
            </TabPanel>
            <TabPanel value="paypal">
              <Paypal amount={"345.98"} />
            </TabPanel>
            <TabPanel value="stripe">
              <StripeC />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  );
};

export default Payments;
