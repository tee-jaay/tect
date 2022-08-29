import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { userId } = useParams();

  return (
    <Container>
      <h4>Edit user detail of id: {userId}</h4>
    </Container>
  );
};

export default Edit;
