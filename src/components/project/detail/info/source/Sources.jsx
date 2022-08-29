import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../../../../store/projectSlice";
import SubSectionTitle from "../inc/SubSectionTitle";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

const Sources = ({ repoLink, urlOne, urlTwo, projectId }) => {
  const dispatch = useDispatch();

  const [repoEditBtnShow, setRepoEditBtnShow] = useState(false);
  const [repoLinkInputShow, setRepoLinkInputShow] = useState(false);
  const [repoLinkValue, setRepoLinkValue] = useState();

  const handleSubmit = () => {
    if (repoLinkValue) {
      let sendData = {
        projectId: projectId,
        data: { repoLink: repoLinkValue },
      };
      dispatch(updateProject(sendData));
    }
    setRepoLinkInputShow(false);
  };

  return (
    <div
      onMouseEnter={(e) => setRepoEditBtnShow(true)}
      onMouseLeave={(e) => setRepoEditBtnShow(false)}
      data-cy="source-container"
    >
      <div style={{ position: "relative" }}>
        <SubSectionTitle content={"Sources:"} />
        {repoEditBtnShow && (
          <Button
            startIcon={<AutoFixHighIcon />}
            size="small"
            variant="outlined"
            sx={{ position: "absolute", right: 0, top: 0 }}
            onClick={(e) => setRepoLinkInputShow(true)}
            data-cy="source-edit-btn"
          >
            edit
          </Button>
        )}
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Repository</TableCell>
            <TableCell>
              {repoLinkInputShow ? (
                <TextField
                  variant="standard"
                  size="small"
                  sx={{ width: "80%" }}
                  placeholder="Repo Link"
                  defaultValue={repoLink && repoLink}
                  value={repoLinkValue}
                  onChange={(e) => setRepoLinkValue(e.target.value)}
                  onBlur={handleSubmit}
                  inputProps={{ "data-cy": "source-input" }}
                />
              ) : (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  data-cy="source-url-value"
                >
                  {repoLink}
                </a>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Sources;
