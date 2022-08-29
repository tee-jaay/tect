import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { useDispatch } from "react-redux";
import { storeProjectBudget } from "../../../../../store/projectSlice";

const BudgetForm = ({ projectId, prevEstimate, prevSpent, showEditBtn }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [estimate, setEstimate] = useState(prevEstimate);
  const [spent, setSpent] = useState(prevSpent);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (estimate || spent) {
      let data = null;
      data = {
        projectId: projectId,
        budget: {
          estimate: estimate,
          spent: spent,
        },
      };
      dispatch(storeProjectBudget(data));
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {showEditBtn && (
        <Button
          size="small"
          variant="outlined"
          startIcon={<MonetizationOnTwoToneIcon />}
          onClick={handleClickOpen}
          sx={{ position: "absolute", right: 0 }}
          data-cy="budget-form-edit-btn"
        >
          Edit
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            size="small"
            autoFocus
            margin="dense"
            id="estimate"
            label="Estimate"
            type="number"
            fullWidth
            variant="outlined"
            value={estimate}
            onChange={(e) => setEstimate(e.target.value)}
            inputProps={{ "data-cy": "estimate" }}
          />
          <TextField
            size="small"
            autoFocus
            margin="dense"
            id="spent"
            label="Spent"
            type="number"
            fullWidth
            variant="outlined"
            value={spent}
            onChange={(e) => setSpent(e.target.value)}
            inputProps={{ "data-cy": "spent" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-cy="cancel-btn">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} data-cy="save-btn">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BudgetForm;
