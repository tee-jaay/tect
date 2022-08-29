import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SubSectionTitle from "../inc/SubSectionTitle";

import BudgetForm from "./BudgetForm";

const Budget = ({ budget, projectId }) => {
  const [showEditBtn, setShowEditBtn] = useState(false);
  return (
    <div
      onMouseLeave={(e) => setShowEditBtn(false)}
      onMouseEnter={(e) => setShowEditBtn(true)}
      data-cy="budget-container"
    >
      <Typography variant="body2" gutterBottom>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SubSectionTitle content={"Budget:"} />
          <BudgetForm
            projectId={projectId}
            prevEstimate={budget?.estimate}
            prevSpent={budget?.spent}
            showEditBtn={showEditBtn}
          />
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Estimate</TableCell>
              <TableCell>Spent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell data-cy="budget-estimate-value">
                {!budget ? "0" : "$" + budget?.estimate}
              </TableCell>
              <TableCell data-cy="budget-spent-value">
                {!budget ? "0" : "$" + budget?.spent}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Typography>
    </div>
  );
};

export default Budget;
