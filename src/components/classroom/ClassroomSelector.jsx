import Door from "./Door";
import styled from "styled-components";

const ClassLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5vw;
  margin: 5vw;
`;

const Layout = styled.div`
  margin: 5vw 0;
  padding: 0 5vw;
  background: #FAFAFA;
`;

const Title = styled.div`
  width: 100%;
  color: #4FCFCF;
  text-align: center;
  font-size: 6vh;
`;

function ClassroomSelector({onClasroomSelected}) {
  return (
    <Layout>
      <Title>Your Classes</Title>
      <ClassLayout>
        <Door onEnter={() => onClasroomSelected(1)} subject="Science" time="10:00"></Door>
        <Door onEnter={() => onClasroomSelected(2)} subject="Math"></Door>
        <Door onEnter={() => onClasroomSelected(3)} subject="English"></Door>
        <Door onEnter={() => onClasroomSelected(4)} subject="History"></Door>
      </ClassLayout>
    </Layout>
  );
}

export default ClassroomSelector;
