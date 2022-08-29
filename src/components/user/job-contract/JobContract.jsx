import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

const JobContract = () => {
  return (
    <>
      <Typography variant="h6" component="h6">
        Contract Status
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Typography
        variant="body1"
        component="body1"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>
          <strong>Hourly Rate</strong> :
        </span>
        <span>
          USD $<strong>24</strong>
        </span>
        <span>||</span>
        <span>
          <strong>0.0003</strong> ETH
        </span>
      </Typography>
    </>
  );
};

export default JobContract;
