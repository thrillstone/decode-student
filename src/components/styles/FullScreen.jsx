import styled from "styled-components";

const Style = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function FullScreen({children}) {
  return (
    <Style>
      {children}
    </Style>
  );
}

export default FullScreen;