import DepartmentsList from "components/DeparmentsList";
import { Container, Title } from "./DepartmentsPage.styled";

const DepartmentsPage = () => {
  return (
    <Container>
      <Title>Branches</Title>
      <DepartmentsList />
    </Container>
  );
};

export default DepartmentsPage;
