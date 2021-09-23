import styled from "styled-components";

const Center = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function Classroom() {
  return (
    <Center>
      <div>Class 1</div>
    </Center>
  );
}
  
export default Classroom;
  